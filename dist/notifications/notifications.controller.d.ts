import { NotificationsService } from './notifications.service';
import { CreateNotificationDto, UpdateNotificationDto, SendNotificationDto } from '../../dto/notifications.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(createNotificationDto: CreateNotificationDto): Promise<import("entities/global.entity").Notification>;
    findAll(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").Notification>>;
    getMyNotifications(query: any, req: any): Promise<{
        total_records: number;
        current_page: number;
        per_page: number;
        records: import("entities/global.entity").Notification[];
    }>;
    findOne(id: string): Promise<import("entities/global.entity").Notification>;
    update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<import("entities/global.entity").Notification>;
    remove(id: string): Promise<void>;
    sendNotification(sendNotificationDto: SendNotificationDto): Promise<import("entities/global.entity").Notification>;
    markAsRead(id: string): Promise<import("entities/global.entity").Notification>;
    markAllAsRead(): Promise<{
        message: string;
    }>;
}
