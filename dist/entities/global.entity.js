"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyListingRequest = exports.FavoriteProperty = exports.PropertyMedia = exports.Property = exports.PropertyType = exports.Area = exports.Conversion = exports.VisitorTracking = exports.ReferralPartner = exports.AuthSession = exports.UserRole = exports.RolePermission = exports.Permission = exports.Role = exports.MessageTemplate = exports.CampaignImage = exports.Campaign = exports.Agent = exports.City = exports.User = exports.ReportSnapshotType = exports.QualityCasePriority = exports.QualityCaseStatus = exports.CalendarProvider = exports.SectionKey = exports.StaticPageSlug = exports.NotificationStatus = exports.NotificationChannel = exports.NotificationType = exports.CampaignStatus = exports.CampaignFrequency = exports.CampaignRunType = exports.CampaignAudience = exports.CampaignChannel = exports.PaymentGateway = exports.PaymentStatus = exports.RatingDimension = exports.TimelineEventType = exports.ConversionType = exports.CreatedChannel = exports.AppointmentStatus = exports.ListingRequestStatus = exports.RelationshipType = exports.AccessType = exports.TrafficSource = exports.SocialPlatform = exports.AgentApprovalStatus = exports.VerificationStatus = exports.UserType = exports.CoreEntity = void 0;
exports.ContactUs = exports.ReportSnapshot = exports.QualityCaseNote = exports.QualityCase = exports.TermsBlock = exports.PrivacyItem = exports.PrivacyGroup = exports.FaqItem = exports.FaqGroup = exports.AboutTeam = exports.AboutStat = exports.AboutHighlight = exports.AboutStep = exports.AboutFeature = exports.HomeCommonQuestion = exports.PartnerLogo = exports.HomeBackground = exports.PageSection = exports.StaticPage = exports.FooterSettings = exports.SiteSettings = exports.Notification = exports.AgentPayoutAccount = exports.AgentBalance = exports.AgentPayment = exports.AgentReviewDimension = exports.AgentReview = exports.CustomerReviewDimension = exports.CustomerReview = exports.AppointmentCalendarSync = exports.CalendarAccount = exports.CustomerTimelineEvent = exports.AppointmentStatusHistory = exports.Appointment = exports.AgentPreferredProperty = exports.AgentAvailability = exports.PropertyListingRequestAttachment = void 0;
const typeorm_1 = require("typeorm");
class CoreEntity extends typeorm_1.BaseEntity {
}
exports.CoreEntity = CoreEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CoreEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', name: 'created_at', default: () => 'NOW()' }),
    __metadata("design:type", Date)
], CoreEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz', name: 'updated_at', default: () => 'NOW()' }),
    __metadata("design:type", Date)
], CoreEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamptz', name: 'deleted_at', nullable: true, select: false }),
    __metadata("design:type", Date)
], CoreEntity.prototype, "deletedAt", void 0);
var UserType;
(function (UserType) {
    UserType["CUSTOMER"] = "customer";
    UserType["AGENT"] = "agent";
    UserType["ADMIN"] = "admin";
    UserType["MARKETER"] = "marketer";
    UserType["QUALITY"] = "quality_team";
})(UserType || (exports.UserType = UserType = {}));
var VerificationStatus;
(function (VerificationStatus) {
    VerificationStatus["UNVERIFIED"] = "unverified";
    VerificationStatus["PENDING"] = "pending";
    VerificationStatus["VERIFIED"] = "verified";
    VerificationStatus["REJECTED"] = "rejected";
})(VerificationStatus || (exports.VerificationStatus = VerificationStatus = {}));
var AgentApprovalStatus;
(function (AgentApprovalStatus) {
    AgentApprovalStatus["PENDING"] = "pending";
    AgentApprovalStatus["APPROVED"] = "approved";
    AgentApprovalStatus["REJECTED"] = "rejected";
})(AgentApprovalStatus || (exports.AgentApprovalStatus = AgentApprovalStatus = {}));
var SocialPlatform;
(function (SocialPlatform) {
    SocialPlatform["INSTAGRAM"] = "instagram";
    SocialPlatform["SNAPCHAT"] = "snapchat";
    SocialPlatform["TIKTOK"] = "tiktok";
    SocialPlatform["YOUTUBE"] = "youtube";
    SocialPlatform["X"] = "x";
    SocialPlatform["OTHER"] = "other";
})(SocialPlatform || (exports.SocialPlatform = SocialPlatform = {}));
var TrafficSource;
(function (TrafficSource) {
    TrafficSource["SNAPCHAT"] = "snapchat";
    TrafficSource["INSTAGRAM"] = "instagram";
    TrafficSource["WHATSAPP"] = "whatsapp";
    TrafficSource["TIKTOK"] = "tiktok";
    TrafficSource["DIRECT"] = "direct";
    TrafficSource["OTHER"] = "other";
})(TrafficSource || (exports.TrafficSource = TrafficSource = {}));
var AccessType;
(function (AccessType) {
    AccessType["DIRECT"] = "direct";
    AccessType["MEDIATED"] = "mediated";
    AccessType["RESTRICTED"] = "restricted";
})(AccessType || (exports.AccessType = AccessType = {}));
var RelationshipType;
(function (RelationshipType) {
    RelationshipType["OWNER"] = "owner";
    RelationshipType["AUTH_REP"] = "authorized_representative";
})(RelationshipType || (exports.RelationshipType = RelationshipType = {}));
var ListingRequestStatus;
(function (ListingRequestStatus) {
    ListingRequestStatus["PENDING"] = "pending";
    ListingRequestStatus["INSPECTED"] = "inspected";
    ListingRequestStatus["REJECTED"] = "rejected";
    ListingRequestStatus["PUBLISHED"] = "published";
})(ListingRequestStatus || (exports.ListingRequestStatus = ListingRequestStatus = {}));
var AppointmentStatus;
(function (AppointmentStatus) {
    AppointmentStatus["PENDING"] = "pending";
    AppointmentStatus["ASSIGNED"] = "assigned";
    AppointmentStatus["CONFIRMED"] = "confirmed";
    AppointmentStatus["IN_PROGRESS"] = "in_progress";
    AppointmentStatus["COMPLETED"] = "completed";
    AppointmentStatus["CANCELLED"] = "cancelled";
    AppointmentStatus["NO_SHOW"] = "no_show";
})(AppointmentStatus || (exports.AppointmentStatus = AppointmentStatus = {}));
var CreatedChannel;
(function (CreatedChannel) {
    CreatedChannel["WEB"] = "web";
    CreatedChannel["APP"] = "app";
    CreatedChannel["ADMIN_PANEL"] = "admin_panel";
    CreatedChannel["WHATSAPP"] = "whatsapp";
})(CreatedChannel || (exports.CreatedChannel = CreatedChannel = {}));
var ConversionType;
(function (ConversionType) {
    ConversionType["REGISTRATION"] = "registration";
    ConversionType["APPOINTMENT"] = "appointment";
})(ConversionType || (exports.ConversionType = ConversionType = {}));
var TimelineEventType;
(function (TimelineEventType) {
    TimelineEventType["VISIT"] = "visit";
    TimelineEventType["REGISTRATION"] = "registration";
    TimelineEventType["APPOINTMENT_CREATED"] = "appointment_created";
    TimelineEventType["APPOINTMENT_ASSIGNED"] = "appointment_assigned";
    TimelineEventType["APPOINTMENT_CONFIRMED"] = "appointment_confirmed";
    TimelineEventType["APPOINTMENT_IN_PROGRESS"] = "appointment_in_progress";
    TimelineEventType["APPOINTMENT_COMPLETED"] = "appointment_completed";
    TimelineEventType["APPOINTMENT_CANCELLED"] = "appointment_cancelled";
    TimelineEventType["APPOINTMENT_NO_SHOW"] = "appointment_no_show";
    TimelineEventType["CUSTOMER_REVIEW_SUBMITTED"] = "customer_review_submitted";
    TimelineEventType["AGENT_REVIEW_SUBMITTED"] = "agent_review_submitted";
    TimelineEventType["CAMPAIGN_MESSAGE_SENT"] = "campaign_message_sent";
    TimelineEventType["DOCUMENT_VERIFIED"] = "document_verified";
    TimelineEventType["DOCUMENT_REJECTED"] = "document_rejected";
})(TimelineEventType || (exports.TimelineEventType = TimelineEventType = {}));
var RatingDimension;
(function (RatingDimension) {
    RatingDimension["COOPERATION"] = "cooperation";
    RatingDimension["COMMUNICATION"] = "communication";
    RatingDimension["PROFESSIONALISM"] = "professionalism";
    RatingDimension["CLARITY"] = "clarity";
})(RatingDimension || (exports.RatingDimension = RatingDimension = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["PROCESSING"] = "processing";
    PaymentStatus["COMPLETED"] = "completed";
    PaymentStatus["FAILED"] = "failed";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
var PaymentGateway;
(function (PaymentGateway) {
    PaymentGateway["MANUAL"] = "manual";
    PaymentGateway["TAP"] = "tap";
    PaymentGateway["STRIPE"] = "stripe";
    PaymentGateway["PAYPAL"] = "paypal";
    PaymentGateway["HYPERPAY"] = "hyperpay";
})(PaymentGateway || (exports.PaymentGateway = PaymentGateway = {}));
var CampaignChannel;
(function (CampaignChannel) {
    CampaignChannel["EMAIL"] = "email";
    CampaignChannel["WHATSAPP"] = "whatsapp";
})(CampaignChannel || (exports.CampaignChannel = CampaignChannel = {}));
var CampaignAudience;
(function (CampaignAudience) {
    CampaignAudience["ALL_USERS"] = "all_users";
    CampaignAudience["AGENTS"] = "agents";
    CampaignAudience["MARKETERS"] = "marketers";
    CampaignAudience["CUSTOMERS"] = "customers";
    CampaignAudience["NEW_CUSTOMERS"] = "new_customers";
})(CampaignAudience || (exports.CampaignAudience = CampaignAudience = {}));
var CampaignRunType;
(function (CampaignRunType) {
    CampaignRunType["ONCE"] = "once";
    CampaignRunType["RECURRING"] = "recurring";
})(CampaignRunType || (exports.CampaignRunType = CampaignRunType = {}));
var CampaignFrequency;
(function (CampaignFrequency) {
    CampaignFrequency["DAILY"] = "daily";
    CampaignFrequency["EVERY_2_DAYS"] = "every_2_days";
    CampaignFrequency["WEEKLY"] = "weekly";
    CampaignFrequency["EVERY_2_WEEKS"] = "every_2_weeks";
    CampaignFrequency["MONTHLY"] = "monthly";
})(CampaignFrequency || (exports.CampaignFrequency = CampaignFrequency = {}));
var CampaignStatus;
(function (CampaignStatus) {
    CampaignStatus["DRAFT"] = "draft";
    CampaignStatus["SCHEDULED"] = "scheduled";
    CampaignStatus["RUNNING"] = "running";
    CampaignStatus["COMPLETED"] = "completed";
    CampaignStatus["PAUSED"] = "paused";
    CampaignStatus["CANCELLED"] = "cancelled";
})(CampaignStatus || (exports.CampaignStatus = CampaignStatus = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["APPOINTMENT_REMINDER"] = "appointment_reminder";
    NotificationType["RATING_REQUEST"] = "rating_request";
    NotificationType["FOLLOW_UP"] = "follow_up";
    NotificationType["SYSTEM"] = "system";
    NotificationType["CAMPAIGN"] = "campaign";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
var NotificationChannel;
(function (NotificationChannel) {
    NotificationChannel["WHATSAPP"] = "whatsapp";
    NotificationChannel["EMAIL"] = "email";
    NotificationChannel["SMS"] = "sms";
    NotificationChannel["IN_APP"] = "in_app";
})(NotificationChannel || (exports.NotificationChannel = NotificationChannel = {}));
var NotificationStatus;
(function (NotificationStatus) {
    NotificationStatus["PENDING"] = "pending";
    NotificationStatus["SENDING"] = "sending";
    NotificationStatus["DELIVERED"] = "delivered";
})(NotificationStatus || (exports.NotificationStatus = NotificationStatus = {}));
var StaticPageSlug;
(function (StaticPageSlug) {
    StaticPageSlug["MAIN"] = "main";
    StaticPageSlug["ABOUT"] = "about-us";
    StaticPageSlug["TERMS"] = "terms";
    StaticPageSlug["PRIVACY"] = "privacy";
    StaticPageSlug["FAQ"] = "faq";
})(StaticPageSlug || (exports.StaticPageSlug = StaticPageSlug = {}));
var SectionKey;
(function (SectionKey) {
    SectionKey["CATEGORIES"] = "categories";
    SectionKey["PROJECTS"] = "projects";
    SectionKey["SERVICES"] = "services";
    SectionKey["LATEST_PROJECTS"] = "latest-projects";
    SectionKey["TESTIMONIALS"] = "testimonials";
    SectionKey["PARTNERS"] = "partners";
    SectionKey["COMMON_QUESTIONS"] = "common_questions";
    SectionKey["BOOKING_PROCESS"] = "booking-process";
    SectionKey["WHY_US"] = "why-us";
    SectionKey["EXPLORE"] = "explore";
    SectionKey["TEAM"] = "team";
    SectionKey["MAIN"] = "main";
})(SectionKey || (exports.SectionKey = SectionKey = {}));
var CalendarProvider;
(function (CalendarProvider) {
    CalendarProvider["GOOGLE"] = "google";
    CalendarProvider["MICROSOFT"] = "microsoft";
})(CalendarProvider || (exports.CalendarProvider = CalendarProvider = {}));
var QualityCaseStatus;
(function (QualityCaseStatus) {
    QualityCaseStatus["OPEN"] = "open";
    QualityCaseStatus["IN_PROGRESS"] = "in_progress";
    QualityCaseStatus["RESOLVED"] = "resolved";
    QualityCaseStatus["CLOSED"] = "closed";
})(QualityCaseStatus || (exports.QualityCaseStatus = QualityCaseStatus = {}));
var QualityCasePriority;
(function (QualityCasePriority) {
    QualityCasePriority["LOW"] = "low";
    QualityCasePriority["MEDIUM"] = "medium";
    QualityCasePriority["HIGH"] = "high";
    QualityCasePriority["CRITICAL"] = "critical";
})(QualityCasePriority || (exports.QualityCasePriority = QualityCasePriority = {}));
var ReportSnapshotType;
(function (ReportSnapshotType) {
    ReportSnapshotType["ADMIN_DASHBOARD"] = "admin_dashboard";
    ReportSnapshotType["AGENT_PERFORMANCE"] = "agent_performance";
    ReportSnapshotType["MARKETING_PERFORMANCE"] = "marketing_performance";
    ReportSnapshotType["FINANCIAL"] = "financial";
})(ReportSnapshotType || (exports.ReportSnapshotType = ReportSnapshotType = {}));
let User = class User extends CoreEntity {
};
exports.User = User;
__decorate([
    (0, typeorm_1.Column)({ name: 'phone_number', type: 'varchar', length: 20, unique: true }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'full_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], User.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_type', type: 'enum', enum: UserType, default: UserType.CUSTOMER }),
    __metadata("design:type", String)
], User.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'profile_photo_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "profilePhotoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'whatsapp_otp', type: 'varchar', length: 6, nullable: true, select: false }),
    __metadata("design:type", String)
], User.prototype, "whatsappOtp", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'whatsapp_otp_expires_at', type: 'timestamptz', nullable: true, select: false }),
    __metadata("design:type", Date)
], User.prototype, "whatsappOtpExpiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'national_id_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "nationalIdUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'residency_id_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "residencyIdUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'verification_status', type: 'enum', enum: VerificationStatus, default: VerificationStatus.UNVERIFIED }),
    __metadata("design:type", String)
], User.prototype, "verificationStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'verified_at', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "verifiedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'verified_by' }),
    __metadata("design:type", User)
], User.prototype, "verifiedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "emailOtp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "emailOtpExpiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "resetOtp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "resetOtpExpiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Index)('UQ_users_phone', ['phoneNumber'], { unique: true }),
    (0, typeorm_1.Index)('UQ_users_email', ['email'], { unique: true }),
    (0, typeorm_1.Entity)('users')
], User);
let City = class City extends CoreEntity {
};
exports.City = City;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], City.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], City.prototype, "isActive", void 0);
exports.City = City = __decorate([
    (0, typeorm_1.Entity)('cities'),
    (0, typeorm_1.Index)('IDX_cities_active', ['isActive'])
], City);
let Agent = class Agent extends CoreEntity {
};
exports.Agent = Agent;
__decorate([
    (0, typeorm_1.OneToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", User)
], Agent.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => City, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'city_id' }),
    __metadata("design:type", City)
], Agent.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'identity_proof_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], Agent.prototype, "identityProofUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'residency_document_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], Agent.prototype, "residencyDocumentUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: AgentApprovalStatus, default: AgentApprovalStatus.PENDING }),
    __metadata("design:type", String)
], Agent.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'kyc_notes', type: 'varchar', length: 1000, nullable: true }),
    __metadata("design:type", String)
], Agent.prototype, "kycNotes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", User)
], Agent.prototype, "updatedBy", void 0);
exports.Agent = Agent = __decorate([
    (0, typeorm_1.Entity)('agents'),
    (0, typeorm_1.Unique)('UQ_agents_user', ['user'])
], Agent);
let Campaign = class Campaign extends CoreEntity {
};
exports.Campaign = Campaign;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Campaign.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Campaign.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Campaign.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'target_channel', type: 'enum', enum: CampaignChannel, default: CampaignChannel.WHATSAPP }),
    __metadata("design:type", String)
], Campaign.prototype, "targetChannel", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'target_audience', type: 'enum', enum: CampaignAudience, default: CampaignAudience.ALL_USERS }),
    __metadata("design:type", String)
], Campaign.prototype, "targetAudience", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'run_type', type: 'enum', enum: CampaignRunType, default: CampaignRunType.ONCE }),
    __metadata("design:type", String)
], Campaign.prototype, "runType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'run_once_datetime', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], Campaign.prototype, "runOnceDatetime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start_date', type: 'date', nullable: true }),
    __metadata("design:type", String)
], Campaign.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end_date', type: 'date', nullable: true }),
    __metadata("design:type", String)
], Campaign.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'run_frequency', type: 'enum', enum: CampaignFrequency, nullable: true }),
    __metadata("design:type", String)
], Campaign.prototype, "runFrequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'run_time', type: 'time', nullable: true }),
    __metadata("design:type", String)
], Campaign.prototype, "runTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: CampaignStatus, default: CampaignStatus.DRAFT }),
    __metadata("design:type", String)
], Campaign.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'message_content', type: 'varchar', length: 4000 }),
    __metadata("design:type", String)
], Campaign.prototype, "messageContent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'actual_recipients', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Campaign.prototype, "actualRecipients", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Campaign.prototype, "views", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Campaign.prototype, "responses", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", User)
], Campaign.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CampaignImage, i => i.campaign, { cascade: true }),
    __metadata("design:type", Array)
], Campaign.prototype, "images", void 0);
exports.Campaign = Campaign = __decorate([
    (0, typeorm_1.Entity)('campaigns')
], Campaign);
let CampaignImage = class CampaignImage extends CoreEntity {
};
exports.CampaignImage = CampaignImage;
__decorate([
    (0, typeorm_1.ManyToOne)(() => Campaign, c => c.images, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'campaign_id' }),
    __metadata("design:type", Campaign)
], CampaignImage.prototype, "campaign", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'image_url', type: 'varchar', length: 500 }),
    __metadata("design:type", String)
], CampaignImage.prototype, "imageUrl", void 0);
exports.CampaignImage = CampaignImage = __decorate([
    (0, typeorm_1.Entity)('campaigns_images')
], CampaignImage);
let MessageTemplate = class MessageTemplate extends CoreEntity {
};
exports.MessageTemplate = MessageTemplate;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], MessageTemplate.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: NotificationChannel }),
    __metadata("design:type", String)
], MessageTemplate.prototype, "channel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], MessageTemplate.prototype, "body", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], MessageTemplate.prototype, "approved", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'locale', type: 'varchar', length: 10, default: 'ar' }),
    __metadata("design:type", String)
], MessageTemplate.prototype, "locale", void 0);
exports.MessageTemplate = MessageTemplate = __decorate([
    (0, typeorm_1.Entity)('message_templates'),
    (0, typeorm_1.Index)('UQ_message_templates_name_channel', ['name', 'channel'], { unique: true })
], MessageTemplate);
let Role = class Role extends CoreEntity {
};
exports.Role = Role;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserRole, ur => ur.role),
    __metadata("design:type", Array)
], Role.prototype, "userRoles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RolePermission, rp => rp.role),
    __metadata("design:type", Array)
], Role.prototype, "rolePermissions", void 0);
exports.Role = Role = __decorate([
    (0, typeorm_1.Entity)('roles'),
    (0, typeorm_1.Index)('UQ_roles_name', ['name'], { unique: true })
], Role);
let Permission = class Permission extends CoreEntity {
};
exports.Permission = Permission;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 150 }),
    __metadata("design:type", String)
], Permission.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Permission.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RolePermission, rp => rp.permission),
    __metadata("design:type", Array)
], Permission.prototype, "rolePermissions", void 0);
exports.Permission = Permission = __decorate([
    (0, typeorm_1.Entity)('permissions'),
    (0, typeorm_1.Index)('UQ_permissions_key', ['key'], { unique: true })
], Permission);
let RolePermission = class RolePermission extends CoreEntity {
};
exports.RolePermission = RolePermission;
__decorate([
    (0, typeorm_1.ManyToOne)(() => Role, r => r.rolePermissions, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", Role)
], RolePermission.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Permission, p => p.rolePermissions, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'permission_id' }),
    __metadata("design:type", Permission)
], RolePermission.prototype, "permission", void 0);
exports.RolePermission = RolePermission = __decorate([
    (0, typeorm_1.Entity)('role_permissions'),
    (0, typeorm_1.Unique)('UQ_role_permission_pair', ['role', 'permission'])
], RolePermission);
let UserRole = class UserRole extends CoreEntity {
};
exports.UserRole = UserRole;
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", User)
], UserRole.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Role, r => r.userRoles, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", Role)
], UserRole.prototype, "role", void 0);
exports.UserRole = UserRole = __decorate([
    (0, typeorm_1.Entity)('user_roles'),
    (0, typeorm_1.Unique)('UQ_user_role_pair', ['user', 'role'])
], UserRole);
let AuthSession = class AuthSession extends CoreEntity {
};
exports.AuthSession = AuthSession;
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", User)
], AuthSession.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'refresh_token', type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], AuthSession.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_agent', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AuthSession.prototype, "userAgent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ip_address', type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], AuthSession.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'expires_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], AuthSession.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'revoked_at', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], AuthSession.prototype, "revokedAt", void 0);
exports.AuthSession = AuthSession = __decorate([
    (0, typeorm_1.Entity)('auth_sessions'),
    (0, typeorm_1.Index)('IDX_auth_sessions_expires_at', ['expiresAt'])
], AuthSession);
let ReferralPartner = class ReferralPartner extends CoreEntity {
};
exports.ReferralPartner = ReferralPartner;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ReferralPartner.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, default: 'external' }),
    __metadata("design:type", String)
], ReferralPartner.prototype, "kind", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], ReferralPartner.prototype, "platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'referral_code', type: 'varchar', length: 32, nullable: true }),
    __metadata("design:type", String)
], ReferralPartner.prototype, "referralCode", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Campaign, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'campaign_id' }),
    __metadata("design:type", Campaign)
], ReferralPartner.prototype, "campaign", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], ReferralPartner.prototype, "isActive", void 0);
exports.ReferralPartner = ReferralPartner = __decorate([
    (0, typeorm_1.Entity)('referral_partners'),
    (0, typeorm_1.Unique)('UQ_partner_campaign_name_kind', ['campaign.id', 'name', 'kind']),
    (0, typeorm_1.Index)('IDX_partner_campaign', ['campaign']),
    (0, typeorm_1.Index)('UQ_referral_partner_code', ['referralCode'], { unique: true })
], ReferralPartner);
let VisitorTracking = class VisitorTracking extends CoreEntity {
};
exports.VisitorTracking = VisitorTracking;
__decorate([
    (0, typeorm_1.ManyToOne)(() => ReferralPartner, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'partner_id' }),
    __metadata("design:type", ReferralPartner)
], VisitorTracking.prototype, "partner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Campaign, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'campaign_id' }),
    __metadata("design:type", Campaign)
], VisitorTracking.prototype, "campaign", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'referral_code', type: 'varchar', length: 32, nullable: true }),
    __metadata("design:type", String)
], VisitorTracking.prototype, "referralCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'visited_url', type: 'varchar', length: 1000, nullable: true }),
    __metadata("design:type", String)
], VisitorTracking.prototype, "visitedUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'landing_page', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], VisitorTracking.prototype, "landingPage", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'utm_source', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], VisitorTracking.prototype, "utmSource", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'utm_campaign', type: 'varchar', length: 150, nullable: true }),
    __metadata("design:type", String)
], VisitorTracking.prototype, "utmCampaign", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'utm_content', type: 'varchar', length: 150, nullable: true }),
    __metadata("design:type", String)
], VisitorTracking.prototype, "utmContent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_agent', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], VisitorTracking.prototype, "userAgent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ip_address', type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], VisitorTracking.prototype, "ipAddress", void 0);
exports.VisitorTracking = VisitorTracking = __decorate([
    (0, typeorm_1.Entity)('visitor_tracking'),
    (0, typeorm_1.Index)('IDX_visit_partner_createdAt', ['partner', 'createdAt']),
    (0, typeorm_1.Index)('IDX_visit_campaign_createdAt', ['campaign', 'createdAt']),
    (0, typeorm_1.Index)('IDX_visit_referralCode_createdAt', ['referralCode', 'createdAt'])
], VisitorTracking);
let Conversion = class Conversion extends CoreEntity {
};
exports.Conversion = Conversion;
__decorate([
    (0, typeorm_1.ManyToOne)(() => VisitorTracking, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'visitor_id' }),
    __metadata("design:type", VisitorTracking)
], Conversion.prototype, "visitor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ReferralPartner, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'partner_id' }),
    __metadata("design:type", ReferralPartner)
], Conversion.prototype, "partner", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Campaign, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'campaign_id' }),
    __metadata("design:type", Campaign)
], Conversion.prototype, "campaign", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", User)
], Conversion.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 32, name: 'referral_code', nullable: true }),
    __metadata("design:type", String)
], Conversion.prototype, "referralCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 32, nullable: true }),
    __metadata("design:type", String)
], Conversion.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'converted_at', type: 'timestamptz', default: () => 'NOW()' }),
    __metadata("design:type", Date)
], Conversion.prototype, "convertedAt", void 0);
exports.Conversion = Conversion = __decorate([
    (0, typeorm_1.Entity)('conversions'),
    (0, typeorm_1.Index)('IDX_conv_partner_convertedAt', ['partner', 'convertedAt']),
    (0, typeorm_1.Index)('IDX_conv_campaign_convertedAt', ['campaign', 'convertedAt']),
    (0, typeorm_1.Index)('IDX_conv_user_convertedAt', ['user', 'convertedAt'])
], Conversion);
let Area = class Area extends CoreEntity {
};
exports.Area = Area;
__decorate([
    (0, typeorm_1.ManyToOne)(() => City, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'city_id' }),
    __metadata("design:type", City)
], Area.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Area.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Area.prototype, "isActive", void 0);
exports.Area = Area = __decorate([
    (0, typeorm_1.Entity)('areas'),
    (0, typeorm_1.Index)('IDX_areas_active', ['isActive'])
], Area);
let PropertyType = class PropertyType extends CoreEntity {
};
exports.PropertyType = PropertyType;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PropertyType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], PropertyType.prototype, "isActive", void 0);
exports.PropertyType = PropertyType = __decorate([
    (0, typeorm_1.Entity)('property_types')
], PropertyType);
let Property = class Property extends CoreEntity {
};
exports.Property = Property;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Property.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000 }),
    __metadata("design:type", String)
], Property.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PropertyType, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'property_type_id' }),
    __metadata("design:type", PropertyType)
], Property.prototype, "propertyType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => City, { onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'city_id' }),
    __metadata("design:type", City)
], Property.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.RelationId)((p) => p.city),
    __metadata("design:type", Number)
], Property.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Area, { eager: true, onDelete: 'SET NULL', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'area_id' }),
    __metadata("design:type", Area)
], Property.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.RelationId)((p) => p.area),
    __metadata("design:type", Number)
], Property.prototype, "areaId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint' }),
    __metadata("design:type", Number)
], Property.prototype, "bedrooms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint' }),
    __metadata("design:type", Number)
], Property.prototype, "bathrooms", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'area_m2', type: 'numeric', precision: 10, scale: 2 }),
    __metadata("design:type", String)
], Property.prototype, "areaM2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 15, scale: 2, nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'property_listing_request_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Property.prototype, "propertyListingRequestId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb' }),
    __metadata("design:type", Object)
], Property.prototype, "specifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb' }),
    __metadata("design:type", Object)
], Property.prototype, "guarantees", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'access_type', type: 'enum', enum: AccessType, default: AccessType.MEDIATED }),
    __metadata("design:type", String)
], Property.prototype, "accessType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'owner_name', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "ownerName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'owner_phone', type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "ownerPhone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'owner_notes', type: 'varchar', length: 1000, nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "ownerNotes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 8, nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 11, scale: 8, nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'map_place_id', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Property.prototype, "mapPlaceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Property.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", User)
], Property.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PropertyMedia, m => m.property, { cascade: true }),
    __metadata("design:type", Array)
], Property.prototype, "medias", void 0);
exports.Property = Property = __decorate([
    (0, typeorm_1.Entity)('properties'),
    (0, typeorm_1.Index)('IDX_properties_active', ['isActive'])
], Property);
let PropertyMedia = class PropertyMedia extends CoreEntity {
};
exports.PropertyMedia = PropertyMedia;
__decorate([
    (0, typeorm_1.ManyToOne)(() => Property, p => p.medias, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'property_id' }),
    __metadata("design:type", Property)
], PropertyMedia.prototype, "property", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'media_url', type: 'varchar', length: 500 }),
    __metadata("design:type", String)
], PropertyMedia.prototype, "mediaUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_primary', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], PropertyMedia.prototype, "isPrimary", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'order_index', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], PropertyMedia.prototype, "orderIndex", void 0);
exports.PropertyMedia = PropertyMedia = __decorate([
    (0, typeorm_1.Entity)('property_medias')
], PropertyMedia);
let FavoriteProperty = class FavoriteProperty extends CoreEntity {
};
exports.FavoriteProperty = FavoriteProperty;
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", User)
], FavoriteProperty.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Property, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'property_id' }),
    __metadata("design:type", Property)
], FavoriteProperty.prototype, "property", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'note', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], FavoriteProperty.prototype, "note", void 0);
exports.FavoriteProperty = FavoriteProperty = __decorate([
    (0, typeorm_1.Entity)('favorite_properties'),
    (0, typeorm_1.Unique)('UQ_favorite_user_property', ['user', 'property']),
    (0, typeorm_1.Index)('IDX_favorite_user', ['user'])
], FavoriteProperty);
let PropertyListingRequest = class PropertyListingRequest extends CoreEntity {
};
exports.PropertyListingRequest = PropertyListingRequest;
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'owner_id' }),
    __metadata("design:type", User)
], PropertyListingRequest.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'relationship_type', type: 'enum', enum: RelationshipType, default: RelationshipType.OWNER }),
    __metadata("design:type", String)
], PropertyListingRequest.prototype, "relationshipType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PropertyType, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'property_type_id' }),
    __metadata("design:type", PropertyType)
], PropertyListingRequest.prototype, "propertyType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000 }),
    __metadata("design:type", String)
], PropertyListingRequest.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb' }),
    __metadata("design:type", Object)
], PropertyListingRequest.prototype, "specifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'asking_price', type: 'numeric', precision: 15, scale: 2, nullable: true }),
    __metadata("design:type", String)
], PropertyListingRequest.prototype, "askingPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'authorization_doc_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], PropertyListingRequest.prototype, "authorizationDocUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ownership_doc_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], PropertyListingRequest.prototype, "ownershipDocUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ListingRequestStatus, default: ListingRequestStatus.PENDING }),
    __metadata("design:type", String)
], PropertyListingRequest.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", User)
], PropertyListingRequest.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PropertyListingRequestAttachment, a => a.request, { cascade: true }),
    __metadata("design:type", Array)
], PropertyListingRequest.prototype, "attachments", void 0);
exports.PropertyListingRequest = PropertyListingRequest = __decorate([
    (0, typeorm_1.Entity)('property_listing_requests')
], PropertyListingRequest);
let PropertyListingRequestAttachment = class PropertyListingRequestAttachment extends CoreEntity {
};
exports.PropertyListingRequestAttachment = PropertyListingRequestAttachment;
__decorate([
    (0, typeorm_1.ManyToOne)(() => PropertyListingRequest, r => r.attachments, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'property_listing_request_id' }),
    __metadata("design:type", PropertyListingRequest)
], PropertyListingRequestAttachment.prototype, "request", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'attachment_url', type: 'varchar', length: 500 }),
    __metadata("design:type", String)
], PropertyListingRequestAttachment.prototype, "attachmentUrl", void 0);
exports.PropertyListingRequestAttachment = PropertyListingRequestAttachment = __decorate([
    (0, typeorm_1.Entity)('property_listing_requests_attachments')
], PropertyListingRequestAttachment);
let AgentAvailability = class AgentAvailability extends CoreEntity {
};
exports.AgentAvailability = AgentAvailability;
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'agent_id' }),
    __metadata("design:type", User)
], AgentAvailability.prototype, "agent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'day_of_week', type: 'smallint' }),
    __metadata("design:type", Number)
], AgentAvailability.prototype, "dayOfWeek", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start_time', type: 'time' }),
    __metadata("design:type", String)
], AgentAvailability.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end_time', type: 'time' }),
    __metadata("design:type", String)
], AgentAvailability.prototype, "endTime", void 0);
exports.AgentAvailability = AgentAvailability = __decorate([
    (0, typeorm_1.Entity)('agent_availability')
], AgentAvailability);
let AgentPreferredProperty = class AgentPreferredProperty extends CoreEntity {
};
exports.AgentPreferredProperty = AgentPreferredProperty;
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'agent_id' }),
    __metadata("design:type", User)
], AgentPreferredProperty.prototype, "agent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Property, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'property_id' }),
    __metadata("design:type", Property)
], AgentPreferredProperty.prototype, "property", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'added_by' }),
    __metadata("design:type", User)
], AgentPreferredProperty.prototype, "addedBy", void 0);
exports.AgentPreferredProperty = AgentPreferredProperty = __decorate([
    (0, typeorm_1.Entity)('agent_preferred_properties')
], AgentPreferredProperty);
let Appointment = class Appointment extends CoreEntity {
};
exports.Appointment = Appointment;
__decorate([
    (0, typeorm_1.ManyToOne)(() => Property, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'property_id' }),
    __metadata("design:type", Property)
], Appointment.prototype, "property", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", User)
], Appointment.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { nullable: true, eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'agent_id' }),
    __metadata("design:type", User)
], Appointment.prototype, "agent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'appointment_date', type: 'date' }),
    __metadata("design:type", String)
], Appointment.prototype, "appointmentDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start_time', type: 'time' }),
    __metadata("design:type", String)
], Appointment.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end_time', type: 'time' }),
    __metadata("design:type", String)
], Appointment.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: AppointmentStatus, default: AppointmentStatus.PENDING }),
    __metadata("design:type", String)
], Appointment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Appointment, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'previous_appointment_id' }),
    __metadata("design:type", Appointment)
], Appointment.prototype, "previousAppointment", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'customer_notes', type: 'varchar', length: 1000, nullable: true }),
    __metadata("design:type", String)
], Appointment.prototype, "customerNotes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'agent_notes', type: 'varchar', length: 1000, nullable: true }),
    __metadata("design:type", String)
], Appointment.prototype, "agentNotes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_channel', type: 'enum', enum: CreatedChannel, default: CreatedChannel.WEB }),
    __metadata("design:type", String)
], Appointment.prototype, "createdChannel", void 0);
exports.Appointment = Appointment = __decorate([
    (0, typeorm_1.Entity)('appointments'),
    (0, typeorm_1.Index)('IDX_appt_customer', ['customer']),
    (0, typeorm_1.Index)('IDX_appt_agent', ['agent']),
    (0, typeorm_1.Index)('IDX_appt_property', ['property'])
], Appointment);
let AppointmentStatusHistory = class AppointmentStatusHistory extends CoreEntity {
};
exports.AppointmentStatusHistory = AppointmentStatusHistory;
__decorate([
    (0, typeorm_1.ManyToOne)(() => Appointment, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'appointment_id' }),
    __metadata("design:type", Appointment)
], AppointmentStatusHistory.prototype, "appointment", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'old_status', type: 'enum', enum: AppointmentStatus }),
    __metadata("design:type", String)
], AppointmentStatusHistory.prototype, "oldStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'new_status', type: 'enum', enum: AppointmentStatus }),
    __metadata("design:type", String)
], AppointmentStatusHistory.prototype, "newStatus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'changed_by' }),
    __metadata("design:type", User)
], AppointmentStatusHistory.prototype, "changedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000, nullable: true }),
    __metadata("design:type", String)
], AppointmentStatusHistory.prototype, "notes", void 0);
exports.AppointmentStatusHistory = AppointmentStatusHistory = __decorate([
    (0, typeorm_1.Entity)('appointment_status_history'),
    (0, typeorm_1.Index)('IDX_appt_history_created_at', ['createdAt'])
], AppointmentStatusHistory);
let CustomerTimelineEvent = class CustomerTimelineEvent extends CoreEntity {
};
exports.CustomerTimelineEvent = CustomerTimelineEvent;
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", User)
], CustomerTimelineEvent.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'event_type', type: 'enum', enum: TimelineEventType }),
    __metadata("design:type", String)
], CustomerTimelineEvent.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'related_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CustomerTimelineEvent.prototype, "relatedId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'related_table', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], CustomerTimelineEvent.prototype, "relatedTable", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'actor_user_id' }),
    __metadata("design:type", User)
], CustomerTimelineEvent.prototype, "actorUser", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000, nullable: true }),
    __metadata("design:type", String)
], CustomerTimelineEvent.prototype, "notes", void 0);
exports.CustomerTimelineEvent = CustomerTimelineEvent = __decorate([
    (0, typeorm_1.Entity)('customer_timeline_events'),
    (0, typeorm_1.Index)('IDX_timeline_customer_created', ['customer', 'createdAt'])
], CustomerTimelineEvent);
let CalendarAccount = class CalendarAccount extends CoreEntity {
};
exports.CalendarAccount = CalendarAccount;
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", User)
], CalendarAccount.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: CalendarProvider }),
    __metadata("design:type", String)
], CalendarAccount.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'external_account_id', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], CalendarAccount.prototype, "externalAccountId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'access_token', type: 'text' }),
    __metadata("design:type", String)
], CalendarAccount.prototype, "accessToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'refresh_token', type: 'text' }),
    __metadata("design:type", String)
], CalendarAccount.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'token_expires_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], CalendarAccount.prototype, "tokenExpiresAt", void 0);
exports.CalendarAccount = CalendarAccount = __decorate([
    (0, typeorm_1.Entity)('calendar_accounts'),
    (0, typeorm_1.Unique)('UQ_calendar_accounts_user_provider', ['user', 'provider'])
], CalendarAccount);
let AppointmentCalendarSync = class AppointmentCalendarSync extends CoreEntity {
};
exports.AppointmentCalendarSync = AppointmentCalendarSync;
__decorate([
    (0, typeorm_1.ManyToOne)(() => Appointment, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'appointment_id' }),
    __metadata("design:type", Appointment)
], AppointmentCalendarSync.prototype, "appointment", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'provider', type: 'enum', enum: CalendarProvider }),
    __metadata("design:type", String)
], AppointmentCalendarSync.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'provider_event_id', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AppointmentCalendarSync.prototype, "providerEventId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'synced_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], AppointmentCalendarSync.prototype, "syncedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_error', type: 'text', nullable: true }),
    __metadata("design:type", String)
], AppointmentCalendarSync.prototype, "lastError", void 0);
exports.AppointmentCalendarSync = AppointmentCalendarSync = __decorate([
    (0, typeorm_1.Entity)('appointment_calendar_sync'),
    (0, typeorm_1.Unique)('UQ_appt_calendar_event', ['appointment', 'providerEventId'])
], AppointmentCalendarSync);
let CustomerReview = class CustomerReview extends CoreEntity {
};
exports.CustomerReview = CustomerReview;
__decorate([
    (0, typeorm_1.ManyToOne)(() => Appointment, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'appointment_id' }),
    __metadata("design:type", Appointment)
], CustomerReview.prototype, "appointment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", User)
], CustomerReview.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'agent_id', type: 'int' }),
    __metadata("design:type", Number)
], CustomerReview.prototype, "agentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint' }),
    __metadata("design:type", Number)
], CustomerReview.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'review_text', type: 'varchar', length: 1000, nullable: true }),
    __metadata("design:type", String)
], CustomerReview.prototype, "reviewText", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_approved', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], CustomerReview.prototype, "isApproved", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CustomerReviewDimension, d => d.review, { cascade: true }),
    __metadata("design:type", Array)
], CustomerReview.prototype, "dimensions", void 0);
exports.CustomerReview = CustomerReview = __decorate([
    (0, typeorm_1.Entity)('customer_reviews'),
    (0, typeorm_1.Index)('IDX_cust_reviews_agent', ['agentId'])
], CustomerReview);
let CustomerReviewDimension = class CustomerReviewDimension extends CoreEntity {
};
exports.CustomerReviewDimension = CustomerReviewDimension;
__decorate([
    (0, typeorm_1.ManyToOne)(() => CustomerReview, r => r.dimensions, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_review_id' }),
    __metadata("design:type", CustomerReview)
], CustomerReviewDimension.prototype, "review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: RatingDimension }),
    __metadata("design:type", String)
], CustomerReviewDimension.prototype, "dimension", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint' }),
    __metadata("design:type", Number)
], CustomerReviewDimension.prototype, "score", void 0);
exports.CustomerReviewDimension = CustomerReviewDimension = __decorate([
    (0, typeorm_1.Entity)('customer_review_dimensions')
], CustomerReviewDimension);
let AgentReview = class AgentReview extends CoreEntity {
};
exports.AgentReview = AgentReview;
__decorate([
    (0, typeorm_1.ManyToOne)(() => Appointment, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'appointment_id' }),
    __metadata("design:type", Appointment)
], AgentReview.prototype, "appointment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'agent_id' }),
    __metadata("design:type", User)
], AgentReview.prototype, "agent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", User)
], AgentReview.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint' }),
    __metadata("design:type", Number)
], AgentReview.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'review_text', type: 'varchar', length: 1000, nullable: true }),
    __metadata("design:type", String)
], AgentReview.prototype, "reviewText", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AgentReviewDimension, d => d.review, { cascade: true }),
    __metadata("design:type", Array)
], AgentReview.prototype, "dimensions", void 0);
exports.AgentReview = AgentReview = __decorate([
    (0, typeorm_1.Entity)('agent_reviews'),
    (0, typeorm_1.Index)('IDX_agent_reviews_customer', ['customer'])
], AgentReview);
let AgentReviewDimension = class AgentReviewDimension extends CoreEntity {
};
exports.AgentReviewDimension = AgentReviewDimension;
__decorate([
    (0, typeorm_1.ManyToOne)(() => AgentReview, r => r.dimensions, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'agent_review_id' }),
    __metadata("design:type", AgentReview)
], AgentReviewDimension.prototype, "review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: RatingDimension }),
    __metadata("design:type", String)
], AgentReviewDimension.prototype, "dimension", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'smallint' }),
    __metadata("design:type", Number)
], AgentReviewDimension.prototype, "score", void 0);
exports.AgentReviewDimension = AgentReviewDimension = __decorate([
    (0, typeorm_1.Entity)('agent_review_dimensions')
], AgentReviewDimension);
let AgentPayment = class AgentPayment extends CoreEntity {
};
exports.AgentPayment = AgentPayment;
__decorate([
    (0, typeorm_1.ManyToOne)(() => Appointment, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'appointment_id' }),
    __metadata("design:type", Appointment)
], AgentPayment.prototype, "appointment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'agent_id' }),
    __metadata("design:type", User)
], AgentPayment.prototype, "agent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', precision: 15, scale: 2 }),
    __metadata("design:type", String)
], AgentPayment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING }),
    __metadata("design:type", String)
], AgentPayment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'payment_proof_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], AgentPayment.prototype, "paymentProofUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'paid_at', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], AgentPayment.prototype, "paidAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", User)
], AgentPayment.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: PaymentGateway, default: PaymentGateway.MANUAL }),
    __metadata("design:type", String)
], AgentPayment.prototype, "gateway", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'transaction_id', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], AgentPayment.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'currency', type: 'varchar', length: 10, default: 'EGP' }),
    __metadata("design:type", String)
], AgentPayment.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'notes', type: 'text', nullable: true }),
    __metadata("design:type", String)
], AgentPayment.prototype, "notes", void 0);
exports.AgentPayment = AgentPayment = __decorate([
    (0, typeorm_1.Entity)('agent_payments'),
    (0, typeorm_1.Index)('IDX_agent_payments_status', ['status'])
], AgentPayment);
let AgentBalance = class AgentBalance extends CoreEntity {
};
exports.AgentBalance = AgentBalance;
__decorate([
    (0, typeorm_1.OneToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'agent_id' }),
    __metadata("design:type", User)
], AgentBalance.prototype, "agent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total_earnings', type: 'numeric', precision: 15, scale: 2, default: 0 }),
    __metadata("design:type", String)
], AgentBalance.prototype, "totalEarnings", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pending_balance', type: 'numeric', precision: 15, scale: 2, default: 0 }),
    __metadata("design:type", String)
], AgentBalance.prototype, "pendingBalance", void 0);
exports.AgentBalance = AgentBalance = __decorate([
    (0, typeorm_1.Entity)('agent_balances'),
    (0, typeorm_1.Unique)('UQ_agent_balances_agent', ['agent'])
], AgentBalance);
let AgentPayoutAccount = class AgentPayoutAccount extends CoreEntity {
};
exports.AgentPayoutAccount = AgentPayoutAccount;
__decorate([
    (0, typeorm_1.OneToOne)(() => User, { eager: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'agent_id' }),
    __metadata("design:type", User)
], AgentPayoutAccount.prototype, "agent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'account_holder_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AgentPayoutAccount.prototype, "accountHolderName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'iban', type: 'varchar', length: 34 }),
    __metadata("design:type", String)
], AgentPayoutAccount.prototype, "iban", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AgentPayoutAccount.prototype, "bankName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'swift_code', type: 'varchar', length: 11, nullable: true }),
    __metadata("design:type", String)
], AgentPayoutAccount.prototype, "swiftCode", void 0);
exports.AgentPayoutAccount = AgentPayoutAccount = __decorate([
    (0, typeorm_1.Entity)('agent_payout_accounts'),
    (0, typeorm_1.Unique)('UQ_payout_account_agent', ['agent'])
], AgentPayoutAccount);
let Notification = class Notification extends CoreEntity {
};
exports.Notification = Notification;
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", User)
], Notification.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: NotificationType }),
    __metadata("design:type", String)
], Notification.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Notification.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000 }),
    __metadata("design:type", String)
], Notification.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'related_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Notification.prototype, "relatedId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: NotificationChannel, default: NotificationChannel.WHATSAPP }),
    __metadata("design:type", String)
], Notification.prototype, "channel", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'enum', enum: NotificationStatus, default: NotificationStatus.PENDING }),
    __metadata("design:type", String)
], Notification.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'scheduled_for', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], Notification.prototype, "scheduledFor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sent_at', type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], Notification.prototype, "sentAt", void 0);
exports.Notification = Notification = __decorate([
    (0, typeorm_1.Entity)('notifications')
], Notification);
let SiteSettings = class SiteSettings extends CoreEntity {
};
exports.SiteSettings = SiteSettings;
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 8, nullable: true }),
    __metadata("design:type", Number)
], SiteSettings.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 11, scale: 8, nullable: true }),
    __metadata("design:type", Number)
], SiteSettings.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'intro_video_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "introVideoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'customer_count', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], SiteSettings.prototype, "customerCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'years_experience', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], SiteSettings.prototype, "yearsExperience", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'project_count', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], SiteSettings.prototype, "projectCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], SiteSettings.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone_number', type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], SiteSettings.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'twitter_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "twitterUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'instagram_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "instagramUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'snapchat_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "snapchatUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tiktok_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "tiktokUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'youtube_url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "youtubeUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", User)
], SiteSettings.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'terms_html', type: 'text', nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "termsHtml", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'privacy_html', type: 'text', nullable: true }),
    __metadata("design:type", String)
], SiteSettings.prototype, "privacyHtml", void 0);
exports.SiteSettings = SiteSettings = __decorate([
    (0, typeorm_1.Entity)('site_settings')
], SiteSettings);
let FooterSettings = class FooterSettings extends CoreEntity {
};
exports.FooterSettings = FooterSettings;
__decorate([
    (0, typeorm_1.Column)({ name: 'footer_paragraph', type: 'text', nullable: true }),
    __metadata("design:type", String)
], FooterSettings.prototype, "footerParagraph", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'newsletter_title', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], FooterSettings.prototype, "newsletterTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'newsletter_paragraph', type: 'text', nullable: true }),
    __metadata("design:type", String)
], FooterSettings.prototype, "newsletterParagraph", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", User)
], FooterSettings.prototype, "updatedBy", void 0);
exports.FooterSettings = FooterSettings = __decorate([
    (0, typeorm_1.Entity)('footer_settings')
], FooterSettings);
let StaticPage = class StaticPage extends CoreEntity {
};
exports.StaticPage = StaticPage;
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: true }),
    __metadata("design:type", String)
], StaticPage.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], StaticPage.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000, nullable: true }),
    __metadata("design:type", String)
], StaticPage.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PageSection, s => s.page),
    __metadata("design:type", Array)
], StaticPage.prototype, "sections", void 0);
exports.StaticPage = StaticPage = __decorate([
    (0, typeorm_1.Entity)('static_pages')
], StaticPage);
let PageSection = class PageSection extends CoreEntity {
};
exports.PageSection = PageSection;
__decorate([
    (0, typeorm_1.ManyToOne)(() => StaticPage, p => p.sections, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'static_page_id' }),
    __metadata("design:type", StaticPage)
], PageSection.prototype, "page", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'section_key', unique: true, nullable: true }),
    __metadata("design:type", String)
], PageSection.prototype, "sectionKey", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PageSection.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500 }),
    __metadata("design:type", String)
], PageSection.prototype, "description", void 0);
exports.PageSection = PageSection = __decorate([
    (0, typeorm_1.Entity)('page_sections')
], PageSection);
let HomeBackground = class HomeBackground extends CoreEntity {
};
exports.HomeBackground = HomeBackground;
__decorate([
    (0, typeorm_1.Column)({ name: 'image_url', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], HomeBackground.prototype, "imageUrl", void 0);
exports.HomeBackground = HomeBackground = __decorate([
    (0, typeorm_1.Entity)('home_backgrounds')
], HomeBackground);
let PartnerLogo = class PartnerLogo extends CoreEntity {
};
exports.PartnerLogo = PartnerLogo;
__decorate([
    (0, typeorm_1.Column)({ name: 'image_url', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PartnerLogo.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'alt_text', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], PartnerLogo.prototype, "altText", void 0);
exports.PartnerLogo = PartnerLogo = __decorate([
    (0, typeorm_1.Entity)('partner_logos')
], PartnerLogo);
let HomeCommonQuestion = class HomeCommonQuestion extends CoreEntity {
};
exports.HomeCommonQuestion = HomeCommonQuestion;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500 }),
    __metadata("design:type", String)
], HomeCommonQuestion.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000 }),
    __metadata("design:type", String)
], HomeCommonQuestion.prototype, "answer", void 0);
exports.HomeCommonQuestion = HomeCommonQuestion = __decorate([
    (0, typeorm_1.Entity)('home_common_questions')
], HomeCommonQuestion);
let AboutFeature = class AboutFeature extends CoreEntity {
};
exports.AboutFeature = AboutFeature;
__decorate([
    (0, typeorm_1.Column)({ name: 'feature_text', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AboutFeature.prototype, "featureText", void 0);
exports.AboutFeature = AboutFeature = __decorate([
    (0, typeorm_1.Entity)('about_features')
], AboutFeature);
let AboutStep = class AboutStep extends CoreEntity {
};
exports.AboutStep = AboutStep;
__decorate([
    (0, typeorm_1.Column)({ name: 'step_number', type: 'int' }),
    __metadata("design:type", Number)
], AboutStep.prototype, "stepNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AboutStep.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500 }),
    __metadata("design:type", String)
], AboutStep.prototype, "description", void 0);
exports.AboutStep = AboutStep = __decorate([
    (0, typeorm_1.Entity)('about_steps')
], AboutStep);
let AboutHighlight = class AboutHighlight extends CoreEntity {
};
exports.AboutHighlight = AboutHighlight;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AboutHighlight.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000 }),
    __metadata("design:type", String)
], AboutHighlight.prototype, "description", void 0);
exports.AboutHighlight = AboutHighlight = __decorate([
    (0, typeorm_1.Entity)('about_highlights')
], AboutHighlight);
let AboutStat = class AboutStat extends CoreEntity {
};
exports.AboutStat = AboutStat;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AboutStat.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], AboutStat.prototype, "value", void 0);
exports.AboutStat = AboutStat = __decorate([
    (0, typeorm_1.Entity)('about_stats')
], AboutStat);
let AboutTeam = class AboutTeam extends CoreEntity {
};
exports.AboutTeam = AboutTeam;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AboutTeam.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], AboutTeam.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'image_url', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], AboutTeam.prototype, "imageUrl", void 0);
exports.AboutTeam = AboutTeam = __decorate([
    (0, typeorm_1.Entity)('about_team')
], AboutTeam);
let FaqGroup = class FaqGroup extends CoreEntity {
};
exports.FaqGroup = FaqGroup;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], FaqGroup.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FaqItem, i => i.group),
    __metadata("design:type", Array)
], FaqGroup.prototype, "items", void 0);
exports.FaqGroup = FaqGroup = __decorate([
    (0, typeorm_1.Entity)('faq_groups')
], FaqGroup);
let FaqItem = class FaqItem extends CoreEntity {
};
exports.FaqItem = FaqItem;
__decorate([
    (0, typeorm_1.ManyToOne)(() => FaqGroup, g => g.items, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'faq_group_id' }),
    __metadata("design:type", FaqGroup)
], FaqItem.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500 }),
    __metadata("design:type", String)
], FaqItem.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000 }),
    __metadata("design:type", String)
], FaqItem.prototype, "answer", void 0);
exports.FaqItem = FaqItem = __decorate([
    (0, typeorm_1.Entity)('faq_items')
], FaqItem);
let PrivacyGroup = class PrivacyGroup extends CoreEntity {
};
exports.PrivacyGroup = PrivacyGroup;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PrivacyGroup.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PrivacyItem, i => i.group),
    __metadata("design:type", Array)
], PrivacyGroup.prototype, "items", void 0);
exports.PrivacyGroup = PrivacyGroup = __decorate([
    (0, typeorm_1.Entity)('privacy_groups')
], PrivacyGroup);
let PrivacyItem = class PrivacyItem extends CoreEntity {
};
exports.PrivacyItem = PrivacyItem;
__decorate([
    (0, typeorm_1.ManyToOne)(() => PrivacyGroup, g => g.items, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'privacy_group_id' }),
    __metadata("design:type", PrivacyGroup)
], PrivacyItem.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500 }),
    __metadata("design:type", String)
], PrivacyItem.prototype, "content", void 0);
exports.PrivacyItem = PrivacyItem = __decorate([
    (0, typeorm_1.Entity)('privacy_items')
], PrivacyItem);
let TermsBlock = class TermsBlock extends CoreEntity {
};
exports.TermsBlock = TermsBlock;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], TermsBlock.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000 }),
    __metadata("design:type", String)
], TermsBlock.prototype, "description", void 0);
exports.TermsBlock = TermsBlock = __decorate([
    (0, typeorm_1.Entity)('terms_blocks')
], TermsBlock);
let QualityCase = class QualityCase extends CoreEntity {
};
exports.QualityCase = QualityCase;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QualityCase.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], QualityCase.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'related_table', type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], QualityCase.prototype, "relatedTable", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'related_id', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], QualityCase.prototype, "relatedId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: QualityCaseStatus, default: QualityCaseStatus.OPEN }),
    __metadata("design:type", String)
], QualityCase.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: QualityCasePriority, default: QualityCasePriority.MEDIUM }),
    __metadata("design:type", String)
], QualityCase.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true, nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'assignee_id' }),
    __metadata("design:type", User)
], QualityCase.prototype, "assignee", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => QualityCaseNote, n => n.case, { cascade: true }),
    __metadata("design:type", Array)
], QualityCase.prototype, "notes", void 0);
exports.QualityCase = QualityCase = __decorate([
    (0, typeorm_1.Entity)('quality_cases')
], QualityCase);
let QualityCaseNote = class QualityCaseNote extends CoreEntity {
};
exports.QualityCaseNote = QualityCaseNote;
__decorate([
    (0, typeorm_1.ManyToOne)(() => QualityCase, c => c.notes, { onDelete: 'CASCADE', eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'case_id' }),
    __metadata("design:type", QualityCase)
], QualityCaseNote.prototype, "case", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'author_id' }),
    __metadata("design:type", User)
], QualityCaseNote.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], QualityCaseNote.prototype, "note", void 0);
exports.QualityCaseNote = QualityCaseNote = __decorate([
    (0, typeorm_1.Entity)('quality_case_notes')
], QualityCaseNote);
let ReportSnapshot = class ReportSnapshot extends CoreEntity {
};
exports.ReportSnapshot = ReportSnapshot;
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ReportSnapshotType }),
    __metadata("design:type", String)
], ReportSnapshot.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'period_start', type: 'date' }),
    __metadata("design:type", String)
], ReportSnapshot.prototype, "periodStart", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'period_end', type: 'date' }),
    __metadata("design:type", String)
], ReportSnapshot.prototype, "periodEnd", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb' }),
    __metadata("design:type", Object)
], ReportSnapshot.prototype, "payload", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'generated_at', type: 'timestamptz', default: () => 'NOW()' }),
    __metadata("design:type", Date)
], ReportSnapshot.prototype, "generatedAt", void 0);
exports.ReportSnapshot = ReportSnapshot = __decorate([
    (0, typeorm_1.Entity)('report_snapshots'),
    (0, typeorm_1.Index)('IDX_report_snapshots_type_period', ['type', 'periodStart', 'periodEnd'])
], ReportSnapshot);
let ContactUs = class ContactUs extends CoreEntity {
};
exports.ContactUs = ContactUs;
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ContactUs.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ContactUs.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], ContactUs.prototype, "message", void 0);
exports.ContactUs = ContactUs = __decorate([
    (0, typeorm_1.Entity)('contact_us')
], ContactUs);
//# sourceMappingURL=global.entity.js.map