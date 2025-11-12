export declare class CreateShortLinkDto {
    slug?: string;
    destination: string;
    influencerId?: number;
    marketerId?: number;
    campaignId?: number;
    isActive?: boolean;
}
export declare class UpdateShortLinkDto {
    destination?: string;
    isActive?: boolean;
    influencerId?: number;
    marketerId?: number;
    campaignId?: number;
}
export declare class ShortLinkQueryDto {
    influencerId?: number;
    marketerId?: number;
    campaignId?: number;
    isActive?: boolean;
    page?: number;
    limit?: number;
}
