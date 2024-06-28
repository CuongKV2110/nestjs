import { LibraryConfigService } from './config.service';
export declare class LibraryConfigController {
    private readonly configService;
    constructor(configService: LibraryConfigService);
    getConfigInfo(): Promise<any>;
    getList(query: any): Promise<import("./entities/Config").default[]>;
    getDetailConfig(key: string): Promise<import("./entities/Config").default>;
    updateConfig(body: any, key: string): Promise<void>;
}
