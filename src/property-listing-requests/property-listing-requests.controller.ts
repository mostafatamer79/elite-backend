import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { PropertyListingRequestsService } from './property-listing-requests.service';
import { CreatePropertyListingRequestDto, UpdatePropertyListingRequestDto, PropertyListingRequestQueryDto, AddAttachmentDto } from '../../dto/property-listing-requests.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserType } from 'entities/global.entity';
import { CRUD } from 'common/crud.service';

@Controller('property-listing-requests')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PropertyListingRequestsController {
  constructor(private readonly propertyListingRequestsService: PropertyListingRequestsService) {}

  @Post()
  @Roles(UserType.CUSTOMER, UserType.ADMIN)
  create(@Body() createPropertyListingRequestDto: CreatePropertyListingRequestDto) {
    return this.propertyListingRequestsService.create(createPropertyListingRequestDto);
  }

@Get()
  @Roles(UserType.ADMIN, UserType.AGENT, UserType.QUALITY)
  findAll(@Query() query: any) {
    const filters: Record<string, any> = {};

    if (query.ownerId) filters.owner = { id: Number(query.ownerId) };
    if (query.status) filters.status = query.status;
    if (query.relationshipType) filters.relationshipType = query.relationshipType;

    return CRUD.findAll(
      this.propertyListingRequestsService.propertyListingRequestsRepository, // repo
      'property_listing_request',                                            // alias (match your QB alias)
      query.q || query.search,                                               // search
      query.page,                                                            // page
      query.limit,                                                           // limit
      query.sortBy ?? 'createdAt',                                           // sortBy (avoid 'created_at' mismatch)
      query.sortOrder ?? 'DESC',                                             // sortOrder
      ['owner', 'propertyType', 'attachments', 'updatedBy'],                 // relations
      [],                                                                    // searchFields (add root cols if needed)
      filters,                                                               // filters (supports nested)
    );
  }
  @Get(':id')
  @Roles(UserType.ADMIN, UserType.AGENT, UserType.QUALITY, UserType.CUSTOMER)
  findOne(@Param('id') id: string) {
    return this.propertyListingRequestsService.findOne(+id);
  }

  @Patch(':id')
  @Roles(UserType.ADMIN, UserType.QUALITY)
  update(@Param('id') id: string, @Body() updatePropertyListingRequestDto: UpdatePropertyListingRequestDto) {
    return this.propertyListingRequestsService.update(+id, updatePropertyListingRequestDto);
  }

  @Delete(':id')
  @Roles(UserType.ADMIN, UserType.CUSTOMER)
  remove(@Param('id') id: string) {
    return this.propertyListingRequestsService.remove(+id);
  }

  @Post(':id/attachments')
  @Roles(UserType.CUSTOMER, UserType.ADMIN)
  addAttachment(@Param('id') id: string, @Body() addAttachmentDto: AddAttachmentDto) {
    return this.propertyListingRequestsService.addAttachment(+id, addAttachmentDto);
  }

  @Post(':id/approve')
  @Roles(UserType.ADMIN, UserType.QUALITY)
  approve(@Param('id') id: string) {
    return this.propertyListingRequestsService.approve(+id);
  }

  @Post(':id/reject')
  @Roles(UserType.ADMIN, UserType.QUALITY)
  reject(@Param('id') id: string, @Body('reason') reason: string) {
    return this.propertyListingRequestsService.reject(+id, reason);
  }

  @Post(':id/publish')
  @Roles(UserType.ADMIN, UserType.QUALITY)
  publish(@Param('id') id: string) {
    return this.propertyListingRequestsService.publish(+id);
  }

  @Get('owner/:ownerId')
  @Roles(UserType.CUSTOMER, UserType.ADMIN)
  findByOwner(@Param('ownerId') ownerId: string) {
    return this.propertyListingRequestsService.findByOwner(+ownerId);
  }
}