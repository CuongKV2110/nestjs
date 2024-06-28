"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationService = void 0;
const enum_1 = require("../../core/src/constants/enum");
const exception_1 = require("@app/core/exception");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Permission_1 = __importDefault(require("./entities/Permission"));
const PermissionGroup_1 = __importDefault(require("./entities/PermissionGroup"));
const Role_1 = __importDefault(require("./entities/Role"));
const RolePermission_1 = __importDefault(require("./entities/RolePermission"));
const UserPermission_1 = __importDefault(require("./entities/UserPermission"));
const User_1 = __importDefault(require("@app/database-type-orm/entities/User"));
const cache_1 = require("@app/cache");
let AuthorizationService = class AuthorizationService {
    constructor(dataSource, cacheService, permissionRepository, roleRepository, rolePermissionRepository, userPermissionRepository) {
        this.dataSource = dataSource;
        this.cacheService = cacheService;
        this.permissionRepository = permissionRepository;
        this.roleRepository = roleRepository;
        this.rolePermissionRepository = rolePermissionRepository;
        this.userPermissionRepository = userPermissionRepository;
    }
    async getListPermissions() {
        return await this.permissionRepository.find();
    }
    async getListRole() {
        return await this.roleRepository.find({
            where: {
                isVisible: enum_1.CommonStatus.ACTIVE,
            },
        });
    }
    async addRole(name) {
        return await this.roleRepository.save({ name });
    }
    async updateRole(roleId, name) {
        return await this.roleRepository.update(roleId, { name });
    }
    async hiddenRole(roleId) {
        return await this.roleRepository.update(roleId, {
            isVisible: enum_1.CommonStatus.INACTIVE,
        });
    }
    async getPermissionByGroup(permissions) {
        const getListPermissions = await this.permissionRepository
            .createQueryBuilder('permission')
            .select([
            'permission.id id',
            'permission.name name',
            'permission.permissionGroupId permissionGroupId',
            'permissionGroup.name groupName',
        ])
            .innerJoin(PermissionGroup_1.default, 'permissionGroup', 'permission.permissionGroupId = permissionGroup.id')
            .getRawMany();
        const listPermissionAdvance = getListPermissions.map((item) => {
            item.hasPermission = permissions.includes(item.id) ? 1 : 0;
            return item;
        });
        return this.convertToObject(listPermissionAdvance, 'groupName');
    }
    async getRolePermissions(roleId) {
        const role = await this.roleRepository.findOne({ where: { id: roleId } });
        if (!role)
            throw new exception_1.Exception(enum_1.ErrorCode.Not_Found, 'Not found role permission');
        const getRolePermissions = await this.rolePermissionRepository.find({
            where: { roleId: roleId },
        });
        const rolePermissions = getRolePermissions.map((item) => item.permissionId);
        return this.getPermissionByGroup(rolePermissions);
    }
    async updateRolePermissions(roleId, permissions, changeUserPermission) {
        const KEY_CACHE_USER_PERMISSIONS = this.cacheService.createKeyCacheData('KEY_CACHE_USER_PERMISSIONS');
        await this.dataSource.transaction(async (transaction) => {
            const RolePermissionRepository = transaction.getRepository(RolePermission_1.default);
            const roleRepository = transaction.getRepository(Role_1.default);
            const userPermissionRepository = transaction.getRepository(UserPermission_1.default);
            const userRepository = transaction.getRepository(User_1.default);
            const role = await roleRepository.findOne({ where: { id: roleId } });
            if (!role)
                throw new exception_1.Exception(enum_1.ErrorCode.Not_Found);
            await RolePermissionRepository.delete({
                roleId: roleId,
                permissionId: (0, typeorm_2.Not)((0, typeorm_2.In)([...permissions, -1])),
            });
            const dataUpdateRolePermissions = permissions.map((item) => {
                return { roleId, permissionId: item };
            });
            await RolePermissionRepository.save(dataUpdateRolePermissions);
            if (changeUserPermission) {
                const users = await userRepository.find({
                    where: { roleId },
                    select: ['id', 'roleId'],
                });
                const userIds = users.map((item) => item.id);
                await userPermissionRepository.delete({
                    userId: (0, typeorm_2.In)([...userIds, -1]),
                    permissionId: (0, typeorm_2.Not)((0, typeorm_2.In)([...permissions, -1])),
                });
                const dataUserPermission = users.reduce((acc, cur) => {
                    const userPermissions = permissions.map((item) => ({
                        userId: cur.id,
                        permissionId: item,
                    }));
                    acc.push(...userPermissions);
                    return acc;
                }, []);
                await userPermissionRepository.save(dataUserPermission);
                const keyCache = `${KEY_CACHE_USER_PERMISSIONS}:*`;
                await this.cacheService.del(keyCache);
            }
        });
        return;
    }
    async getUserPermissionsAndGroup(userId) {
        const userPermission = await this.userPermissionRepository.find({
            where: { userId: userId },
        });
        const permissions = userPermission.map((permission) => permission.permissionId);
        return this.getPermissionByGroup(permissions);
    }
    async getUserPermissions(userId, userPermissionRepository) {
        const keyCache = this.cacheService.createKeyCacheData(`KEY_CACHE_USER_PERMISSIONS_${userId}`);
        const cacheData = (await this.cacheService.get(keyCache));
        if (cacheData)
            return JSON.parse(cacheData);
        userPermissionRepository =
            userPermissionRepository !== null && userPermissionRepository !== void 0 ? userPermissionRepository : this.userPermissionRepository;
        const userPermission = await userPermissionRepository.find({
            where: { userId: userId },
        });
        const permissionIds = userPermission.map((item) => item.permissionId);
        await this.cacheService.set(keyCache, JSON.stringify(permissionIds));
        return permissionIds;
    }
    async updateUserPermissions(userId, permissions) {
        await this.dataSource.transaction(async (transaction) => {
            const KEY_CACHE_USER_PERMISSIONS = this.cacheService.createKeyCacheData('KEY_CACHE_USER_PERMISSIONS');
            const userPermissionRepository = transaction.getRepository(UserPermission_1.default);
            await userPermissionRepository.delete({
                userId,
                permissionId: (0, typeorm_2.Not)((0, typeorm_2.In)([...permissions, -1])),
            });
            const data = permissions.map((permissionId) => ({
                userId,
                permissionId,
            }));
            await userPermissionRepository.save(data);
            const keyCache = `${KEY_CACHE_USER_PERMISSIONS}:${userId}`;
            await this.cacheService.del(keyCache);
        });
        return;
    }
    async getRolePermissionIds(roleId) {
        const role = await this.roleRepository.findOne({ where: { id: roleId } });
        if (!role)
            throw new exception_1.Exception(enum_1.ErrorCode.Not_Found);
        const rolePermissions = await this.rolePermissionRepository.find({
            where: { roleId: roleId },
        });
        const permissions = rolePermissions.map((item) => item.permissionId);
        return permissions;
    }
    convertToObject(data, key) {
        const result = {};
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const keyEl = element[key];
            if (!result[keyEl]) {
                result[keyEl] = [];
            }
            delete element[key];
            result[keyEl].push(element);
        }
        return result;
    }
};
exports.AuthorizationService = AuthorizationService;
exports.AuthorizationService = AuthorizationService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(Permission_1.default)),
    __param(3, (0, typeorm_1.InjectRepository)(Role_1.default)),
    __param(4, (0, typeorm_1.InjectRepository)(RolePermission_1.default)),
    __param(5, (0, typeorm_1.InjectRepository)(UserPermission_1.default)),
    __metadata("design:paramtypes", [typeorm_2.DataSource, typeof (_a = typeof cache_1.GlobalCacheService !== "undefined" && cache_1.GlobalCacheService) === "function" ? _a : Object, typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AuthorizationService);
//# sourceMappingURL=authorization.service.js.map