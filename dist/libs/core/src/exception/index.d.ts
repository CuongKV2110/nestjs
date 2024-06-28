import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorValues } from '../../../constants/enum';
export declare class CustomExceptionFactory extends HttpException {
    constructor(errorValue: ErrorValues, devMessage?: string | any, statusCode?: HttpStatus, payload?: any);
}
export declare class Exception extends CustomExceptionFactory {
    constructor(errorValue: ErrorValues, devMessage?: string | any, payload?: any, statusCode?: HttpStatus);
}
export declare class Forbidden extends CustomExceptionFactory {
    constructor(devMessage?: string | any, payload?: any);
}
export declare class Unauthorized extends CustomExceptionFactory {
    constructor(devMessage?: string | any, payload?: any);
}
export declare class UnprocessableEntity extends CustomExceptionFactory {
    constructor(devMessage?: string | any, payload?: any);
}
