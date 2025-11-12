export declare class CreateMarketerDto {
    userId: number;
    referralCode?: string;
}
export declare class UpdateMarketerDto {
    referralCode?: string;
}
export declare class MarketerQueryDto {
    createdById?: number;
    page?: number;
    limit?: number;
}
export declare class GenerateReferralCodeDto {
    marketerName: string;
}
