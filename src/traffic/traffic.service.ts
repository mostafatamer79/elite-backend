import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { VisitorTracking, Conversion, Influencer, Marketer, User, TrafficSource, ConversionType } from 'entities/global.entity';
import { TrackVisitorDto, CreateConversionDto, TrafficQueryDto, CreateInfluencerDto, UpdateInfluencerDto } from '../../dto/traffic.dto';

@Injectable()
export class TrafficService {
  constructor(
    @InjectRepository(VisitorTracking)
    public readonly visitorTrackingRepository: Repository<VisitorTracking>,
    @InjectRepository(Conversion)
    public readonly conversionsRepository: Repository<Conversion>,
    @InjectRepository(Influencer)
    public readonly influencersRepository: Repository<Influencer>,
    @InjectRepository(Marketer)
    private marketersRepository: Repository<Marketer>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async trackVisitor(trackVisitorDto: TrackVisitorDto): Promise<VisitorTracking> {
    let marketer: Marketer | null = null;
    let influencer: Influencer | null = null;

    // Find marketer by referral code if provided
    if (trackVisitorDto.referralCode) {
      marketer = await this.marketersRepository.findOne({
        where: { referralCode: trackVisitorDto.referralCode },
      });
    }

    // Use marketerId if provided
    if (trackVisitorDto.marketerId && !marketer) {
      marketer = await this.marketersRepository.findOne({
        where: { id: trackVisitorDto.marketerId },
      });
    }

    // Find influencer if provided
    if (trackVisitorDto.influencerId) {
      influencer = await this.influencersRepository.findOne({
        where: { id: trackVisitorDto.influencerId },
      });
    }

    const visitor = this.visitorTrackingRepository.create({
      ...trackVisitorDto,
      marketer,
      influencer,
    });

    return this.visitorTrackingRepository.save(visitor);
  }

  async createConversion(createConversionDto: CreateConversionDto): Promise<Conversion> {
    const visitor = await this.visitorTrackingRepository.findOne({
      where: { id: createConversionDto.visitorId },
    });
    if (!visitor) {
      throw new NotFoundException('Visitor not found');
    }

    const user = await this.usersRepository.findOne({
      where: { id: createConversionDto.userId },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    let marketer: Marketer | null = null;
    if (createConversionDto.marketerId) {
      marketer = await this.marketersRepository.findOne({
        where: { id: createConversionDto.marketerId },
      });
    }

    const conversion = this.conversionsRepository.create({
      ...createConversionDto,
      visitor,
      user,
      marketer,
      convertedAt: new Date(),
    });

    return this.conversionsRepository.save(conversion);
  }
 
  async getTrafficOverview(query: TrafficQueryDto): Promise<any> {
    const { startDate, endDate } = query;
    const start = startDate ? new Date(startDate) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // Default 30 days
    const end = endDate ? new Date(endDate) : new Date();

    const [visitors, conversions] = await Promise.all([
      this.visitorTrackingRepository.find({
        where: { createdAt: Between(start, end) },
      }),
      this.conversionsRepository.find({
        where: { convertedAt: Between(start, end) },
      }),
    ]);

    // Calculate conversion rate
    const conversionRate = visitors.length > 0 ? ((conversions.length / visitors.length) * 100).toFixed(2) : 0;

    // Analyze traffic sources
    const sources = visitors.reduce((acc, visitor) => {
      const source = visitor.source;
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {});

    // Analyze UTM sources
    const utmSources = visitors.reduce((acc, visitor) => {
      if (visitor.utmSource) {
        acc[visitor.utmSource] = (acc[visitor.utmSource] || 0) + 1;
      }
      return acc;
    }, {});

    return {
      period: { startDate: start.toISOString(), endDate: end.toISOString() },
      overview: {
        totalVisitors: visitors.length,
        totalConversions: conversions.length,
        conversionRate: `${conversionRate}%`,
      },
      sources,
      utmSources,
    };
  }

  // Influencer Management
  async createInfluencer(createInfluencerDto: CreateInfluencerDto): Promise<Influencer> {
    const code = createInfluencerDto.code || this.generateInfluencerCode(createInfluencerDto.name);

    // Check if code is unique
    const existingInfluencer = await this.influencersRepository.findOne({
      where: { code },
    });
    if (existingInfluencer) {
      throw new ConflictException('Influencer code already exists');
    }

    let user: User | null = null;
    if (createInfluencerDto.userId) {
      user = await this.usersRepository.findOne({
        where: { id: createInfluencerDto.userId },
      });
    }

    const influencer = this.influencersRepository.create({
      ...createInfluencerDto,
      code,
      user,
    });

    return this.influencersRepository.save(influencer);
  }

 

  async getInfluencer(id: number): Promise<Influencer> {
    const influencer = await this.influencersRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!influencer) {
      throw new NotFoundException('Influencer not found');
    }

    return influencer;
  }

  async updateInfluencer(id: number, updateInfluencerDto: UpdateInfluencerDto): Promise<Influencer> {
    const influencer = await this.getInfluencer(id);
    Object.assign(influencer, updateInfluencerDto);
    return this.influencersRepository.save(influencer);
  }

  async deleteInfluencer(id: number): Promise<void> {
    const influencer = await this.getInfluencer(id);
    await this.influencersRepository.remove(influencer);
  }

  async getInfluencerPerformance(influencerId: number): Promise<any> {
  // 1️⃣ Validate that influencer exists
  const influencer = await this.getInfluencer(influencerId);

  // 2️⃣ Get all visitors for this influencer
  const visitors = await this.visitorTrackingRepository.find({
    where: { influencer: { id: influencerId } },
  });

  if (visitors.length === 0) {
    return {
      influencer: {
        id: influencer.id,
        name: influencer.name,
        platform: influencer.platform,
        code: influencer.code,
      },
      performance: {
        totalVisitors: 0,
        totalConversions: 0,
        conversionRate: '0%',
      },
    };
  }

  // 3️⃣ Get all conversions linked to these visitors
  const visitorIds = visitors.map(v => v.id);

  const conversions = await this.conversionsRepository
    .createQueryBuilder('conversion')
    .where('conversion.visitor_id IN (:...ids)', { ids: visitorIds })
    .getMany();

  // 4️⃣ Calculate performance metrics
  const totalVisitors = visitors.length;
  const totalConversions = conversions.length;
  const conversionRate =
    totalVisitors > 0
      ? ((totalConversions / totalVisitors) * 100).toFixed(2) + '%'
      : '0%';

  // 5️⃣ Return structured performance summary
  return {
    influencer: {
      id: influencer.id,
      name: influencer.name,
      platform: influencer.platform,
      code: influencer.code,
    },
    performance: {
      totalVisitors,
      totalConversions,
      conversionRate,
    },
  };
}


  private generateInfluencerCode(name: string): string {
    const baseCode = name.toLowerCase().replace(/\s+/g, '').substring(0, 4);

    const randomSuffix = Math.random().toString(36).substring(2, 6);
    return `${baseCode}${randomSuffix}`.toUpperCase();
  }
}
