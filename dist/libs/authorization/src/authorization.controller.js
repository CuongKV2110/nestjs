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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationController = void 0;
const common_1 = require("@nestjs/common");
const authorization_service_1 = require("./authorization.service");
const permissions_decorator_1 = require("./permissions.decorator");
const enum_1 = require("../../core/src/constants/enum");
const validate_1 = require("@app/core/validate");
const authorization_schema_1 = require("./authorization.schema");
const role_dto_1 = require("./dto/role.dto");
const user_permisson_dto_1 = require("./dto/user.permisson.dto");
const admin_guard_1 = require("@app/core/guards/admin.guard");
const swagger_1 = require("@nestjs/swagger");
const validation_pipe_1 = require("@app/core/pipes/validation.pipe");
let AuthorizationController = class AuthorizationController {
    constructor(authorizationService) {
        this.authorizationService = authorizationService;
    }
    async getListPermissions() {
        const permissions = await this.authorizationService.getListPermissions();
        return permissions;
    }
    async getListRoles() {
        const roles = await this.authorizationService.getListRole();
        return roles;
    }
    async addRole(body) {
        (0, validate_1.validate)(authorization_schema_1.addRoleSchema, body);
        return await this.authorizationService.addRole(body.name);
    }
    async getRolePermissions(roleId) {
        const permissions = await this.authorizationService.getRolePermissions(roleId);
        return permissions;
    }
    async updateRolePermissions(body, roleId) {
        const { permissions, changeUserPermission } = body;
        (0, validate_1.validate)(authorization_schema_1.updateRolePermissionsSchema, body);
        await this.authorizationService.updateRolePermissions(roleId, permissions, changeUserPermission);
        return;
    }
    async getUserPermissions(userId) {
        const permissions = await this.authorizationService.getUserPermissionsAndGroup(userId);
        return permissions;
    }
    async updateUserPermissions(body, userId) {
        await this.authorizationService.updateUserPermissions(userId, body.permissions);
        return;
    }
    async updateRole(body, roleId) {
        (0, validate_1.validate)(authorization_schema_1.updateRoleSchema, body);
        return await this.authorizationService.updateRole(roleId, body.name);
    }
    async hiddenRole(roleId) {
        return await this.authorizationService.hiddenRole(roleId);
    }
};
exports.AuthorizationController = AuthorizationController;
__decorate([
    (0, common_1.Get)('/permission'),
    (0, permissions_decorator_1.RequirePermissions)(enum_1.Permissions.PERMISSION_MANAGEMENT),
    (0, swagger_1.ApiResponse)(authorization_schema_1.listPermissionExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "getListPermissions", null);
__decorate([
    (0, common_1.Get)('/role'),
    (0, permissions_decorator_1.RequirePermissions)(enum_1.Permissions.PERMISSION_MANAGEMENT),
    (0, swagger_1.ApiResponse)(authorization_schema_1.listRoleExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "getListRoles", null);
__decorate([
    (0, common_1.Post)('/role'),
    (0, permissions_decorator_1.RequirePermissions)(enum_1.Permissions.PERMISSION_MANAGEMENT),
    (0, swagger_1.ApiBody)(authorization_schema_1.addRoleApiBody),
    (0, swagger_1.ApiResponse)(authorization_schema_1.addRoleExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.AddRoleDto]),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "addRole", null);
__decorate([
    (0, common_1.Get)('/role-permission/:roleId'),
    (0, swagger_1.ApiResponse)(authorization_schema_1.listRolePermissionExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, permissions_decorator_1.RequirePermissions)(enum_1.Permissions.PERMISSION_MANAGEMENT),
    __param(0, (0, common_1.Param)('roleId', validation_pipe_1.ToIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "getRolePermissions", null);
__decorate([
    (0, common_1.Put)('/role-permission/:roleId'),
    (0, permissions_decorator_1.RequirePermissions)(enum_1.Permissions.PERMISSION_MANAGEMENT),
    (0, swagger_1.ApiBody)(authorization_schema_1.updateRolePermissionApiBody),
    (0, swagger_1.ApiResponse)(authorization_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('roleId', validation_pipe_1.ToIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.UpdateRolePermissionDto, Number]),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "updateRolePermissions", null);
__decorate([
    (0, common_1.Get)('/user/:userId'),
    (0, permissions_decorator_1.RequirePermissions)(enum_1.Permissions.PERMISSION_MANAGEMENT),
    (0, swagger_1.ApiResponse)(authorization_schema_1.listUserPermissionExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('userId', validation_pipe_1.ToIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "getUserPermissions", null);
__decorate([
    (0, common_1.Put)('/user/:userId'),
    (0, permissions_decorator_1.RequirePermissions)(enum_1.Permissions.PERMISSION_MANAGEMENT),
    (0, swagger_1.ApiBody)(authorization_schema_1.updateUserPermissionApiBody),
    (0, swagger_1.ApiResponse)(authorization_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('userId', validation_pipe_1.ToIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_permisson_dto_1.UpdateUserPermissions, Number]),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "updateUserPermissions", null);
__decorate([
    (0, common_1.Put)('/role/:roleId'),
    (0, permissions_decorator_1.RequirePermissions)(enum_1.Permissions.PERMISSION_MANAGEMENT),
    (0, swagger_1.ApiBody)(authorization_schema_1.updateRoleApiBody),
    (0, swagger_1.ApiResponse)(authorization_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('roleId', validation_pipe_1.ToIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.UpdateRoleDto, Number]),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "updateRole", null);
__decorate([
    (0, common_1.Put)('/hidden-role/:roleId'),
    (0, permissions_decorator_1.RequirePermissions)(enum_1.Permissions.PERMISSION_MANAGEMENT),
    (0, swagger_1.ApiResponse)(authorization_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('roleId', validation_pipe_1.ToIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorizationController.prototype, "hiddenRole", null);
exports.AuthorizationController = AuthorizationController = __decorate([
    (0, swagger_1.ApiTags)('Authorization'),
    (0, common_1.Controller)('cms/authorization'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    __metadata("design:paramtypes", [authorization_service_1.AuthorizationService])
], AuthorizationController);
//# sourceMappingURL=authorization.controller.js.map