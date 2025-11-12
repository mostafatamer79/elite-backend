import { TeamService } from './team-member.service';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
export declare class TeamController {
    private readonly svc;
    constructor(svc: TeamService);
    findAll(): Promise<import("./entities/team-member.entity").TeamMember[]>;
    findOne(id: number): Promise<import("./entities/team-member.entity").TeamMember>;
    create(dto: CreateTeamMemberDto & {
        imageUrl?: string;
    }, files?: {
        image?: Express.Multer.File[];
    }): Promise<import("./entities/team-member.entity").TeamMember>;
    update(id: number, dto: UpdateTeamMemberDto & {
        imageUrl?: string | null;
    }, files?: {
        image?: Express.Multer.File[];
    }): Promise<import("./entities/team-member.entity").TeamMember>;
    remove(id: number): Promise<{
        success: true;
    }>;
}
