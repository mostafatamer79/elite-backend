"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFailedErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let QueryFailedErrorFilter = class QueryFailedErrorFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const code = exception?.driverError?.code;
        const detail = exception?.driverError?.detail ?? exception?.message;
        const pgMap = {
            '23503': {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'Cannot delete or update because related records exist.',
                error: 'Foreign Key Constraint Violation',
            },
            '23505': {
                status: common_1.HttpStatus.CONFLICT,
                message: 'Duplicate value violates unique constraint.',
                error: 'Unique Constraint Violation',
            },
            '23502': {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'A required field is missing a value.',
                error: 'Not Null Violation',
            },
            '23514': {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'Value fails a check constraint.',
                error: 'Check Constraint Violation',
            },
            '22P02': {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'Invalid input format.',
                error: 'Invalid Text Representation',
            },
            '42P01': {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'Referenced table does not exist or is not available.',
                error: 'Missing FROM Clause Entry',
            },
            '42703': {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: 'Referenced column does not exist.',
                error: 'Undefined Column',
            },
        };
        if (code && pgMap[code]) {
            const { status, message, error } = pgMap[code];
            return response.status(status).json({
                statusCode: status,
                message,
                error,
                code,
                details: detail,
            });
        }
        return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Unexpected database error.',
            error: 'Database Error',
            code,
            details: detail,
        });
    }
};
exports.QueryFailedErrorFilter = QueryFailedErrorFilter;
exports.QueryFailedErrorFilter = QueryFailedErrorFilter = __decorate([
    (0, common_1.Catch)(typeorm_1.QueryFailedError)
], QueryFailedErrorFilter);
//# sourceMappingURL=QueryFailedErrorFilter.js.map