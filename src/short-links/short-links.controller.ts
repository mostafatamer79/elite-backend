import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Redirect } from '@nestjs/common';
import { ShortLinksService } from './short-links.service';
import { CreateShortLinkDto, UpdateShortLinkDto, ShortLinkQueryDto } from '../../dto/short-links.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserType } from 'entities/global.entity';
import { CRUD } from 'common/crud.service';

@Controller('short-links')
export class ShortLinksController {
  constructor(private readonly shortLinksService: ShortLinksService) {}

  // Public redirect endpoint
  @Get(':slug')
  @Redirect()
  async redirect(@Param('slug') slug: string) {
    const destination = await this.shortLinksService.getDestination(slug);
    return { url: destination, statusCode: 302 };
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  create(@Body() createShortLinkDto: CreateShortLinkDto) {
    return this.shortLinksService.create(createShortLinkDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  findAll(@Query() query: any) {
    const filters: Record<string, any> = {};
    if (query.influencerId) filters.influencer = { id: Number(query.influencerId) };
    if (query.marketerId) filters.marketer = { id: Number(query.marketerId) };
    if (query.campaignId) filters.campaignId = Number(query.campaignId);
    if (typeof query.isActive !== 'undefined') {
      filters.isActive = query.isActive === 'true' ? true : query.isActive === 'false' ? false : query.isActive;
    }

    return CRUD.findAll(this.shortLinksService.shortLinksRepository, 'short_link', query.q || query.search, query.page, query.limit, query.sortBy ?? 'createdAt', query.sortOrder ?? 'DESC', ['influencer', 'marketer', 'createdBy'], ['slug', 'destination', 'notes'], filters);
  }

  @Get('info/:slug')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  findOne(@Param('slug') slug: string) {
    return this.shortLinksService.findBySlug(slug);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  update(@Param('id') id: string, @Body() updateShortLinkDto: UpdateShortLinkDto) {
    return this.shortLinksService.update(+id, updateShortLinkDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  remove(@Param('id') id: string) {
    return this.shortLinksService.remove(+id);
  }

  @Post(':id/deactivate')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  deactivate(@Param('id') id: string) {
    return this.shortLinksService.deactivate(+id);
  }

  @Post(':id/activate')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  activate(@Param('id') id: string) {
    return this.shortLinksService.activate(+id);
  }

  @Get(':id/analytics')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  getAnalytics(@Param('id') id: string) {
    return this.shortLinksService.getAnalytics(+id);
  }
}
