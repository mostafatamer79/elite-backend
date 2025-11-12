import { AppointmentStatus, CreatedChannel } from '../entities/global.entity';
export declare class CreateAppointmentDto {
    propertyId: number;
    customerId: number;
    agentId?: number;
    appointmentDate: string;
    startTime: string;
    endTime: string;
    customerNotes?: string;
    createdChannel?: CreatedChannel;
}
export declare class UpdateAppointmentDto {
    agentId?: number;
    appointmentDate?: string;
    startTime?: string;
    endTime?: string;
    status?: AppointmentStatus;
    customerNotes?: string;
    agentNotes?: string;
}
export declare class AssignAgentDto {
    agentId: number;
}
export declare class UpdateStatusDto {
    status: AppointmentStatus;
    notes?: string;
}
export declare class AppointmentQueryDto {
    customerId?: number;
    agentId?: number;
    propertyId?: number;
    status?: AppointmentStatus;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
}
