import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, HttpStatus, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto, VerifyUserDto, UserQueryDto } from 'dto/users.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserType } from 'entities/global.entity';
import { CRUD } from 'common/crud.service';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(UserType.ADMIN)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Roles(UserType.ADMIN)
  findAll(@Query() query: any) {
    const filters: Record<string, any> = {};
    if (query.userType) filters.userType = query.userType;

    return CRUD.findAll(
      this.usersService.usersRepository,
      'user',
      query.search,
      query.page,
      query.limit,
      query.sortBy,
      query.sortOrder,
      [], // relations
      ['fullName', 'email', 'phoneNumber'], // searchFields
      filters, // filters (exact matches)
    );
  }

  @Get(':id')
  @Roles(UserType.ADMIN)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @Roles(UserType.ADMIN)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @Roles(UserType.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post(':id/verify')
  @Roles(UserType.ADMIN)
  verifyUser(@Param('id') id: string, @Body() verifyUserDto: VerifyUserDto) {
    return this.usersService.verifyUser(+id, verifyUserDto);
  }

  @Post(':id/deactivate')
  @Roles(UserType.ADMIN)
  deactivate(@Param('id') id: string) {
    return this.usersService.deactivate(+id);
  }

  @Post(':id/activate')
  @Roles(UserType.ADMIN)
  activate(@Param('id') id: string) {
    return this.usersService.activate(+id);
  }
}
