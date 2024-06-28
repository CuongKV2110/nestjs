import { Cache } from 'cache-manager';
import { ConfigService } from '@nestjs/config';
export declare class GlobalCacheService {
    private readonly cacheManager;
    private readonly configService;
    constructor(cacheManager: Cache, configService: ConfigService);
    reset(): Promise<void>;
    createKeyCacheData(keyCache: string): string;
    set(keyCache: string, data: any, ttl?: number): Promise<any>;
    get(keyCache: string): Promise<any>;
    mget(keyCache: string[]): Promise<any>;
    mset(data: any[]): Promise<any>;
    del(keyCache: string): Promise<any>;
}
