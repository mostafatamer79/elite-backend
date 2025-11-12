export declare class MailService {
    private transporter;
    sendOtpEmail(userEmail: string, data: {
        otp: string;
        userName: string;
        purpose: 'registration' | 'password_reset' | 'login';
    }): Promise<void>;
    sendWelcomeEmail(userEmail: string, data: {
        userName: string;
        userType: string;
    }): Promise<void>;
    private getEmailSubject;
    private generateOtpTemplate;
    testConnection(): Promise<boolean>;
}
