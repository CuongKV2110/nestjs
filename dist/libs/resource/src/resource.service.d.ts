import { DataSource, Repository } from 'typeorm';
import Resource from './entities/Resource';
import { ResourceType } from '@app/core/constants/enum';
import { GlobalCacheService } from '@app/cache';
import { LibraryConfigService } from 'libs/config/src/config.service';
export declare class ResourceService {
    private configService;
    private dataSource;
    private cacheManager;
    private resourceRepository;
    constructor(configService: LibraryConfigService, dataSource: DataSource, cacheManager: GlobalCacheService, resourceRepository: Repository<Resource>);
    getResourceInfo(): Promise<any>;
    getListResource(params: IListResource): Promise<any>;
    createResource(userId: number, params: IAddResource): Promise<IAddResource & Resource>;
    updateResource(resourceId: number, params: IUpdateResource): Promise<void>;
    updateStatusResource(resourceId: number, params: IUpdateStatusResource): Promise<void>;
    getDetailResource(resourceId: number): Promise<Resource>;
    createResourceSingle(params: ICreateResourceSingle): Promise<void>;
    getResourceByType(type: number): Promise<Resource[]>;
}
export interface IListResource {
    take: number;
    pageIndex: number;
    start: number;
    skip: number;
    sort: any;
    keyword: string;
    status: number;
    type: ResourceType;
}
export interface IAddResource {
    name: string;
    type: ResourceType;
    createdBy: number;
}
export interface IUpdateResource {
    name: string;
}
export interface IUpdateStatusResource {
    status: number;
}
export interface ICreateResourceSingle {
    status: number;
    order: number;
    type: ResourceType;
    name: string;
    value: string;
    createdBy: number;
}
