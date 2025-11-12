import { CalendarService } from './calendar.service';
import { ConnectCalendarAccountDto, SyncAppointmentDto } from '../../dto/calendar.dto';
export declare class CalendarController {
    private readonly calendarService;
    constructor(calendarService: CalendarService);
    connectAccount(connectCalendarAccountDto: ConnectCalendarAccountDto): Promise<import("entities/global.entity").CalendarAccount>;
    getAccounts(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").CalendarAccount>>;
    getAccount(id: string): Promise<import("entities/global.entity").CalendarAccount>;
    disconnectAccount(id: string): Promise<void>;
    syncAppointment(syncAppointmentDto: SyncAppointmentDto): Promise<import("entities/global.entity").AppointmentCalendarSync>;
    getAppointmentSync(appointmentId: string): Promise<import("entities/global.entity").AppointmentCalendarSync[]>;
    refreshTokens(): Promise<{
        updated: number;
    }>;
}
