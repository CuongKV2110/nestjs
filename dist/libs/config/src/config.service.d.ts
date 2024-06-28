import { GlobalCacheService } from '@app/cache';
import { EntityManager, Repository } from 'typeorm';
import Config from './entities/Config';
interface ISearchConfigParams {
    keyword?: string;
}
export declare class LibraryConfigService {
    private configRepository;
    private cacheManager;
    constructor(configRepository: Repository<Config>, cacheManager: GlobalCacheService);
    getListConfig(params: ISearchConfigParams): Promise<Config[]>;
    updateConfig(key: string, params: {
        name: string;
        order: number;
    }): Promise<void>;
    getDetailConfig(key: string): Promise<Config>;
    updateVersionConfig(transaction: EntityManager, key: string): Promise<void>;
    getConfigInfo(): Promise<any>;
}
export {};
