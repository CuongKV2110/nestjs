import { ResourceService } from './resource.service';
export declare class ResourceController {
    private readonly resourceService;
    constructor(resourceService: ResourceService);
    getResourceInfo(): Promise<any>;
    getLisResource(query: any): Promise<any>;
    createResource(body: any, userId: number): Promise<void>;
    getDetailResource(resourceId: number): Promise<import("./entities/Resource").default>;
    updateResource(body: any, resourceId: number): Promise<void>;
    updateStatusResource(body: any, resourceId: number): Promise<void>;
    createResourceSingle(body: any): Promise<void>;
    getResourceByType(type: number): Promise<import("./entities/Resource").default[]>;
}
