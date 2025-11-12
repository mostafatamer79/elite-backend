declare class ColumnDto {
    header: string;
    key: string;
    width?: number;
}
export declare class ExportRowsDto {
    rows: any[];
    fileName?: string;
    sheetName?: string;
    columns?: ColumnDto[];
}
export {};
