import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortLinksService } from './short-links.service';
import { ShortLinksController } from './short-links.controller';
import { ShortLink, Influencer, Marketer, User } from 'entities/global.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShortLink, Influencer, Marketer, User])],
  controllers: [ShortLinksController],
  providers: [ShortLinksService],
  exports: [ShortLinksService],
})
export class ShortLinksModule {}