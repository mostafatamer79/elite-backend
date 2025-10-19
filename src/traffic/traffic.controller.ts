import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { TrafficService } from './traffic.service';
import { TrackVisitorDto, CreateConversionDto, TrafficQueryDto, CreateInfluencerDto, UpdateInfluencerDto } from '../../dto/traffic.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserType } from 'entities/global.entity';
import { CRUD } from 'common/crud.service';

@Controller('traffic')
export class TrafficController {
  constructor(private readonly trafficService: TrafficService) {}

  @Post('track')
  trackVisitor(@Body() trackVisitorDto: TrackVisitorDto) {
    return this.trafficService.trackVisitor(trackVisitorDto);
  }

  @Post('conversions')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  createConversion(@Body() createConversionDto: CreateConversionDto) {
    return this.trafficService.createConversion(createConversionDto);
  }

  @Get('visitors')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  getVisitors(@Query() query: any) {
    const filters: Record<string, any> = {};
    if (query.marketerId) filters.marketer = { id: Number(query.marketerId) };
    if (query.influencerId) filters.influencer = { id: Number(query.influencerId) };
    if (query.source) filters.source = query.source;

    return CRUD.findAll(this.trafficService.visitorTrackingRepository, 'visitor_tracking', query.q || query.search, query.page, query.limit, query.sortBy ?? 'createdAt', query.sortOrder ?? 'DESC', ['marketer', 'influencer'], ['utmSource', 'utmMedium', 'utmCampaign'], filters);
  }

  @Get('conversions')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  getConversions(@Query() query: any) {
    const filters: Record<string, any> = {};
    if (query.marketerId) filters.marketer = { id: Number(query.marketerId) };

    return CRUD.findAll(this.trafficService.conversionsRepository, 'conversion', query.q || query.search, query.page, query.limit, query.sortBy ?? 'convertedAt', query.sortOrder ?? 'DESC', ['marketer', 'visitor', 'user'], [], filters);
  }

  @Get('analytics/overview')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  getTrafficOverview(@Query() query: TrafficQueryDto) {
    return this.trafficService.getTrafficOverview(query);
  }

  @Post('influencers')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  createInfluencer(@Body() createInfluencerDto: CreateInfluencerDto) {
    return this.trafficService.createInfluencer(createInfluencerDto);
  }

  @Get('influencers')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  getInfluencers(@Query() query: any) {
    const filters: Record<string, any> = {};
    if (query.userId) filters.user = { id: Number(query.userId) };

    return CRUD.findAll(this.trafficService.influencersRepository, 'influencer', query.q || query.search, query.page, query.limit, query.sortBy ?? 'createdAt', query.sortOrder ?? 'DESC', ['user'], ['name', 'platform', 'code'], filters);
  }

  @Get('influencers/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  getInfluencer(@Param('id') id: string) {
    return this.trafficService.getInfluencer(+id);
  }

  @Patch('influencers/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  updateInfluencer(@Param('id') id: string, @Body() updateInfluencerDto: UpdateInfluencerDto) {
    return this.trafficService.updateInfluencer(+id, updateInfluencerDto);
  }

  @Delete('influencers/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  deleteInfluencer(@Param('id') id: string) {
    return this.trafficService.deleteInfluencer(+id);
  }

  @Get('influencers/:id/performance')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserType.ADMIN, UserType.MARKETER)
  getInfluencerPerformance(@Param('id') id: string) {
    return this.trafficService.getInfluencerPerformance(+id);
  }
}
