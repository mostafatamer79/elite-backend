import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto, UpdateAppointmentDto, AssignAgentDto, UpdateStatusDto, AppointmentQueryDto } from '../../dto/appointments.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserType } from 'entities/global.entity';
import { CRUD } from 'common/crud.service';

@Controller('appointments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  @Roles(UserType.CUSTOMER, UserType.ADMIN, UserType.AGENT)
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Get()
  @Roles(UserType.ADMIN, UserType.AGENT, UserType.QUALITY)
  findAll(@Query() query: any) {
    // equality / nested filters
    const filters: Record<string, any> = {};
    if (query.customerId) filters.customer = { id: Number(query.customerId) };
    if (query.agentId) filters.agent = { id: Number(query.agentId) };
    if (query.propertyId) filters.property = { id: Number(query.propertyId) };
    if (query.status) filters.status = query.status;

    return CRUD.findAll(
      this.appointmentsService.appointmentsRepository,
      'appointment',
      query.q || query.search,
      query.page,
      query.limit,
      query.sortBy ?? 'appointmentDate',
      query.sortOrder ?? 'DESC',
      // relations (nested OK)
      ['property', 'customer', 'agent', 'property.city', 'property.area'],
      // searchFields (add root fields if you have any like ['notes'])
      [],
      // equality filters
      filters,
    );
  }

  @Get(':id')
  @Roles(UserType.ADMIN, UserType.AGENT, UserType.CUSTOMER, UserType.QUALITY)
  findOne(@Param('id') id: string) {
    return this.appointmentsService.findOne(+id);
  }

  @Patch(':id')
  @Roles(UserType.ADMIN, UserType.AGENT)
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentsService.update(+id, updateAppointmentDto);
  }

  @Post(':id/assign-agent')
  @Roles(UserType.ADMIN)
  assignAgent(@Param('id') id: string, @Body() assignAgentDto: AssignAgentDto) {
    return this.appointmentsService.assignAgent(+id, assignAgentDto.agentId);
  }

  @Post(':id/update-status')
  @Roles(UserType.ADMIN, UserType.AGENT, UserType.CUSTOMER)
  updateStatus(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.appointmentsService.updateStatus(+id, updateStatusDto);
  }

  @Get('customer/:customerId')
  @Roles(UserType.CUSTOMER, UserType.ADMIN, UserType.AGENT)
  findByCustomer(@Param('customerId') customerId: string, @Query() query: any) {
    const filters: Record<string, any> = {
      customer: { id: Number(customerId) }, // path param → nested filter
    };

    if (query.status) filters.status = query.status;
    if (query.propertyId) filters.property = { id: Number(query.propertyId) };

    return CRUD.findAll(
      this.appointmentsService.appointmentsRepository, // repo
      'appointment', // alias
      query.q || query.search, // search
      query.page, // page
      query.limit, // limit
      query.sortBy ?? 'appointmentDate', // sortBy
      query.sortOrder ?? 'DESC', // sortOrder
      ['property', 'agent', 'property.city', 'property.area'], // relations
      [], // searchFields (add root cols if you have any)
      filters, // equality + nested filters
    );
  }

  @Get('agent/:agentId')
  @Roles(UserType.AGENT, UserType.ADMIN)
  findByAgent(@Param('agentId') agentId: string, @Query() query: any) {
    const filters: Record<string, any> = {
      agent: { id: Number(agentId) }, // path param → nested filter
    };

    if (query.status) filters.status = query.status;
    if (query.propertyId) filters.property = { id: Number(query.propertyId) };

    return CRUD.findAll(
      this.appointmentsService.appointmentsRepository, // repo
      'appointment', // alias
      query.q || query.search, // search
      query.page, // page
      query.limit, // limit
      query.sortBy ?? 'appointmentDate', // sortBy
      query.sortOrder ?? 'DESC', // sortOrder
      ['property', 'customer', 'property.city', 'property.area'], // relations
      [], // searchFields (root-only if any)
      filters, // equality + nested filters
    );
  }
}
