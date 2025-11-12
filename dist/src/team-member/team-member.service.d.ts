import { Repository } from 'typeorm';
import { TeamMember } from './entities/team-member.entity';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
type UploadCtx = {
    uploadedFilename?: string;
};
export declare class TeamService {
    private readonly repo;
    constructor(repo: Repository<TeamMember>);
    findAll(): Promise<TeamMember[]>;
    findOne(id: number): Promise<TeamMember>;
    private deletePhysicalImageByWebPath;
    create(dto: CreateTeamMemberDto & {
        imageUrl?: string | null;
    }): Promise<TeamMember>;
    update(id: number, dto: UpdateTeamMemberDto & {
        imageUrl?: string | null;
    }, _ctx?: UploadCtx): Promise<TeamMember>;
    remove(id: number): Promise<{
        success: true;
    }>;
    hardDelete(id: number): Promise<{
        success: true;
    }>;
}
export {};
