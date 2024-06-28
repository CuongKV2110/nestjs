import { UtilsService } from '@app/helper/utils/utils.service';
import { ArgumentsHost, ExceptionFilter, HttpException, PlainLiteralObject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { ErrorValues } from 'libs/constants/enum';
export interface IRequest extends Request {
    payload: PlainLiteralObject | any;
}
export interface IFormatErrorObject {
    success: boolean;
    statusCode: number;
    errorValue: ErrorValues;
    errorCode?: string;
    devMessage?: string;
    payload?: any;
    errorMessage?: string;
}
export declare class AllExceptionsFilter implements ExceptionFilter {
    private readonly utilsService;
    private readonly configService;
    private readonly logger;
    private readonly nodeEnv;
    constructor(utilsService: UtilsService, configService: ConfigService);
    catch(exception: HttpException, host: ArgumentsHost): Promise<void>;
}
