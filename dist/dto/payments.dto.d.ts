import { PaymentStatus, PaymentGateway } from '../entities/global.entity';
export declare class CreatePaymentDto {
    appointmentId: number;
    agentId: number;
    amount: number;
    paymentProofUrl?: string;
    gateway?: PaymentGateway;
    currency?: string;
    notes?: string;
}
export declare class UpdatePaymentDto {
    status?: PaymentStatus;
    paymentProofUrl?: string;
    transactionId?: string;
    notes?: string;
}
export declare class ProcessPaymentDto {
    gateway: PaymentGateway;
    transactionId?: string;
}
export declare class PaymentQueryDto {
    agentId?: number;
    status?: PaymentStatus;
    gateway?: PaymentGateway;
    page?: number;
    limit?: number;
}
