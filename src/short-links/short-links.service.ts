import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShortLink, Influencer, Marketer, User } from 'entities/global.entity';
import { CreateShortLinkDto, UpdateShortLinkDto, ShortLinkQueryDto } from '../../dto/short-links.dto';

@Injectable()
export class ShortLinksService {
  constructor(
    @InjectRepository(ShortLink)
    public readonly shortLinksRepository: Repository<ShortLink>, // 👈 expose
    @InjectRepository(Influencer)
    private influencersRepository: Repository<Influencer>,
    @InjectRepository(Marketer)
    private marketersRepository: Repository<Marketer>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createShortLinkDto: CreateShortLinkDto): Promise<ShortLink> {
    const slug = createShortLinkDto.slug || this.generateSlug();

    // Check if slug is unique
    const existingLink = await this.shortLinksRepository.findOne({
      where: { slug }
    });
    if (existingLink) {
      throw new ConflictException('Slug already exists');
    }

    let influencer: Influencer | null = null;
    let marketer: Marketer | null = null;

    if (createShortLinkDto.influencerId) {
      influencer = await this.influencersRepository.findOne({
        where: { id: createShortLinkDto.influencerId }
      });
    }

    if (createShortLinkDto.marketerId) {
      marketer = await this.marketersRepository.findOne({
        where: { id: createShortLinkDto.marketerId }
      });
    }

    const shortLink = this.shortLinksRepository.create({
      ...createShortLinkDto,
      slug,
      influencer,
      marketer,
      createdBy: { id: 1 } as User, // From authenticated user
    });

    return this.shortLinksRepository.save(shortLink);
  }
 

  async findBySlug(slug: string): Promise<ShortLink> {
    const shortLink = await this.shortLinksRepository.findOne({
      where: { slug },
      relations: ['influencer', 'marketer', 'createdBy']
    });

    if (!shortLink) {
      throw new NotFoundException('Short link not found');
    }

    return shortLink;
  }

  async getDestination(slug: string): Promise<string> {
    const shortLink = await this.shortLinksRepository.findOne({
      where: { slug, isActive: true }
    });

    if (!shortLink) {
      throw new NotFoundException('Short link not found or inactive');
    }

    // Here you would track the click (create a visit record)
    await this.trackClick(shortLink.id);

    return shortLink.destination;
  }

  async update(id: number, updateShortLinkDto: UpdateShortLinkDto): Promise<ShortLink> {
    const shortLink = await this.shortLinksRepository.findOne({ where: { id } });
    if (!shortLink) {
      throw new NotFoundException('Short link not found');
    }

    if (updateShortLinkDto.influencerId) {
      const influencer = await this.influencersRepository.findOne({
        where: { id: updateShortLinkDto.influencerId }
      });
      shortLink.influencer = influencer;
    }

    if (updateShortLinkDto.marketerId) {
      const marketer = await this.marketersRepository.findOne({
        where: { id: updateShortLinkDto.marketerId }
      });
      shortLink.marketer = marketer;
    }

    Object.assign(shortLink, updateShortLinkDto);
    return this.shortLinksRepository.save(shortLink);
  }

  async remove(id: number): Promise<void> {
    const shortLink = await this.shortLinksRepository.findOne({ where: { id } });
    if (!shortLink) {
      throw new NotFoundException('Short link not found');
    }
    await this.shortLinksRepository.remove(shortLink);
  }

  async deactivate(id: number): Promise<ShortLink> {
    const shortLink = await this.shortLinksRepository.findOne({ where: { id } });
    if (!shortLink) {
      throw new NotFoundException('Short link not found');
    }
    shortLink.isActive = false;
    return this.shortLinksRepository.save(shortLink);
  }

  async activate(id: number): Promise<ShortLink> {
    const shortLink = await this.shortLinksRepository.findOne({ where: { id } });
    if (!shortLink) {
      throw new NotFoundException('Short link not found');
    }
    shortLink.isActive = true;
    return this.shortLinksRepository.save(shortLink);
  }

  async getAnalytics(id: number): Promise<any> {
    const shortLink = await this.shortLinksRepository.findOne({ where: { id } });
    if (!shortLink) {
      throw new NotFoundException('Short link not found');
    }

    // This would typically query a separate clicks/visits table
    // For now, return basic analytics structure
    return {
      shortLink: {
        id: shortLink.id,
        slug: shortLink.slug,
        destination: shortLink.destination,
      },
      clicks: 0, // Would count from tracking table
      uniqueClicks: 0, // Would count from tracking table
      lastClicked: null, // Would get from tracking table
    };
  }

  private generateSlug(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let slug = '';
    for (let i = 0; i < 8; i++) {
      slug += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return slug;
  }

  private async trackClick(shortLinkId: number): Promise<void> {
    // Implementation for tracking clicks would go here
    // This would create a record in a link_clicks table with timestamp, IP, user agent, etc.
    console.log(`Tracking click for short link ID: ${shortLinkId}`);
  }
}