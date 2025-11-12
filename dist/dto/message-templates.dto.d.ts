import { NotificationChannel } from '../entities/global.entity';
export declare class CreateMessageTemplateDto {
    name: string;
    channel: NotificationChannel;
    body: string;
    approved?: boolean;
    locale?: string;
}
export declare class UpdateMessageTemplateDto {
    name?: string;
    channel?: NotificationChannel;
    body?: string;
    approved?: boolean;
    locale?: string;
}
export declare class MessageTemplateQueryDto {
    channel?: NotificationChannel;
    approved?: boolean;
    locale?: string;
    page?: number;
    limit?: number;
}
