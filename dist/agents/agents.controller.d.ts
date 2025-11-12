import { AgentsService } from "./agents.service";
import { ApproveAgentDto } from "../../dto/agents.dto";
interface RequestWithUser extends Request {
    user: any;
}
export declare class AgentsController {
    private readonly agentsService;
    constructor(agentsService: AgentsService);
    create(createAgentDto: any, req: RequestWithUser, files?: {
        identityProof?: Express.Multer.File[];
        residencyDocument?: Express.Multer.File[];
    }): Promise<import("entities/global.entity").Agent>;
    getMyDashboard(req: RequestWithUser): Promise<{
        stats: {
            totalAppointments: number;
            totalEarnings: string | number;
            pendingBalance: string | number;
            averageRating: number;
        };
        recentPayments: import("entities/global.entity").AgentPayment[];
        recentReviews: import("entities/global.entity").CustomerReview[];
        recentAppointments: import("entities/global.entity").Appointment[];
    }>;
    findAll(query: any): Promise<{
        total_records: number;
        current_page: number;
        per_page: number;
        records: import("entities/global.entity").Agent[];
    }>;
    findOne(id: string): Promise<import("entities/global.entity").Agent>;
    update(id: string, updateAgentDto: any, files?: {
        identityProof?: Express.Multer.File[];
        residencyDocument?: Express.Multer.File[];
    }): Promise<import("entities/global.entity").Agent>;
    remove(id: string): Promise<void>;
    approve(id: string, approveAgentDto: ApproveAgentDto): Promise<import("entities/global.entity").Agent>;
    findByUserId(userId: string): Promise<import("entities/global.entity").Agent>;
}
export {};
