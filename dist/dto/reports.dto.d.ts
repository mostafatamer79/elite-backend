import { ReportSnapshotType } from '../entities/global.entity';
export declare class GenerateReportDto {
    type: ReportSnapshotType;
    periodStart: string;
    periodEnd: string;
}
export declare class ReportQueryDto {
    type?: ReportSnapshotType;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
}
export declare class AgentPerformanceQueryDto {
    agentId?: number;
    startDate: string;
    endDate: string;
}
export declare class MarketingPerformanceQueryDto {
    marketerId?: number;
    startDate: string;
    endDate: string;
}
