import * as AWS from 'aws-sdk';
import { S3uploadOptions } from './s3-upload.interface';
import { Express } from '../../core/src/types/Express';
export declare class S3UploadService {
    options: S3uploadOptions;
    S3Instance: AWS.S3;
    constructor(options: S3uploadOptions);
    putImageToS3(image: Express.Multer.File | any, fileName: string): Promise<void>;
    generateThumb(image: Express.Multer.File | any, fileName: string): Promise<void>;
}
