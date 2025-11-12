import { ContactUsService } from './contactUs.service';
import { CreateContactUsDto } from 'dto/users.dto';
export declare class ContactUsController {
    private readonly contactUsService;
    constructor(contactUsService: ContactUsService);
    create(createContactUsDto: CreateContactUsDto): Promise<import("entities/global.entity").ContactUs>;
    findAll(query: any): Promise<import("common/crud.service").CustomPaginatedResponse<import("entities/global.entity").ContactUs>>;
    findOne(id: string): Promise<import("entities/global.entity").ContactUs>;
    remove(id: string): Promise<import("entities/global.entity").ContactUs>;
}
