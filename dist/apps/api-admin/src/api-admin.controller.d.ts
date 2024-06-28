import { ApiAdminService } from './api-admin.service';
export declare class ApiAdminController {
    private readonly apiAdminService;
    constructor(apiAdminService: ApiAdminService);
    getHello(): string;
}
