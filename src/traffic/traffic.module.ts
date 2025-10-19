import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrafficService } from './traffic.service';
import { TrafficController } from './traffic.controller';
import { VisitorTracking, Conversion, Influencer, Marketer, User } from 'entities/global.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VisitorTracking, Conversion, Influencer, Marketer, User])],
  controllers: [TrafficController],
  providers: [TrafficService],
  exports: [TrafficService],
})
export class TrafficModule {}