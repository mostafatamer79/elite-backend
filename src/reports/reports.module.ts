import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { ReportSnapshot, Appointment, AgentPayment, User, Conversion, VisitorTracking } from 'entities/global.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReportSnapshot, Appointment, AgentPayment, User, Conversion, VisitorTracking])],
  controllers: [ReportsController],
  providers: [ReportsService],
  exports: [ReportsService],
})
export class ReportsModule {}