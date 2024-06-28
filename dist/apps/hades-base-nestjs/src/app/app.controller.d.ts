import { GlobalCacheService } from '@app/cache';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly cacheService;
    constructor(appService: AppService, cacheService: GlobalCacheService);
    getHello(): Promise<string>;
}
