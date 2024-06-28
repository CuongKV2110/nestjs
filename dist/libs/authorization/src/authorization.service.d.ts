import { Permissions } from '../../core/src/constants/enum';
import { DataSource, Repository } from 'typeorm';
import Permission from './entities/Permission';
import Role from './entities/Role';
import RolePermission from './entities/RolePermission';
import UserPermission from './entities/UserPermission';
import { GlobalCacheService } from '@app/cache';
export declare class AuthorizationService {
    private readonly dataSource;
    private readonly cacheService;
    private readonly permissionRepository;
    private readonly roleRepository;
    private readonly rolePermissionRepository;
    private readonly userPermissionRepository;
    constructor(dataSource: DataSource, cacheService: GlobalCacheService, permissionRepository: Repository<Permission>, roleRepository: Repository<Role>, rolePermissionRepository: Repository<RolePermission>, userPermissionRepository: Repository<UserPermission>);
    getListPermissions(): Promise<Permission[]>;
    getListRole(): Promise<Role[]>;
    addRole(name: string): Promise<{
        name: string;
    } & Role>;
    updateRole(roleId: number, name: string): Promise<import("typeorm").UpdateResult>;
    hiddenRole(roleId: number): Promise<import("typeorm").UpdateResult>;
    getPermissionByGroup(permissions: Array<number>): Promise<{
        [key: string]: any[];
    }>;
    getRolePermissions(roleId: number): Promise<{
        [key: string]: any[];
    }>;
    updateRolePermissions(roleId: number, permissions: Array<number>, changeUserPermission: 0 | 1): Promise<void>;
    getUserPermissionsAndGroup(userId: number): Promise<{
        [key: string]: any[];
    }>;
    getUserPermissions(userId: number, userPermissionRepository?: Repository<UserPermission>): Promise<any>;
    updateUserPermissions(userId: number, permissions: Permissions[]): Promise<void>;
    getRolePermissionIds(roleId: number): Promise<number[]>;
    convertToObject(data: Array<Object>, key: string): {
        [key: string]: Array<any>;
    };
}
