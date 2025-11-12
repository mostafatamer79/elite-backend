import { RelationshipType, ListingRequestStatus } from '../entities/global.entity';
export declare class CreatePropertyListingRequestDto {
    ownerId?: number;
    relationshipType: RelationshipType;
    propertyTypeId: number;
    location: string;
    specifications: Record<string, any>;
    askingPrice?: string;
    authorizationDocUrl?: string;
    ownershipDocUrl?: string;
    attachments?: string[];
}
export declare class UpdatePropertyListingRequestDto {
    propertyTypeId?: number;
    relationshipType?: RelationshipType;
    status?: ListingRequestStatus;
    location?: string;
    specifications?: Record<string, any>;
    askingPrice?: string;
    authorizationDocUrl?: string;
    ownershipDocUrl?: string;
    attachments?: string[];
}
export declare class PropertyListingRequestQueryDto {
    ownerId?: number;
    status?: ListingRequestStatus;
    relationshipType?: RelationshipType;
    page?: number;
    limit?: number;
}
export declare class AddAttachmentDto {
    attachmentUrl: string;
}
