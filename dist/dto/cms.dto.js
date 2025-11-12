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
exports.CreateAboutTeamDto = exports.CreateAboutStatDto = exports.CreateAboutHighlightDto = exports.CreateAboutStepDto = exports.CreateAboutFeatureDto = exports.UpdateFaqGroupDto = exports.CreateFaqGroupDto = exports.CreateFaqItemDto = exports.CreatePartnerLogoDto = exports.CreateHomeBackgroundDto = exports.UpdateFooterSettingsDto = exports.UpdateSiteSettingsDto = exports.UpdatePageSectionDto = exports.CreatePageSectionDto = exports.UpdateStaticPageDto = exports.CreateStaticPageDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateStaticPageDto {
}
exports.CreateStaticPageDto = CreateStaticPageDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStaticPageDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaticPageDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStaticPageDto.prototype, "description", void 0);
class UpdateStaticPageDto {
}
exports.UpdateStaticPageDto = UpdateStaticPageDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStaticPageDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateStaticPageDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateStaticPageDto.prototype, "description", void 0);
class CreatePageSectionDto {
}
exports.CreatePageSectionDto = CreatePageSectionDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePageSectionDto.prototype, "sectionKey", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePageSectionDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePageSectionDto.prototype, "description", void 0);
class UpdatePageSectionDto {
}
exports.UpdatePageSectionDto = UpdatePageSectionDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePageSectionDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePageSectionDto.prototype, "description", void 0);
class UpdateSiteSettingsDto {
}
exports.UpdateSiteSettingsDto = UpdateSiteSettingsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, class_validator_1.IsNumber)({}, { message: 'Latitude must be a valid number' }),
    __metadata("design:type", Number)
], UpdateSiteSettingsDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, class_validator_1.IsNumber)({}, { message: 'Longitude must be a valid number' }),
    __metadata("design:type", Number)
], UpdateSiteSettingsDto.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({ require_protocol: true }, { message: 'introVideoUrl must be a valid URL' }),
    __metadata("design:type", String)
], UpdateSiteSettingsDto.prototype, "introVideoUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Customer count must be a number' }),
    __metadata("design:type", Number)
], UpdateSiteSettingsDto.prototype, "customerCount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Years of experience must be a number' }),
    __metadata("design:type", Number)
], UpdateSiteSettingsDto.prototype, "yearsExperience", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'Project count must be a number' }),
    __metadata("design:type", Number)
], UpdateSiteSettingsDto.prototype, "projectCount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be a valid email address' }),
    __metadata("design:type", String)
], UpdateSiteSettingsDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSiteSettingsDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({ require_protocol: true }),
    __metadata("design:type", String)
], UpdateSiteSettingsDto.prototype, "twitterUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({ require_protocol: true }),
    __metadata("design:type", String)
], UpdateSiteSettingsDto.prototype, "instagramUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({ require_protocol: true }),
    __metadata("design:type", String)
], UpdateSiteSettingsDto.prototype, "snapchatUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({ require_protocol: true }),
    __metadata("design:type", String)
], UpdateSiteSettingsDto.prototype, "tiktokUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({ require_protocol: true }),
    __metadata("design:type", String)
], UpdateSiteSettingsDto.prototype, "youtubeUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500000, { message: 'termsHtml is too long' }),
    __metadata("design:type", String)
], UpdateSiteSettingsDto.prototype, "termsHtml", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSiteSettingsDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500000, { message: 'privacyHtml is too long' }),
    __metadata("design:type", String)
], UpdateSiteSettingsDto.prototype, "privacyHtml", void 0);
const trim = () => (0, class_transformer_1.Transform)(({ value }) => (typeof value === 'string' ? value.trim() : value));
class UpdateFooterSettingsDto {
}
exports.UpdateFooterSettingsDto = UpdateFooterSettingsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    trim(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFooterSettingsDto.prototype, "footerParagraph", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    trim(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255, { message: 'newsletterTitle must be at most 255 characters' }),
    __metadata("design:type", String)
], UpdateFooterSettingsDto.prototype, "newsletterTitle", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    trim(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateFooterSettingsDto.prototype, "newsletterParagraph", void 0);
class CreateHomeBackgroundDto {
}
exports.CreateHomeBackgroundDto = CreateHomeBackgroundDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateHomeBackgroundDto.prototype, "imageUrl", void 0);
class CreatePartnerLogoDto {
}
exports.CreatePartnerLogoDto = CreatePartnerLogoDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePartnerLogoDto.prototype, "imageUrl", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePartnerLogoDto.prototype, "altText", void 0);
class CreateFaqItemDto {
}
exports.CreateFaqItemDto = CreateFaqItemDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFaqItemDto.prototype, "groupId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFaqItemDto.prototype, "question", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFaqItemDto.prototype, "answer", void 0);
class CreateFaqGroupDto {
}
exports.CreateFaqGroupDto = CreateFaqGroupDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    trim(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateFaqGroupDto.prototype, "title", void 0);
class UpdateFaqGroupDto {
}
exports.UpdateFaqGroupDto = UpdateFaqGroupDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    trim(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateFaqGroupDto.prototype, "title", void 0);
class CreateAboutFeatureDto {
}
exports.CreateAboutFeatureDto = CreateAboutFeatureDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAboutFeatureDto.prototype, "featureText", void 0);
class CreateAboutStepDto {
}
exports.CreateAboutStepDto = CreateAboutStepDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateAboutStepDto.prototype, "stepNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAboutStepDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateAboutStepDto.prototype, "description", void 0);
class CreateAboutHighlightDto {
}
exports.CreateAboutHighlightDto = CreateAboutHighlightDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateAboutHighlightDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], CreateAboutHighlightDto.prototype, "description", void 0);
class CreateAboutStatDto {
}
exports.CreateAboutStatDto = CreateAboutStatDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAboutStatDto.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateAboutStatDto.prototype, "value", void 0);
class CreateAboutTeamDto {
}
exports.CreateAboutTeamDto = CreateAboutTeamDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAboutTeamDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAboutTeamDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsUrl)({ require_protocol: true }),
    __metadata("design:type", String)
], CreateAboutTeamDto.prototype, "imageUrl", void 0);
//# sourceMappingURL=cms.dto.js.map