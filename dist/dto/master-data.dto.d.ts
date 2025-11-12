export declare class CreateCityDto {
    name: string;
    isActive?: boolean;
}
export declare class UpdateCityDto {
    name?: string;
    isActive?: boolean;
}
export declare class CreateAreaDto {
    cityId: number;
    name: string;
    isActive?: boolean;
}
export declare class UpdateAreaDto {
    name?: string;
    isActive?: boolean;
}
export declare class CreatePropertyTypeDto {
    name: string;
    isActive?: boolean;
}
export declare class UpdatePropertyTypeDto {
    name?: string;
    isActive?: boolean;
}
export declare class MasterDataQueryDto {
    isActive?: boolean;
    page?: number;
    limit?: number;
}
