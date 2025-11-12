import { CoreEntity } from 'entities/global.entity';
export declare class TeamMember extends CoreEntity {
    name: string;
    position: string;
    imageUrl?: string | null;
}
