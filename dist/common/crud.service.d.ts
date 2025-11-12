import { Repository, SelectQueryBuilder } from 'typeorm';
export interface CustomPaginatedResponse<T> {
    total_records: number;
    current_page: number;
    per_page: number;
    records: T[];
}
export declare class CRUD {
    static findAll<T>(repository: Repository<T>, entityName: string, search?: string, page?: any, limit?: any, sortBy?: string, sortOrder?: 'ASC' | 'DESC', relations?: string[], searchFields?: string[], filters?: Record<string, any>, extraFilters?: any): Promise<CustomPaginatedResponse<T>>;
    static joinNestedRelations<T>(query: SelectQueryBuilder<T>, repository: Repository<T>, rootAlias: string, relations: string[]): void;
    static delete<T>(repository: Repository<T>, entityName: string, id: number | string): Promise<{
        message: string;
    }>;
    static softDelete<T>(repository: Repository<T>, entityName: string, id: number | string): Promise<{
        message: string;
    }>;
    static findOne<T>(repository: Repository<T>, entityName: string, id: number | string, relations?: string[]): Promise<T>;
    static exportEntityToExcel<T>(repository: Repository<T>, fileName: string, res: any, options?: {
        exportLimit?: number | string;
        columns?: {
            header: string;
            key: string;
            width?: number;
        }[];
    }): Promise<void>;
}
