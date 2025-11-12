"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD = void 0;
const ExcelJS = require("exceljs");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
class CRUD {
    static async findAll(repository, entityName, search, page = 1, limit = 10, sortBy, sortOrder = 'DESC', relations, searchFields, filters, extraFilters) {
        const pageNumber = Number(page) || 1;
        const limitNumber = Number(limit) || 10;
        if (isNaN(pageNumber) || isNaN(limitNumber) || pageNumber < 1 || limitNumber < 1) {
            throw new common_1.BadRequestException('Pagination parameters must be valid numbers greater than 0.');
        }
        if (!['ASC', 'DESC'].includes(sortOrder)) {
            throw new common_1.BadRequestException("Sort order must be either 'ASC' or 'DESC'.");
        }
        const skip = (pageNumber - 1) * limitNumber;
        const safeAlias = ['user', 'order', 'group'].includes(entityName.toLowerCase())
            ? `${entityName}_alias`
            : entityName;
        const query = repository.createQueryBuilder(safeAlias).skip(skip).take(limitNumber);
        function flatten(obj, prefix = '') {
            let result = {};
            Object.entries(obj).forEach(([key, value]) => {
                const prefixedKey = prefix ? `${prefix}.${key}` : key;
                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    Object.assign(result, flatten(value, prefixedKey));
                }
                else {
                    result[prefixedKey] = value;
                }
            });
            return result;
        }
        if (relations?.length) {
            CRUD.joinNestedRelations(query, repository, entityName, relations);
        }
        relations?.forEach(relation => {
            const alias = relation.includes('.') ? relation.replace(/\./g, '_') : relation;
            const alreadyJoined = query.expressionMap.joinAttributes.some(j => j.alias?.name === alias);
            if (!alreadyJoined) {
                query.leftJoinAndSelect(`${entityName}.${relation}`, alias);
            }
        });
        if (filters && Object.keys(filters).length > 0) {
            const flatFilters = flatten(filters);
            Object.entries(flatFilters).forEach(([flatKey, value]) => {
                if (value !== null && value !== undefined && value !== '') {
                    const paramKey = flatKey.replace(/\./g, '_');
                    let aliasPath;
                    if (flatKey.includes('.')) {
                        const parts = flatKey.split('.');
                        if (parts.length > 1) {
                            const relation = parts.slice(0, -1).join('.');
                            const column = parts[parts.length - 1];
                            aliasPath = `${relation}.${column}`;
                        }
                        else {
                            aliasPath = `${entityName}_${flatKey.replace(/\./g, '_')}`;
                        }
                    }
                    else {
                        aliasPath = `${entityName}.${flatKey}`;
                    }
                    query.andWhere(`${aliasPath} = :${paramKey}`, {
                        [paramKey]: value,
                    });
                }
            });
        }
        if (extraFilters) {
            const { priceMin, priceMax, type } = extraFilters;
            if (priceMin !== undefined) {
                query.andWhere(`${entityName}.price >= :priceMin`, { priceMin });
            }
            if (priceMax !== undefined) {
                query.andWhere(`${entityName}.price <= :priceMax`, { priceMax });
            }
            if (type) {
                const propertyTypeAlias = query.expressionMap.aliases.find(a => a.name === 'propertyType')?.name || 'property_propertyType';
                query.andWhere(`${propertyTypeAlias}.name ILIKE :type`, { type: `%${type}%` });
            }
        }
        if (search && searchFields?.length >= 1) {
            query.andWhere(new typeorm_1.Brackets(qb => {
                searchFields.forEach(field => {
                    const col = repository.metadata.columns.find(c => c.propertyName === field);
                    const columnName = col?.databasePath || field;
                    const typeStr = String(col?.type || '').toLowerCase();
                    if (col?.enum && Array.isArray(col.enum)) {
                        if (col.enum.includes(search)) {
                            qb.orWhere(`${entityName}.${columnName} = :enumVal`, { enumVal: search });
                        }
                        return;
                    }
                    const isNumericType = ['int', 'int2', 'int4', 'int8', 'integer', 'bigint', 'smallint', 'numeric', 'decimal', 'float', 'float4', 'float8', 'double precision', Number].includes(col?.type);
                    if (isNumericType) {
                        const n = Number(search);
                        if (!Number.isNaN(n)) {
                            qb.orWhere(`${entityName}.${columnName} = :n`, { n });
                        }
                        return;
                    }
                    if (typeStr === 'jsonb' || typeStr === 'json') {
                        qb.orWhere(`${entityName}.${columnName}::text ILIKE :s`, { s: `%${search}%` });
                        return;
                    }
                    qb.orWhere(`${entityName}.${columnName}::text ILIKE :s`, { s: `%${search}%` });
                });
            }));
        }
        const defaultSortBy = 'createdAt';
        const sortField = sortBy || defaultSortBy;
        const sortDirection = sortOrder || 'DESC';
        const columnExists = repository.metadata.columns.some(col => col.propertyName === sortField);
        if (!columnExists) {
            throw new common_1.BadRequestException(`Invalid sortBy field: '${sortField}'`);
        }
        query.orderBy(`${query.alias}.${sortField}`, sortDirection);
        const [data, total] = await query.getManyAndCount();
        return {
            total_records: total,
            current_page: pageNumber,
            per_page: limitNumber,
            records: data,
        };
    }
    static joinNestedRelations(query, repository, rootAlias, relations) {
        const addedAliases = new Set();
        relations.forEach(path => {
            const segments = path.split('.');
            let parentAlias = rootAlias;
            segments.forEach(seg => {
                const alias = `${parentAlias}_${seg}`;
                if (!addedAliases.has(alias)) {
                    query.leftJoinAndSelect(`${parentAlias}.${seg}`, alias);
                    addedAliases.add(alias);
                }
                parentAlias = alias;
            });
        });
        function validatePathAndReturnJoins(path) {
            const segments = path.split('.');
            let currentMeta = repository.metadata;
            let parentAlias = rootAlias;
            const steps = [];
            let aliasPath = rootAlias;
            for (const seg of segments) {
                const relMeta = currentMeta.relations.find(r => r.propertyName === seg);
                if (!relMeta) {
                    throw new common_1.BadRequestException(`Invalid relation segment '${seg}' in '${path}'`);
                }
                const joinPath = `${parentAlias}.${seg}`;
                const alias = (aliasPath + '_' + seg).replace(/\./g, '_');
                steps.push({ joinPath, alias });
                parentAlias = alias;
                aliasPath = alias;
                currentMeta = relMeta.inverseEntityMetadata;
            }
            return steps;
        }
        for (const path of relations) {
            const steps = validatePathAndReturnJoins(path);
            for (const { joinPath, alias } of steps) {
                if (!addedAliases.has(alias)) {
                    query.leftJoinAndSelect(joinPath, alias);
                    addedAliases.add(alias);
                }
            }
        }
    }
    static async delete(repository, entityName, id) {
        const entity = await repository.findOne({ where: { id } });
        if (!entity) {
            throw new common_1.BadRequestException(`${entityName} with ID ${id} not found.`);
        }
        await repository.delete(id);
        return {
            message: `${entityName} deleted successfully.`,
        };
    }
    static async softDelete(repository, entityName, id) {
        const entity = await repository.findOne({ where: { id } });
        if (!entity) {
            throw new common_1.BadRequestException(`${entityName} with ID ${id} not found.`);
        }
        await repository.softDelete(id);
        return {
            message: `${entityName} soft-deleted successfully.`,
        };
    }
    static async findOne(repository, entityName, id, relations) {
        if (relations?.length > 0) {
            const invalidRelations = relations.filter(relation => !repository.metadata.relations.some(rel => rel.propertyName === relation));
            if (invalidRelations.length > 0) {
                throw new common_1.BadRequestException(`Invalid relations: ${invalidRelations.join(', ')}`);
            }
        }
        const entity = await repository.findOne({
            where: { id },
            relations: relations || [],
        });
        if (!entity) {
            throw new common_1.BadRequestException(`${entityName} with ID ${id} not found.`);
        }
        return entity;
    }
    static async exportEntityToExcel(repository, fileName, res, options = {}) {
        const exportLimit = Number(options.exportLimit) || 10;
        const data = await repository.find({
            take: exportLimit,
        });
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Report');
        const columns = options.columns ??
            (data.length > 0
                ? Object.keys(data[0])
                    .filter(key => key !== 'updated_at' && key !== 'deleted_at')
                    .map(key => ({ header: key, key, width: 20 }))
                : []);
        worksheet.columns = columns;
        data.forEach(item => {
            const rowData = { ...item };
            delete rowData.updated_at;
            delete rowData.deleted_at;
            const row = worksheet.addRow(rowData);
            row.eachCell(cell => {
                cell.alignment = { horizontal: 'center', vertical: 'middle' };
            });
        });
        worksheet.getRow(1).eachCell(cell => {
            cell.font = { bold: true };
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFCCCCCC' },
            };
            cell.alignment = { horizontal: 'center', vertical: 'middle' };
        });
        worksheet.columns.forEach(column => {
            let maxLength = 10;
            column.eachCell({ includeEmpty: true }, cell => {
                const cellValue = cell.value ? cell.value.toString() : '';
                if (cellValue.length > maxLength)
                    maxLength = cellValue.length;
            });
            column.width = maxLength + 2;
        });
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}.xlsx`);
        await workbook.xlsx.write(res);
        res.end();
    }
}
exports.CRUD = CRUD;
//# sourceMappingURL=crud.service.js.map