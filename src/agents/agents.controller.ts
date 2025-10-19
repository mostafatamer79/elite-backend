import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { CreateAgentDto, UpdateAgentDto, ApproveAgentDto, AgentQueryDto } from '../../dto/agents.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserType } from 'entities/global.entity';
import { CRUD } from 'common/crud.service';

@Controller('agents')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AgentsController {
  constructor(private readonly agentsService: AgentsService) {}

  @Post()
  @Roles(UserType.ADMIN)
  create(@Body() createAgentDto: CreateAgentDto) {
    return this.agentsService.create(createAgentDto);
  }

 @Get()
  @Roles(UserType.ADMIN, UserType.QUALITY)
  findAll(@Query() query: any) {
    const filters: Record<string, any> = {};

    if (query.status) filters.status = query.status;
    if (query.cityId) filters.city = { id: Number(query.cityId) };

    return CRUD.findAll(
      this.agentsService.agentsRepository, // repo
      'agent',                              // alias
      query.q || query.search,              // search
      query.page,                           // page
      query.limit,                          // limit
      query.sortBy ,          // sortBy (avoid default 'created_at' mismatch)
      query.sortOrder ,            // sortOrder
      ['user', 'city'],                     // relations
      ['status'],                           // searchFields (root-only fields)
      filters,                              // filters (exact matches; supports nested)
    );
  }

  @Get(':id')
  @Roles(UserType.ADMIN, UserType.QUALITY)
  findOne(@Param('id') id: string) {
    return this.agentsService.findOne(+id);
  }

  @Patch(':id')
  @Roles(UserType.ADMIN)
  update(@Param('id') id: string, @Body() updateAgentDto: UpdateAgentDto) {
    return this.agentsService.update(+id, updateAgentDto);
  }

  @Delete(':id')
  @Roles(UserType.ADMIN)
  remove(@Param('id') id: string) {
    return this.agentsService.remove(+id);
  }

  @Post(':id/approve')
  @Roles(UserType.ADMIN, UserType.QUALITY)
  approve(@Param('id') id: string, @Body() approveAgentDto: ApproveAgentDto) {
    return this.agentsService.approve(+id, approveAgentDto);
  }

  @Get('user/:userId')
  @Roles(UserType.ADMIN, UserType.QUALITY)
  findByUserId(@Param('userId') userId: string) {
    return this.agentsService.findByUserId(+userId);
  }
}
