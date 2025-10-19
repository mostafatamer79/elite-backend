import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketersService } from './marketers.service';
import { MarketersController } from './marketers.controller';
import { Marketer, User } from 'entities/global.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Marketer, User])],
  controllers: [MarketersController],
  providers: [MarketersService],
  exports: [MarketersService],
})
export class MarketersModule {}