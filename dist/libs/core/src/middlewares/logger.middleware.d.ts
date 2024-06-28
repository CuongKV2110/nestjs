import { UtilsService } from '@app/helper/utils/utils.service';
import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class LoggerReqMiddleware implements NestMiddleware {
    private readonly utilsService;
    private readonly logger;
    constructor(utilsService: UtilsService);
    use(req: Request, res: Response, next: NextFunction): void;
}
