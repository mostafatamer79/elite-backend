import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marketer, User } from 'entities/global.entity';
import { CreateMarketerDto, UpdateMarketerDto, MarketerQueryDto } from '../../dto/marketers.dto';

@Injectable()
export class MarketersService {
  constructor(
    @InjectRepository(Marketer)
    public marketersRepository: Repository<Marketer>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createMarketerDto: CreateMarketerDto): Promise<Marketer> {
    const existingMarketer = await this.marketersRepository.findOne({
      where: { user: { id: createMarketerDto.userId } }
    });

    if (existingMarketer) {
      throw new ConflictException('Marketer already exists for this user');
    }

    const user = await this.usersRepository.findOne({ where: { id: createMarketerDto.userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const referralCode = createMarketerDto.referralCode || this.generateReferralCode(user.fullName);

    const marketer = this.marketersRepository.create({
      user,
      referralCode,
      createdBy: { id: 1 } as User, // From authenticated user
    });

    return this.marketersRepository.save(marketer);
  }

  async findAll(query: MarketerQueryDto): Promise<{ data: Marketer[]; total: number }> {
    const { createdById, page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (createdById) where.createdBy = { id: createdById };

    const [data, total] = await this.marketersRepository.findAndCount({
      where,
      relations: ['user', 'createdBy'],
      skip,
      take: limit,
      order: { createdAt: 'DESC' }
    });

    return { data, total };
  }

  async findOne(id: number): Promise<Marketer> {
    const marketer = await this.marketersRepository.findOne({
      where: { id },
      relations: ['user', 'createdBy']
    });

    if (!marketer) {
      throw new NotFoundException('Marketer not found');
    }

    return marketer;
  }

  async update(id: number, updateMarketerDto: UpdateMarketerDto): Promise<Marketer> {
    const marketer = await this.findOne(id);
    
    if (updateMarketerDto.referralCode) {
      // Check if referral code is unique
      const existingMarketer = await this.marketersRepository.findOne({
        where: { referralCode: updateMarketerDto.referralCode }
      });
      if (existingMarketer && existingMarketer.id !== id) {
        throw new ConflictException('Referral code already exists');
      }
      marketer.referralCode = updateMarketerDto.referralCode;
    }

    return this.marketersRepository.save(marketer);
  }

  async remove(id: number): Promise<void> {
    const marketer = await this.findOne(id);
    await this.marketersRepository.remove(marketer);
  }

  async findByUserId(userId: number): Promise<Marketer> {
    const marketer = await this.marketersRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user', 'createdBy']
    });

    if (!marketer) {
      throw new NotFoundException('Marketer not found for this user');
    }

    return marketer;
  }

  async findByReferralCode(referralCode: string): Promise<Marketer> {
    const marketer = await this.marketersRepository.findOne({
      where: { referralCode },
      relations: ['user']
    });

    if (!marketer) {
      throw new NotFoundException('Marketer not found with this referral code');
    }

    return marketer;
  }

  generateReferralCode(marketerName: string): string {
    const baseCode = marketerName
      .toLowerCase()
      .replace(/\s+/g, '')
      .substring(0, 6);
    
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    return `${baseCode}${randomSuffix}`.toUpperCase();
  }

  async getPerformance(marketerId: number): Promise<any> {
    const marketer = await this.findOne(marketerId);
    
    // This would typically involve more complex analytics
    // For now, return basic performance data
    return {
      marketer: {
        id: marketer.id,
        name: marketer.user.fullName,
        referralCode: marketer.referralCode,
      },
      totalReferrals: 0, // Would count from visitor_tracking table
      totalConversions: 0, // Would count from conversions table
      conversionRate: '0%',
    };
  }
}