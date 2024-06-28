import { ExceptionFilter, HttpException } from '@nestjs/common';
import { ArgumentsHost } from '@nestjs/common';
import { ErrorCode } from '../constants/enum';
export declare class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger;
    catch(exception: HttpException, host: ArgumentsHost): void;
}
interface IFormatErrorObject {
    success: boolean;
    statusCode: number;
    errorCode: string;
    errorMessage?: string;
    devMessage?: string;
    payload?: unknown;
}
export declare function formatErrorObject(exception: HttpException | any): IFormatErrorObject | {
    success: boolean;
    statusCode: any;
    errorCode: ErrorCode;
    errorMessage: any;
};
export {};
