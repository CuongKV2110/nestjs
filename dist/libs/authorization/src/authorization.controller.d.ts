import { AuthorizationService } from './authorization.service';
import { AddRoleDto, UpdateRoleDto, UpdateRolePermissionDto } from './dto/role.dto';
import { UpdateUserPermissions } from './dto/user.permisson.dto';
export declare class AuthorizationController {
    private authorizationService;
    constructor(authorizationService: AuthorizationService);
    getListPermissions(): Promise<import("./entities/Permission").default[]>;
    getListRoles(): Promise<import("./entities/Role").default[]>;
    addRole(body: AddRoleDto): Promise<{
        name: string;
    } & import("./entities/Role").default>;
    getRolePermissions(roleId: number): Promise<{
        [key: string]: any[];
    }>;
    updateRolePermissions(body: UpdateRolePermissionDto, roleId: number): Promise<void>;
    getUserPermissions(userId: number): Promise<{
        [key: string]: any[];
    }>;
    updateUserPermissions(body: UpdateUserPermissions, userId: number): Promise<void>;
    updateRole(body: UpdateRoleDto, roleId: number): Promise<import("typeorm").UpdateResult>;
    hiddenRole(roleId: number): Promise<import("typeorm").UpdateResult>;
}
