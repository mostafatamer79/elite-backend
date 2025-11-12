import { UserType } from '../entities/global.entity';
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class RegisterDto {
    email: string;
    password: string;
    fullName: string;
    userType: UserType;
    phoneNumber: string;
    profilePhotoUrl?: string;
}
export declare class VerifyOtpDto {
    email: string;
    otp: string;
}
export declare class RefreshTokenDto {
    refreshToken: string;
}
export declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
}
export declare class ForgotPasswordDto {
    email: string;
}
export declare class ResetPasswordDto {
    token: string;
    newPassword: string;
}
export declare class UpdateProfileDto {
    fullName?: string;
    email?: string;
    profilePhotoUrl?: string;
}
export declare class EmailLoginDto {
    email: string;
}
export declare class VerifyEmailOtpDto {
    email: string;
    otp: string;
}
