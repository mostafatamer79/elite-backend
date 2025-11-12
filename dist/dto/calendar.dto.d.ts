import { CalendarProvider } from '../entities/global.entity';
export declare class ConnectCalendarAccountDto {
    provider: CalendarProvider;
    accessToken: string;
    refreshToken: string;
    externalAccountId: string;
    tokenExpiresAt: string;
}
export declare class SyncAppointmentDto {
    appointmentId: number;
    provider?: CalendarProvider;
}
export declare class CalendarQueryDto {
    provider?: CalendarProvider;
    userId?: number;
}
