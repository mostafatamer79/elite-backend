import { MulterError } from 'multer';
import { ExceptionFilter, ArgumentsHost, ParseFilePipe } from '@nestjs/common';
export declare const IMAGE_MAX_BYTES: number;
export declare const IMAGE_MIN_WIDTH: number;
export declare const IMAGE_MIN_HEIGHT: number;
export declare const UPLOADS_ROOT_ABS: string;
export declare const IMAGES_DIR_ABS: string;
export declare const IMAGES_SERVE_ROOT = "/uploads/images";
export declare function toWebPathImages(filename: string): string;
export declare function toAbsPathImages(filename: string): string;
export declare const GENERIC_DIR_ABS: string;
export declare const GENERIC_SERVE_ROOT = "/uploads/files";
export declare function toWebPathFiles(filename: string): string;
export declare function toAbsPathFiles(filename: string): string;
export declare function imageOptionalPipe(maxBytes?: number): ParseFilePipe;
export declare class MulterExceptionFilter implements ExceptionFilter {
    catch(exception: MulterError, host: ArgumentsHost): void;
}
export declare function validateAndOptimizeImageIfPossible(absPath: string): Promise<void>;
export declare const imageUploadOptions: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: any, file: any, cb: any) => any;
    limits: {
        fileSize: number;
    };
};
export declare const videoUploadOptions: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: any, file: any, cb: any) => any;
    limits: {
        fileSize: number;
    };
};
export declare const genericUploadOptions: {
    storage: import("multer").StorageEngine;
    fileFilter: (req: Express.Request, file: Express.Multer.File, cb: Function) => any;
    limits: {
        fileSize: number;
    };
};
