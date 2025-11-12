import { NotificationType, NotificationChannel, NotificationStatus } from '../entities/global.entity';
export declare class CreateNotificationDto {
    userId: number;
    type: NotificationType;
    title: string;
    message: string;
    relatedId?: number;
    channel?: NotificationChannel;
    scheduledFor?: string;
}
export declare class UpdateNotificationDto {
    status?: NotificationStatus;
    sentAt?: string;
}
export declare class NotificationQueryDto {
    userId?: number;
    type?: NotificationType;
    status?: NotificationStatus;
    channel?: NotificationChannel;
    page?: number;
    limit?: number;
}
export declare class SendNotificationDto {
    userId: number;
    title: string;
    message: string;
    channel?: NotificationChannel;
}
