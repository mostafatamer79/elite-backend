import { TimelineEventType } from '../entities/global.entity';
export declare class CreateTimelineEventDto {
    customerId: number;
    eventType: TimelineEventType;
    relatedId?: number;
    relatedTable?: string;
    actorUserId?: number;
    notes?: string;
}
export declare class TimelineQueryDto {
    customerId: number;
    eventType?: TimelineEventType;
    page?: number;
    limit?: number;
}
