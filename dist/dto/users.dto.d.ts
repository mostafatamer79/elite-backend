import { UserType, VerificationStatus } from '../entities/global.entity';
export declare class CreateUserDto {
    email: string;
    fullName: string;
    password: string;
    userType: UserType;
    phoneNumber?: string;
    profilePhotoUrl?: string;
    nationalIdUrl?: string;
    residencyIdUrl?: string;
}
export declare class UpdateUserDto {
    email?: string;
    fullName?: string;
    userType?: UserType;
    phoneNumber?: string;
    profilePhotoUrl?: string;
    nationalIdUrl?: string;
    residencyIdUrl?: string;
    verificationStatus?: VerificationStatus;
    isActive?: boolean;
}
export declare class VerifyUserDto {
    status: VerificationStatus;
    notes?: string;
}
export declare class UserQueryDto {
    userType?: UserType;
    verificationStatus?: VerificationStatus;
    isActive?: boolean;
    page?: number;
    limit?: number;
}
export declare class CreateContactUsDto {
    name: string;
    email: string;
    message: string;
}
