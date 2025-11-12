"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericUploadOptions = exports.videoUploadOptions = exports.imageUploadOptions = exports.MulterExceptionFilter = exports.GENERIC_SERVE_ROOT = exports.GENERIC_DIR_ABS = exports.IMAGES_SERVE_ROOT = exports.IMAGES_DIR_ABS = exports.UPLOADS_ROOT_ABS = exports.IMAGE_MIN_HEIGHT = exports.IMAGE_MIN_WIDTH = exports.IMAGE_MAX_BYTES = void 0;
exports.toWebPathImages = toWebPathImages;
exports.toAbsPathImages = toAbsPathImages;
exports.toWebPathFiles = toWebPathFiles;
exports.toAbsPathFiles = toAbsPathFiles;
exports.imageOptionalPipe = imageOptionalPipe;
exports.validateAndOptimizeImageIfPossible = validateAndOptimizeImageIfPossible;
const multer_1 = require("multer");
const path_1 = require("path");
const fs_1 = require("fs");
const common_1 = require("@nestjs/common");
exports.IMAGE_MAX_BYTES = +(process.env.UPLOAD_IMAGE_MAX_BYTES ?? 10 * 1024 * 1024);
exports.IMAGE_MIN_WIDTH = +(process.env.UPLOAD_IMAGE_MIN_W ?? 400);
exports.IMAGE_MIN_HEIGHT = +(process.env.UPLOAD_IMAGE_MIN_H ?? 400);
exports.UPLOADS_ROOT_ABS = (0, path_1.join)(process.cwd(), 'uploads');
exports.IMAGES_DIR_ABS = (0, path_1.join)(exports.UPLOADS_ROOT_ABS, 'images');
exports.IMAGES_SERVE_ROOT = '/uploads/images';
function toWebPathImages(filename) {
    return `${exports.IMAGES_SERVE_ROOT}/${filename}`;
}
function toAbsPathImages(filename) {
    return (0, path_1.join)(exports.IMAGES_DIR_ABS, filename);
}
exports.GENERIC_DIR_ABS = (0, path_1.join)(exports.UPLOADS_ROOT_ABS, 'files');
exports.GENERIC_SERVE_ROOT = '/uploads/files';
function toWebPathFiles(filename) {
    return `${exports.GENERIC_SERVE_ROOT}/${filename}`;
}
function toAbsPathFiles(filename) {
    return (0, path_1.join)(exports.GENERIC_DIR_ABS, filename);
}
function imageOptionalPipe(maxBytes = exports.IMAGE_MAX_BYTES) {
    return new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({
                maxSize: maxBytes,
                message: `File too large. Max ${(maxBytes / (1024 * 1024)).toFixed(0)}MB.`,
            }),
            new common_1.FileTypeValidator({
                fileType: /^image\/(jpeg|png|webp|gif|jpg|svg\+xml)$/,
            }),
        ],
        fileIsRequired: false,
    });
}
let MulterExceptionFilter = class MulterExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        let message = exception.message || 'Upload error.';
        if (exception.code === 'LIMIT_FILE_SIZE') {
            message = `File too large. Max ${(exports.IMAGE_MAX_BYTES / (1024 * 1024)).toFixed(0)}MB.`;
        }
        else if (exception.code === 'LIMIT_UNEXPECTED_FILE') {
            message = 'Unexpected file field.';
        }
        res.status(400).json({ statusCode: 400, error: 'Bad Request', message });
    }
};
exports.MulterExceptionFilter = MulterExceptionFilter;
exports.MulterExceptionFilter = MulterExceptionFilter = __decorate([
    (0, common_1.Catch)(multer_1.MulterError)
], MulterExceptionFilter);
async function validateAndOptimizeImageIfPossible(absPath) {
    let sharpModule;
    try {
        sharpModule = (await Promise.resolve().then(() => require('sharp'))).default;
    }
    catch {
        return;
    }
    const sharp = sharpModule;
    const ext = (0, path_1.extname)(absPath).toLowerCase();
    if (ext === '.gif' || ext === '.svg')
        return;
    try {
        const img = sharp(absPath);
        const meta = await img.metadata();
        if (!meta.width || !meta.height || meta.width < exports.IMAGE_MIN_WIDTH || meta.height < exports.IMAGE_MIN_HEIGHT) {
            try {
                (0, fs_1.unlinkSync)(absPath);
            }
            catch { }
            throw new common_1.BadRequestException(`Image too small. Minimum ${exports.IMAGE_MIN_WIDTH}x${exports.IMAGE_MIN_HEIGHT}px.`);
        }
        const width = Math.min(meta.width, 1600);
        let pipeline = img.rotate().resize({ width, withoutEnlargement: true });
        if (ext === '.png') {
            await pipeline.png({ compressionLevel: 8 }).toFile(absPath);
        }
        else if (ext === '.jpg' || ext === '.jpeg') {
            await pipeline.jpeg({ quality: 82 }).toFile(absPath);
        }
        else if (ext === '.webp') {
            await pipeline.webp({ quality: 82 }).toFile(absPath);
        }
        else {
            await pipeline.toFile(absPath);
        }
    }
    catch (e) {
        if (e instanceof common_1.BadRequestException)
            throw e;
        try {
            (0, fs_1.unlinkSync)(absPath);
        }
        catch { }
        throw new common_1.BadRequestException('Could not process the image. Please upload a valid image file.');
    }
}
function ensureDir(dir) {
    if (!(0, fs_1.existsSync)(dir))
        (0, fs_1.mkdirSync)(dir, { recursive: true });
}
function randomName(base, original) {
    const name = base.replace(/\.[^/.]+$/, '');
    const extension = (0, path_1.extname)(original);
    const rand = Array(16)
        .fill(null)
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join('');
    return `${name}-${rand}${extension}`;
}
exports.imageUploadOptions = {
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const uploadDir = (0, path_1.join)(process.cwd(), 'uploads', 'images');
            ensureDir(uploadDir);
            cb(null, uploadDir);
        },
        filename: (req, file, cb) => cb(null, randomName(file.originalname, file.originalname)),
    }),
    fileFilter: (req, file, cb) => {
        if (/^image\/(jpeg|png|jpg|gif|webp|svg\+xml)$/.test(file.mimetype))
            return cb(null, true);
        cb(new Error('Unsupported image type'), false);
    },
    limits: { fileSize: 10 * 1024 * 1024 },
};
exports.videoUploadOptions = {
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const uploadDir = (0, path_1.join)(process.cwd(), 'uploads', 'videos');
            ensureDir(uploadDir);
            cb(null, uploadDir);
        },
        filename: (req, file, cb) => cb(null, randomName(file.originalname, file.originalname)),
    }),
    fileFilter: (req, file, cb) => {
        if (/^video\/(mp4|quicktime|x-matroska|webm|x-msvideo)$/.test(file.mimetype))
            return cb(null, true);
        cb(new Error('Unsupported video type'), false);
    },
    limits: { fileSize: 200 * 1024 * 1024 },
};
exports.genericUploadOptions = {
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            ensureDir(exports.GENERIC_DIR_ABS);
            cb(null, exports.GENERIC_DIR_ABS);
        },
        filename: (req, file, cb) => cb(null, randomName(file.originalname, file.originalname)),
    }),
    fileFilter: (req, file, cb) => {
        const allowedTypes = [
            /^image\/(jpeg|png|jpg|gif|webp|svg\+xml)$/,
            /^application\/pdf$/,
            /^application\/msword$/,
            /^application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document$/,
        ];
        if (allowedTypes.some((regex) => regex.test(file.mimetype)))
            return cb(null, true);
        cb(new Error('Unsupported file type'), false);
    },
    limits: { fileSize: 20 * 1024 * 1024 },
};
//# sourceMappingURL=upload.config.js.map