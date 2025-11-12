import { QualityCaseStatus, QualityCasePriority } from '../entities/global.entity';
export declare class CreateQualityCaseDto {
    title: string;
    description?: string;
    relatedTable?: string;
    relatedId?: number;
    priority?: QualityCasePriority;
}
export declare class UpdateQualityCaseDto {
    title?: string;
    description?: string;
    status?: QualityCaseStatus;
    priority?: QualityCasePriority;
    assigneeId?: number;
}
export declare class AddCaseNoteDto {
    note: string;
}
export declare class QualityCaseQueryDto {
    status?: QualityCaseStatus;
    priority?: QualityCasePriority;
    assigneeId?: number;
    page?: number;
    limit?: number;
}
