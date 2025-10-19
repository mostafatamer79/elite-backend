import { IsNotEmpty, IsEnum, IsOptional, IsString, IsNumber, IsObject } from 'class-validator';
import { RelationshipType, ListingRequestStatus } from '../entities/global.entity';

export class CreatePropertyListingRequestDto {
  @IsNotEmpty()
  @IsNumber()
  ownerId: number;

  @IsNotEmpty()
  @IsEnum(RelationshipType)
  relationshipType: RelationshipType;

  @IsNotEmpty()
  @IsNumber()
  propertyTypeId: number;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsObject()
  specifications: Record<string, any>;

  @IsOptional()
  @IsString()
  askingPrice?: string;

  @IsOptional()
  @IsString()
  authorizationDocUrl?: string;

  @IsOptional()
  attachments?: string[];
}

export class UpdatePropertyListingRequestDto {
  @IsOptional()
  @IsEnum(ListingRequestStatus)
  status?: ListingRequestStatus;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsObject()
  specifications?: Record<string, any>;

  @IsOptional()
  @IsString()
  askingPrice?: string;

  @IsOptional()
  @IsString()
  authorizationDocUrl?: string;
}

export class PropertyListingRequestQueryDto {
  @IsOptional()
  @IsNumber()
  ownerId?: number;

  @IsOptional()
  @IsEnum(ListingRequestStatus)
  status?: ListingRequestStatus;

  @IsOptional()
  @IsEnum(RelationshipType)
  relationshipType?: RelationshipType;

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsNumber()
  limit?: number;
}

export class AddAttachmentDto {
  @IsNotEmpty()
  @IsString()
  attachmentUrl: string;
}