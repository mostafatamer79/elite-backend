import { TimelineService } from './timeline.service';
import { CreateTimelineEventDto } from '../../dto/timeline.dto';
export declare class TimelineController {
    private readonly timelineService;
    constructor(timelineService: TimelineService);
    create(createTimelineEventDto: CreateTimelineEventDto): Promise<import("entities/global.entity").CustomerTimelineEvent>;
    findAll(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").CustomerTimelineEvent>>;
    findByCustomer(customerId: string, query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").CustomerTimelineEvent>>;
    logAppointmentStatusChange(appointmentId: string, oldStatus: string, newStatus: string, notes?: string): Promise<import("entities/global.entity").CustomerTimelineEvent>;
    logCustomerRegistration(customerId: string): Promise<import("entities/global.entity").CustomerTimelineEvent>;
}
