import { DataSource, EntityTarget } from 'typeorm';
export declare enum ModuleName {
    USER = "user",
    ROLE = "role",
    PERMISSION = "permission",
    ROLE_PERMISSION = "role_permission",
    USER_ROLE = "user_role",
    CITY = "city",
    AREA = "area",
    PROPERTY_TYPE = "property_type",
    PROPERTY = "property",
    PROPERTY_MEDIA = "property_media",
    FAVORITE_PROPERTY = "favorite_property",
    PROPERTY_LISTING_REQUEST = "property_listing_request",
    PROPERTY_LISTING_REQUEST_ATTACHMENT = "property_listing_request_attachment",
    AGENT = "agent",
    AGENT_AVAILABILITY = "agent_availability",
    AGENT_PREFERRED_PROPERTY = "agent_preferred_property",
    APPOINTMENT = "appointment",
    APPOINTMENT_STATUS_HISTORY = "appointment_status_history",
    CUSTOMER_TIMELINE_EVENT = "customer_timeline_event",
    CALENDAR_ACCOUNT = "calendar_account",
    APPOINTMENT_CALENDAR_SYNC = "appointment_calendar_sync",
    CUSTOMER_REVIEW = "customer_review",
    CUSTOMER_REVIEW_DIMENSION = "customer_review_dimension",
    AGENT_REVIEW = "agent_review",
    AGENT_REVIEW_DIMENSION = "agent_review_dimension",
    AGENT_PAYMENT = "agent_payment",
    AGENT_BALANCE = "agent_balance",
    AGENT_PAYOUT_ACCOUNT = "agent_payout_account",
    AUTH_SESSION = "auth_session",
    CAMPAIGN = "campaign",
    CAMPAIGN_IMAGE = "campaign_image",
    MESSAGE_TEMPLATE = "message_template",
    REFERRAL_PARTNER = "referral_partner",
    VISITOR_TRACKING = "visitor_tracking",
    CONVERSION = "conversion",
    NOTIFICATION = "notification",
    SITE_SETTINGS = "site_settings",
    FOOTER_SETTINGS = "footer_settings",
    STATIC_PAGE = "static_page",
    PAGE_SECTION = "page_section",
    HOME_BACKGROUND = "home_background",
    PARTNER_LOGO = "partner_logo",
    HOME_COMMON_QUESTION = "home_common_question",
    ABOUT_FEATURE = "about_feature",
    ABOUT_STEP = "about_step",
    ABOUT_HIGHLIGHT = "about_highlight",
    ABOUT_STAT = "about_stat",
    ABOUT_TEAM = "about_team",
    FAQ_GROUP = "faq_group",
    FAQ_ITEM = "faq_item",
    PRIVACY_GROUP = "privacy_group",
    PRIVACY_ITEM = "privacy_item",
    TERMS_BLOCK = "terms_block",
    QUALITY_CASE = "quality_case",
    QUALITY_CASE_NOTE = "quality_case_note",
    REPORT_SNAPSHOT = "report_snapshot"
}
export declare const moduleRepoMap: Record<ModuleName, EntityTarget<any>>;
export declare class ExportService {
    readonly dataSource: DataSource;
    constructor(dataSource: DataSource);
    exportEntityToExcel(dataSource: DataSource, moduleName: string, res: any, options?: {
        exportLimit?: number | string;
        columns?: {
            header: string;
            key: string;
            width?: number;
        }[];
    }): Promise<void>;
    exportRowsToExcel(res: any, rows: any[], options?: {
        sheetName?: string;
        fileName?: string;
        columns?: {
            header: string;
            key: string;
            width?: number;
        }[];
    }): Promise<void>;
}
