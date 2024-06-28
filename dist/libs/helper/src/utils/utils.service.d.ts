import { HttpException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class UtilsService {
    private readonly configService;
    constructor(configService: ConfigService);
    format(template: string, ...args: Array<{
        [k: string]: any;
    } | string>): string;
    hideImportantInformation(data: any, keys: string[]): any;
    deepClone(object: Object): Object;
    omitObject(object: Object, omits: string[]): Object;
    pickObject(object: Object, picks: string[]): Object;
    formatErrorObject(exception: HttpException | any): Promise<any>;
}
