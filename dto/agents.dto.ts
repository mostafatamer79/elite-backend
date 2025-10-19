import { IsNotEmpty, IsNumber, IsEnum, IsOptional, IsString } from 'class-validator';
import { AgentApprovalStatus } from '../entities/global.entity';

export class CreateAgentDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  cityId: number;

  @IsNotEmpty()
  @IsString()
  identityProofUrl: string;

  @IsNotEmpty()
  @IsString()
  residencyDocumentUrl: string;
}

export class UpdateAgentDto {
  @IsOptional()
  @IsNumber()
  cityId?: number;

  @IsOptional()
  @IsString()
  identityProofUrl?: string;

  @IsOptional()
  @IsString()
  residencyDocumentUrl?: string;

  @IsOptional()
  @IsEnum(AgentApprovalStatus)
  status?: AgentApprovalStatus;

  @IsOptional()
  @IsString()
  kycNotes?: string;
}

export class ApproveAgentDto {
  @IsEnum(AgentApprovalStatus)
  status: AgentApprovalStatus;

  @IsOptional()
  @IsString()
  kycNotes?: string;
}

export class AgentQueryDto {
  @IsOptional()
  @IsEnum(AgentApprovalStatus)
  status?: AgentApprovalStatus;

  @IsOptional()
  @IsNumber()
  cityId?: number;

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsNumber()
  limit?: number;
}