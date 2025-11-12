import { CampaignChannel, CampaignAudience, CampaignRunType, CampaignFrequency, CampaignStatus } from '../entities/global.entity';
export declare class CreateCampaignDto {
    name: string;
    title: string;
    description?: string;
    targetChannel: CampaignChannel;
    targetAudience: CampaignAudience;
    runType: CampaignRunType;
    runOnceDatetime?: string;
    startDate?: string;
    endDate?: string;
    runFrequency?: CampaignFrequency;
    runTime?: string;
    status: CampaignStatus;
    actualRecipients?: number;
    messageContent: string;
    images?: string[];
}
export declare class UpdateCampaignDto {
    name?: string;
    title?: string;
    description?: string;
    targetChannel?: CampaignChannel;
    targetAudience?: CampaignAudience;
    runType?: CampaignRunType;
    runOnceDatetime?: string;
    startDate?: string;
    endDate?: string;
    runFrequency?: CampaignFrequency;
    runTime?: string;
    status?: CampaignStatus;
    messageContent?: string;
}
export declare class CampaignQueryDto {
    status?: CampaignStatus;
    targetChannel?: CampaignChannel;
    page?: number;
    limit?: number;
}
export declare class CampaignImageDto {
    imageUrl: string;
}
