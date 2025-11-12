import { BaseEntity } from 'typeorm';
export declare abstract class CoreEntity extends BaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
}
export declare enum UserType {
    CUSTOMER = "customer",
    AGENT = "agent",
    ADMIN = "admin",
    MARKETER = "marketer",
    QUALITY = "quality_team"
}
export declare enum VerificationStatus {
    UNVERIFIED = "unverified",
    PENDING = "pending",
    VERIFIED = "verified",
    REJECTED = "rejected"
}
export declare enum AgentApprovalStatus {
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected"
}
export declare enum SocialPlatform {
    INSTAGRAM = "instagram",
    SNAPCHAT = "snapchat",
    TIKTOK = "tiktok",
    YOUTUBE = "youtube",
    X = "x",
    OTHER = "other"
}
export declare enum TrafficSource {
    SNAPCHAT = "snapchat",
    INSTAGRAM = "instagram",
    WHATSAPP = "whatsapp",
    TIKTOK = "tiktok",
    DIRECT = "direct",
    OTHER = "other"
}
export declare enum AccessType {
    DIRECT = "direct",
    MEDIATED = "mediated",
    RESTRICTED = "restricted"
}
export declare enum RelationshipType {
    OWNER = "owner",
    AUTH_REP = "authorized_representative"
}
export declare enum ListingRequestStatus {
    PENDING = "pending",
    INSPECTED = "inspected",
    REJECTED = "rejected",
    PUBLISHED = "published"
}
export declare enum AppointmentStatus {
    PENDING = "pending",
    ASSIGNED = "assigned",
    CONFIRMED = "confirmed",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed",
    CANCELLED = "cancelled",
    NO_SHOW = "no_show"
}
export declare enum CreatedChannel {
    WEB = "web",
    APP = "app",
    ADMIN_PANEL = "admin_panel",
    WHATSAPP = "whatsapp"
}
export declare enum ConversionType {
    REGISTRATION = "registration",
    APPOINTMENT = "appointment"
}
export declare enum TimelineEventType {
    VISIT = "visit",
    REGISTRATION = "registration",
    APPOINTMENT_CREATED = "appointment_created",
    APPOINTMENT_ASSIGNED = "appointment_assigned",
    APPOINTMENT_CONFIRMED = "appointment_confirmed",
    APPOINTMENT_IN_PROGRESS = "appointment_in_progress",
    APPOINTMENT_COMPLETED = "appointment_completed",
    APPOINTMENT_CANCELLED = "appointment_cancelled",
    APPOINTMENT_NO_SHOW = "appointment_no_show",
    CUSTOMER_REVIEW_SUBMITTED = "customer_review_submitted",
    AGENT_REVIEW_SUBMITTED = "agent_review_submitted",
    CAMPAIGN_MESSAGE_SENT = "campaign_message_sent",
    DOCUMENT_VERIFIED = "document_verified",
    DOCUMENT_REJECTED = "document_rejected"
}
export declare enum RatingDimension {
    COOPERATION = "cooperation",
    COMMUNICATION = "communication",
    PROFESSIONALISM = "professionalism",
    CLARITY = "clarity"
}
export declare enum PaymentStatus {
    PENDING = "pending",
    PROCESSING = "processing",
    COMPLETED = "completed",
    FAILED = "failed"
}
export declare enum PaymentGateway {
    MANUAL = "manual",
    TAP = "tap",
    STRIPE = "stripe",
    PAYPAL = "paypal",
    HYPERPAY = "hyperpay"
}
export declare enum CampaignChannel {
    EMAIL = "email",
    WHATSAPP = "whatsapp"
}
export declare enum CampaignAudience {
    ALL_USERS = "all_users",
    AGENTS = "agents",
    MARKETERS = "marketers",
    CUSTOMERS = "customers",
    NEW_CUSTOMERS = "new_customers"
}
export declare enum CampaignRunType {
    ONCE = "once",
    RECURRING = "recurring"
}
export declare enum CampaignFrequency {
    DAILY = "daily",
    EVERY_2_DAYS = "every_2_days",
    WEEKLY = "weekly",
    EVERY_2_WEEKS = "every_2_weeks",
    MONTHLY = "monthly"
}
export declare enum CampaignStatus {
    DRAFT = "draft",
    SCHEDULED = "scheduled",
    RUNNING = "running",
    COMPLETED = "completed",
    PAUSED = "paused",
    CANCELLED = "cancelled"
}
export declare enum NotificationType {
    APPOINTMENT_REMINDER = "appointment_reminder",
    RATING_REQUEST = "rating_request",
    FOLLOW_UP = "follow_up",
    SYSTEM = "system",
    CAMPAIGN = "campaign"
}
export declare enum NotificationChannel {
    WHATSAPP = "whatsapp",
    EMAIL = "email",
    SMS = "sms",
    IN_APP = "in_app"
}
export declare enum NotificationStatus {
    PENDING = "pending",
    SENDING = "sending",
    DELIVERED = "delivered"
}
export declare enum StaticPageSlug {
    MAIN = "main",
    ABOUT = "about-us",
    TERMS = "terms",
    PRIVACY = "privacy",
    FAQ = "faq"
}
export declare enum SectionKey {
    CATEGORIES = "categories",
    PROJECTS = "projects",
    SERVICES = "services",
    LATEST_PROJECTS = "latest-projects",
    TESTIMONIALS = "testimonials",
    PARTNERS = "partners",
    COMMON_QUESTIONS = "common_questions",
    BOOKING_PROCESS = "booking-process",
    WHY_US = "why-us",
    EXPLORE = "explore",
    TEAM = "team",
    MAIN = "main"
}
export declare enum CalendarProvider {
    GOOGLE = "google",
    MICROSOFT = "microsoft"
}
export declare enum QualityCaseStatus {
    OPEN = "open",
    IN_PROGRESS = "in_progress",
    RESOLVED = "resolved",
    CLOSED = "closed"
}
export declare enum QualityCasePriority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical"
}
export declare enum ReportSnapshotType {
    ADMIN_DASHBOARD = "admin_dashboard",
    AGENT_PERFORMANCE = "agent_performance",
    MARKETING_PERFORMANCE = "marketing_performance",
    FINANCIAL = "financial"
}
export declare class User extends CoreEntity {
    phoneNumber: string;
    email: string;
    fullName: string;
    userType: UserType;
    profilePhotoUrl?: string | null;
    whatsappOtp?: string | null;
    whatsappOtpExpiresAt?: Date | null;
    nationalIdUrl?: string | null;
    residencyIdUrl?: string | null;
    verificationStatus: VerificationStatus;
    verifiedAt?: Date | null;
    verifiedBy?: User | null;
    passwordHash?: string;
    emailOtp?: string;
    emailOtpExpiresAt?: Date;
    resetOtp?: string;
    resetOtpExpiresAt?: Date;
    isActive: boolean;
}
export declare class City extends CoreEntity {
    name: string;
    isActive: boolean;
}
export declare class Agent extends CoreEntity {
    user: User;
    city: City;
    identityProofUrl: string;
    residencyDocumentUrl: string;
    status: AgentApprovalStatus;
    kycNotes?: string | null;
    updatedBy?: User | null;
}
export declare class Campaign extends CoreEntity {
    name: string;
    title: string;
    description?: string | null;
    targetChannel: CampaignChannel;
    targetAudience: CampaignAudience;
    runType: CampaignRunType;
    runOnceDatetime?: Date | null;
    startDate?: string | null;
    endDate?: string | null;
    runFrequency?: CampaignFrequency | null;
    runTime?: string | null;
    status: CampaignStatus;
    messageContent: string;
    actualRecipients?: number | null;
    views?: number | null;
    responses?: number | null;
    createdBy: User;
    images: CampaignImage[];
}
export declare class CampaignImage extends CoreEntity {
    campaign: Campaign;
    imageUrl: string;
}
export declare class MessageTemplate extends CoreEntity {
    name: string;
    channel: NotificationChannel;
    body: string;
    approved: boolean;
    locale: string;
}
export declare class Role extends CoreEntity {
    name: string;
    description?: string | null;
    userRoles: UserRole[];
    rolePermissions: RolePermission[];
}
export declare class Permission extends CoreEntity {
    key: string;
    description?: string | null;
    rolePermissions: RolePermission[];
}
export declare class RolePermission extends CoreEntity {
    role: Role;
    permission: Permission;
}
export declare class UserRole extends CoreEntity {
    user: User;
    role: Role;
}
export declare class AuthSession extends CoreEntity {
    user: User;
    refreshToken: string;
    userAgent?: string | null;
    ipAddress?: string | null;
    expiresAt: Date;
    revokedAt?: Date | null;
}
export declare class ReferralPartner extends CoreEntity {
    name: string;
    kind: 'external' | 'internal';
    platform?: string | null;
    referralCode: string;
    campaign: Campaign;
    isActive: boolean;
}
export declare class VisitorTracking extends CoreEntity {
    partner?: ReferralPartner | null;
    campaign?: Campaign | null;
    referralCode?: string | null;
    visitedUrl: string;
    landingPage?: string | null;
    utmSource?: string | null;
    utmCampaign?: string | null;
    utmContent?: string | null;
    userAgent?: string | null;
    ipAddress?: string | null;
}
export declare class Conversion extends CoreEntity {
    visitor?: VisitorTracking | null;
    partner?: ReferralPartner | null;
    campaign?: Campaign | null;
    user: User;
    referralCode?: string | null;
    type: ConversionType;
    convertedAt: Date;
}
export declare class Area extends CoreEntity {
    city: City;
    name: string;
    isActive: boolean;
}
export declare class PropertyType extends CoreEntity {
    name: string;
    isActive: boolean;
}
export declare class Property extends CoreEntity {
    title: string;
    description: string;
    propertyType: PropertyType;
    city: City;
    cityId: number;
    area: Area;
    areaId: number;
    bedrooms: number;
    bathrooms: number;
    areaM2: string;
    price?: string | null;
    propertyListingRequestId?: number | null;
    specifications: Record<string, any>;
    guarantees: Record<string, any>;
    accessType: AccessType;
    ownerName?: string | null;
    ownerPhone?: string | null;
    ownerNotes?: string | null;
    latitude?: string | null;
    longitude?: string | null;
    mapPlaceId?: string | null;
    isActive: boolean;
    createdBy: User;
    medias: PropertyMedia[];
}
export declare class PropertyMedia extends CoreEntity {
    property: Property;
    mediaUrl: string;
    isPrimary: boolean;
    orderIndex: number;
}
export declare class FavoriteProperty extends CoreEntity {
    user: User;
    property: Property;
    note?: string | null;
}
export declare class PropertyListingRequest extends CoreEntity {
    owner: User;
    relationshipType: RelationshipType;
    propertyType: PropertyType;
    location: string;
    specifications: Record<string, any>;
    askingPrice?: string | null;
    authorizationDocUrl?: string | null;
    ownershipDocUrl?: string | null;
    status: ListingRequestStatus;
    updatedBy?: User | null;
    attachments: PropertyListingRequestAttachment[];
}
export declare class PropertyListingRequestAttachment extends CoreEntity {
    request: PropertyListingRequest;
    attachmentUrl: string;
}
export declare class AgentAvailability extends CoreEntity {
    agent: User;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
}
export declare class AgentPreferredProperty extends CoreEntity {
    agent: User;
    property: Property;
    addedBy?: User | null;
}
export declare class Appointment extends CoreEntity {
    property: Property;
    customer: User;
    agent?: User | null;
    appointmentDate: string;
    startTime: string;
    endTime: string;
    status: AppointmentStatus;
    previousAppointment?: Appointment | null;
    customerNotes?: string | null;
    agentNotes?: string | null;
    createdChannel: CreatedChannel;
}
export declare class AppointmentStatusHistory extends CoreEntity {
    appointment: Appointment;
    oldStatus: AppointmentStatus;
    newStatus: AppointmentStatus;
    changedBy: User;
    notes?: string | null;
}
export declare class CustomerTimelineEvent extends CoreEntity {
    customer: User;
    eventType: TimelineEventType;
    relatedId?: number | null;
    relatedTable?: string | null;
    actorUser?: User | null;
    notes?: string | null;
}
export declare class CalendarAccount extends CoreEntity {
    user: User;
    provider: CalendarProvider;
    externalAccountId: string;
    accessToken: string;
    refreshToken: string;
    tokenExpiresAt: Date;
}
export declare class AppointmentCalendarSync extends CoreEntity {
    appointment: Appointment;
    provider: CalendarProvider;
    providerEventId: string;
    syncedAt: Date;
    lastError?: string | null;
}
export declare class CustomerReview extends CoreEntity {
    appointment: Appointment;
    customer: User;
    agentId: number;
    rating: number;
    reviewText?: string | null;
    isApproved: boolean;
    dimensions: CustomerReviewDimension[];
}
export declare class CustomerReviewDimension extends CoreEntity {
    review: CustomerReview;
    dimension: RatingDimension;
    score: number;
}
export declare class AgentReview extends CoreEntity {
    appointment: Appointment;
    agent: User;
    customer: User;
    rating: number;
    reviewText?: string | null;
    dimensions: AgentReviewDimension[];
}
export declare class AgentReviewDimension extends CoreEntity {
    review: AgentReview;
    dimension: RatingDimension;
    score: number;
}
export declare class AgentPayment extends CoreEntity {
    appointment: Appointment;
    agent: User;
    amount: string;
    status: PaymentStatus;
    paymentProofUrl?: string | null;
    paidAt?: Date | null;
    updatedBy: User;
    gateway: PaymentGateway;
    transactionId?: string | null;
    currency: string;
    notes?: string | null;
}
export declare class AgentBalance extends CoreEntity {
    agent: User;
    totalEarnings: string;
    pendingBalance: string;
}
export declare class AgentPayoutAccount extends CoreEntity {
    agent: User;
    accountHolderName: string;
    iban: string;
    bankName: string;
    swiftCode?: string | null;
}
export declare class Notification extends CoreEntity {
    user: User;
    type: NotificationType;
    title: string;
    message: string;
    relatedId?: number | null;
    channel: NotificationChannel;
    status: NotificationStatus;
    scheduledFor?: Date | null;
    sentAt?: Date | null;
}
export declare class SiteSettings extends CoreEntity {
    latitude?: number | null;
    longitude?: number | null;
    introVideoUrl?: string | null;
    customerCount: number;
    yearsExperience: number;
    projectCount: number;
    email: string;
    address: string;
    phoneNumber: string;
    twitterUrl?: string | null;
    instagramUrl?: string | null;
    snapchatUrl?: string | null;
    tiktokUrl?: string | null;
    youtubeUrl?: string | null;
    updatedBy?: User | null;
    termsHtml?: string | null;
    privacyHtml?: string | null;
}
export declare class FooterSettings extends CoreEntity {
    footerParagraph?: string | null;
    newsletterTitle?: string | null;
    newsletterParagraph?: string | null;
    updatedBy?: User | null;
}
export declare class StaticPage extends CoreEntity {
    slug: string;
    title?: string | null;
    description?: string | null;
    sections: PageSection[];
}
export declare class PageSection extends CoreEntity {
    page: StaticPage;
    sectionKey: string;
    title: string;
    description: string;
}
export declare class HomeBackground extends CoreEntity {
    imageUrl: string;
}
export declare class PartnerLogo extends CoreEntity {
    imageUrl: string;
    altText: string;
}
export declare class HomeCommonQuestion extends CoreEntity {
    question: string;
    answer: string;
}
export declare class AboutFeature extends CoreEntity {
    featureText: string;
}
export declare class AboutStep extends CoreEntity {
    stepNumber: number;
    title: string;
    description: string;
}
export declare class AboutHighlight extends CoreEntity {
    title: string;
    description: string;
}
export declare class AboutStat extends CoreEntity {
    label: string;
    value: string;
}
export declare class AboutTeam extends CoreEntity {
    name: string;
    role: string;
    imageUrl: string;
}
export declare class FaqGroup extends CoreEntity {
    title: string;
    items: FaqItem[];
}
export declare class FaqItem extends CoreEntity {
    group: FaqGroup;
    question: string;
    answer: string;
}
export declare class PrivacyGroup extends CoreEntity {
    title: string;
    items: PrivacyItem[];
}
export declare class PrivacyItem extends CoreEntity {
    group: PrivacyGroup;
    content: string;
}
export declare class TermsBlock extends CoreEntity {
    title: string;
    description: string;
}
export declare class QualityCase extends CoreEntity {
    title: string;
    description?: string | null;
    relatedTable?: string | null;
    relatedId?: number | null;
    status: QualityCaseStatus;
    priority: QualityCasePriority;
    assignee?: User | null;
    notes: QualityCaseNote[];
}
export declare class QualityCaseNote extends CoreEntity {
    case: QualityCase;
    author: User;
    note: string;
}
export declare class ReportSnapshot extends CoreEntity {
    type: ReportSnapshotType;
    periodStart: string;
    periodEnd: string;
    payload: Record<string, any>;
    generatedAt: Date;
}
export declare class ContactUs extends CoreEntity {
    name: string;
    email: string;
    message: string;
}
