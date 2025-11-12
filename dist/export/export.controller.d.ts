import { ExportService, ModuleName } from './export.service';
import { ExportRowsDto } from './export.dto';
export declare class ExportController {
    private readonly exportService;
    constructor(exportService: ExportService);
    exportData(module: ModuleName, res: any, limit?: string): Promise<void>;
    exportRows(dto: ExportRowsDto, res: any): Promise<void>;
}
