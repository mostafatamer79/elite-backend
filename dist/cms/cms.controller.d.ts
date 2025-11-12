import { CmsService } from './cms.service';
import { CreateStaticPageDto, UpdateStaticPageDto, CreatePageSectionDto, UpdatePageSectionDto, UpdateSiteSettingsDto, UpdateFooterSettingsDto, CreateHomeBackgroundDto, CreatePartnerLogoDto, CreateFaqItemDto, CreateFaqGroupDto, UpdateFaqGroupDto, CreateAboutTeamDto, CreateAboutStatDto, CreateAboutHighlightDto, CreateAboutStepDto, CreateAboutFeatureDto } from '../../dto/cms.dto';
export declare class CmsController {
    private readonly cmsService;
    constructor(cmsService: CmsService);
    getAllPages(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").StaticPage>>;
    listSections(pageId: string, query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").PageSection>>;
    getPageBySlug(slug: string): Promise<import("entities/global.entity").StaticPage>;
    createPage(createStaticPageDto: CreateStaticPageDto): Promise<import("entities/global.entity").StaticPage>;
    updatePage(id: string, updateStaticPageDto: UpdateStaticPageDto): Promise<import("entities/global.entity").StaticPage>;
    createSection(pageId: string, createSectionDto: CreatePageSectionDto): Promise<import("entities/global.entity").PageSection>;
    updateSection(id: string, updateSectionDto: UpdatePageSectionDto): Promise<import("entities/global.entity").PageSection>;
    getSiteSettings(): Promise<import("entities/global.entity").SiteSettings>;
    updateSiteSettings(dto: UpdateSiteSettingsDto): Promise<import("entities/global.entity").SiteSettings>;
    getFooterSettings(): Promise<import("entities/global.entity").FooterSettings>;
    updateFooterSettings(updateFooterSettingsDto: UpdateFooterSettingsDto): Promise<import("entities/global.entity").FooterSettings>;
    getHomeBackgrounds(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").HomeBackground>>;
    createHomeBackground(createHomeBackgroundDto: CreateHomeBackgroundDto): Promise<import("entities/global.entity").HomeBackground>;
    deleteHomeBackground(id: number): Promise<{
        message: string;
    }>;
    getPartnerLogos(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").PartnerLogo>>;
    createPartnerLogo(createPartnerLogoDto: CreatePartnerLogoDto): Promise<import("entities/global.entity").PartnerLogo>;
    deletePartnerLogo(id: number): Promise<{
        message: string;
    }>;
    createFaqGroup(dto: CreateFaqGroupDto): Promise<import("entities/global.entity").FaqGroup>;
    updateFaqGroup(id: number, dto: UpdateFaqGroupDto): Promise<import("entities/global.entity").FaqGroup>;
    deleteFaqGroup(id: number): Promise<{
        message: string;
    }>;
    getFaqGroups(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").FaqGroup>>;
    createFaqItem(createFaqItemDto: CreateFaqItemDto): Promise<import("entities/global.entity").FaqItem>;
    deleteFaqItem(id: number): Promise<{
        message: string;
    }>;
    createAboutFeature(dto: CreateAboutFeatureDto): Promise<import("entities/global.entity").AboutFeature>;
    createAboutStep(dto: CreateAboutStepDto): Promise<import("entities/global.entity").AboutStep>;
    createAboutHighlight(dto: CreateAboutHighlightDto): Promise<import("entities/global.entity").AboutHighlight>;
    createAboutStat(dto: CreateAboutStatDto): Promise<import("entities/global.entity").AboutStat>;
    createAboutTeam(dto: CreateAboutTeamDto): Promise<import("entities/global.entity").AboutTeam>;
    deleteAboutHighlight(id: number): Promise<{
        message: string;
    }>;
    getAboutHighlights(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").AboutHighlight>>;
    getAboutFeatures(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").AboutFeature>>;
    deleteAboutFeature(id: number): Promise<{
        message: string;
    }>;
    getAboutSteps(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").AboutStep>>;
    deleteAboutStep(id: number): Promise<{
        message: string;
    }>;
    getAboutStats(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").AboutStat>>;
    deleteAboutStat(id: number): Promise<{
        message: string;
    }>;
    getAboutTeam(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").AboutTeam>>;
    deleteAboutTeam(id: number): Promise<{
        message: string;
    }>;
}
