"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3UploadService = void 0;
const common_1 = require("@nestjs/common");
const AWS = __importStar(require("aws-sdk"));
const Sharp = __importStar(require("sharp"));
const s3_upload_module_definition_1 = require("./s3-upload.module-definition");
let S3UploadService = class S3UploadService {
    constructor(options) {
        this.options = options;
        this.S3Instance = new AWS.S3({
            secretAccessKey: options.secretAccessKey,
            accessKeyId: options.accessKeyId,
            region: options.region,
        });
    }
    async putImageToS3(image, fileName) {
        await this.S3Instance.putObject({
            ACL: 'public-read',
            Body: image.buffer,
            Bucket: this.options.bucket,
            ContentType: image.mimetype,
            Key: fileName,
        }).promise();
        if (image.originalname.search(/\.(gif|jpe?g|tiff|png|webp|bmp|svg|HEIC|blob)$/gi) !== -1) {
            await this.generateThumb(image, fileName);
            const putObjects = image['thumbs'].map((item) => {
                return this.S3Instance.putObject({
                    ACL: 'public-read',
                    Body: item.buffer,
                    Bucket: this.options.bucket,
                    ContentType: image.mimetype,
                    Key: item.fileName,
                }).promise();
            });
            await Promise.all(putObjects);
        }
    }
    async generateThumb(image, fileName) {
        const thumbs = this.options.thumbs;
        for (let thumb of thumbs) {
            const [w, h] = thumb.split('x');
            let buffer = image.buffer;
            if (w && h) {
                buffer = await Sharp(image.buffer)
                    .resize(Number(w), Number(h), {
                    withoutEnlargement: true,
                    fit: 'inside',
                })
                    .toBuffer();
                if (!image['thumbs'] || !Array.isArray(image['thumbs']))
                    image['thumbs'] = [];
                image['thumbs'].push({
                    fileName: `${w}x${h}/${fileName}`,
                    buffer,
                });
            }
        }
    }
};
exports.S3UploadService = S3UploadService;
exports.S3UploadService = S3UploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(s3_upload_module_definition_1.MODULE_OPTIONS_TOKEN)),
    __metadata("design:paramtypes", [Object])
], S3UploadService);
//# sourceMappingURL=s3-upload.service.js.map