export declare class CreatePayoutAccountDto {
    agentId: number;
    accountHolderName: string;
    iban: string;
    bankName: string;
    swiftCode?: string;
}
export declare class UpdatePayoutAccountDto {
    accountHolderName?: string;
    iban?: string;
    bankName?: string;
    swiftCode?: string;
}
