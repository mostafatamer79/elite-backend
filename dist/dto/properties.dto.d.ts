import { AccessType } from '../entities/global.entity';
export declare class CreatePropertyDto {
    title: string;
    description: string;
    propertyTypeId: number;
    cityId: number;
    areaId: number;
    bedrooms: number;
    bathrooms: number;
    areaM2: string;
    price?: string;
    specifications: Record<string, any>;
    guarantees: Record<string, any>;
    accessType: AccessType;
    ownerName?: string;
    ownerPhone?: string;
    ownerNotes?: string;
    latitude?: string;
    longitude?: string;
    mapPlaceId?: string;
}
export declare class UpdatePropertyDto {
    title?: string;
    description?: string;
    propertyTypeId?: number;
    cityId?: number;
    areaId?: number;
    bedrooms?: number;
    bathrooms?: number;
    areaM2?: string;
    price?: string;
    specifications?: Record<string, any>;
    guarantees?: Record<string, any>;
    accessType?: AccessType;
    ownerName?: string;
    ownerPhone?: string;
    ownerNotes?: string;
    latitude?: string;
    longitude?: string;
    mapPlaceId?: string;
    isActive?: boolean;
}
export declare class PropertyQueryDto {
    cityId?: number;
    areaId?: number;
    propertyTypeId?: number;
    minBedrooms?: number;
    maxBedrooms?: number;
    minPrice?: number;
    maxPrice?: number;
    isActive?: boolean;
    page?: number;
    limit?: number;
}
export declare class PropertyMediaDto {
    mediaUrl: string;
    isPrimary?: boolean;
    orderIndex?: number;
}
export declare class CreateManyPropertyMediaDto {
    medias: PropertyMediaDto[] | string;
}
