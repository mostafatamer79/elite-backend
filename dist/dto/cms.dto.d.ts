export declare class CreateStaticPageDto {
    slug: string;
    title?: string;
    description?: string;
}
export declare class UpdateStaticPageDto {
    slug: string;
    title?: string;
    description?: string;
}
export declare class CreatePageSectionDto {
    sectionKey: string;
    title: string;
    description: string;
}
export declare class UpdatePageSectionDto {
    title?: string;
    description?: string;
}
export declare class UpdateSiteSettingsDto {
    latitude?: number;
    longitude?: number;
    introVideoUrl?: string;
    customerCount?: number;
    yearsExperience?: number;
    projectCount?: number;
    email?: string;
    phoneNumber?: string;
    twitterUrl?: string;
    instagramUrl?: string;
    snapchatUrl?: string;
    tiktokUrl?: string;
    youtubeUrl?: string;
    termsHtml?: string;
    address?: string;
    privacyHtml?: string;
}
export declare class UpdateFooterSettingsDto {
    footerParagraph?: string;
    newsletterTitle?: string;
    newsletterParagraph?: string;
}
export declare class CreateHomeBackgroundDto {
    imageUrl: string;
}
export declare class CreatePartnerLogoDto {
    imageUrl: string;
    altText: string;
}
export declare class CreateFaqItemDto {
    groupId: number;
    question: string;
    answer: string;
}
export declare class CreateFaqGroupDto {
    title: string;
}
export declare class UpdateFaqGroupDto {
    title?: string;
}
export declare class CreateAboutFeatureDto {
    featureText: string;
}
export declare class CreateAboutStepDto {
    stepNumber: number;
    title: string;
    description: string;
}
export declare class CreateAboutHighlightDto {
    title: string;
    description: string;
}
export declare class CreateAboutStatDto {
    label: string;
    value: string;
}
export declare class CreateAboutTeamDto {
    name: string;
    role: string;
    imageUrl: string;
}
