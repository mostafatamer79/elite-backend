"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixedUploadOptions = void 0;
const multer_1 = require("multer");
const path_1 = require("path");
const fs_1 = require("fs");
function ensureDir(dir) {
    if (!(0, fs_1.existsSync)(dir))
        (0, fs_1.mkdirSync)(dir, { recursive: true });
}
function randName(original) {
    const ext = (0, path_1.extname)(original);
    const rand = Array(16)
        .fill(null)
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join('');
    return `${Date.now()}-${rand}${ext}`;
}
exports.mixedUploadOptions = {
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const isImg = /^image\/(jpeg|png|jpg|gif|webp|svg\+xml)$/.test(file.mimetype);
            const isVid = /^video\/(mp4|quicktime|x-matroska|webm|x-msvideo)$/.test(file.mimetype);
            const dir = (0, path_1.join)(process.cwd(), 'uploads', isImg ? 'images' : isVid ? 'videos' : 'other');
            ensureDir(dir);
            cb(null, dir);
        },
        filename: (req, file, cb) => cb(null, randName(file.originalname)),
    }),
    fileFilter: (req, file, cb) => {
        if (/^image\/(jpeg|png|jpg|gif|webp|svg\+xml)$/.test(file.mimetype) || /^video\/(mp4|quicktime|x-matroska|webm|x-msvideo)$/.test(file.mimetype))
            return cb(null, true);
        return cb(new Error('Unsupported file type'), false);
    },
    limits: {
        fileSize: 200 * 1024 * 1024,
    },
};
//# sourceMappingURL=uplaod.config.js.map