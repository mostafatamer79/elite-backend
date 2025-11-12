import { RatingDimension } from '../entities/global.entity';
export declare class CreateCustomerReviewDto {
    appointmentId: number;
    rating: number;
    reviewText?: string;
    agentId: number;
    dimensions?: ReviewDimensionDto[];
}
export declare class CreateAgentReviewDto {
    appointmentId: number;
    rating: number;
    reviewText?: string;
    dimensions?: ReviewDimensionDto[];
}
export declare class ReviewDimensionDto {
    dimension: RatingDimension;
    score: number;
}
export declare class UpdateReviewDto {
    rating?: number;
    reviewText?: string;
    isApproved?: boolean;
}
export declare class ReviewQueryDto {
    agentId?: number;
    customerId?: number;
    isApproved?: boolean;
    page?: number;
    limit?: number;
}
