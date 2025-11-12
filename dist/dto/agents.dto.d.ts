import { AgentApprovalStatus } from '../entities/global.entity';
export declare class CreateAgentDto {
    userId?: number;
    cityId: number;
    identityProof: string;
    residencyDocument?: string;
}
export declare class UpdateAgentDto {
    cityId?: number;
    identityProofUrl?: string;
    residencyDocumentUrl?: string;
    status?: AgentApprovalStatus;
    kycNotes?: string;
}
export declare class ApproveAgentDto {
    status: AgentApprovalStatus;
    kycNotes?: string;
}
export declare class AgentQueryDto {
    status?: AgentApprovalStatus;
    cityId?: number;
    page?: number;
    limit?: number;
}
