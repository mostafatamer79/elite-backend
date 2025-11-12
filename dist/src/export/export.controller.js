"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportController = void 0;
const common_1 = require("@nestjs/common");
const export_service_1 = require("./export.service");
const export_dto_1 = require("./export.dto");
let ExportController = class ExportController {
    constructor(exportService) {
        this.exportService = exportService;
    }
    async exportData(module, res, limit) {
        return this.exportService.exportEntityToExcel(this.exportService.dataSource, module, res, { exportLimit: limit });
    }
    async exportRows(dto, res) {
        const { rows, fileName, sheetName, columns } = dto;
        return this.exportService.exportRowsToExcel(res, rows, { fileName, sheetName, columns });
    }
};
exports.ExportController = ExportController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('module')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", Promise)
], ExportController.prototype, "exportData", null);
__decorate([
    (0, common_1.Post)('rows'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, transform: true })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [export_dto_1.ExportRowsDto, Object]),
    __metadata("design:returntype", Promise)
], ExportController.prototype, "exportRows", null);
exports.ExportController = ExportController = __decorate([
    (0, common_1.Controller)('export'),
    __metadata("design:paramtypes", [export_service_1.ExportService])
], ExportController);
//# sourceMappingURL=export.controller.js.map