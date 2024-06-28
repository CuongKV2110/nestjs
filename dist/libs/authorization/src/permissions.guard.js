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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsGuard = void 0;
const enum_1 = require("../../../libs/core/src/constants/enum");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const permissions_decorator_1 = require("./permissions.decorator");
const jwt_authentication_decorator_1 = require("libs/jwt-authentication/src/jwt-authentication.decorator");
const exception_1 = require("../../core/src/exception");
const authorization_service_1 = require("./authorization.service");
let PermissionsGuard = class PermissionsGuard {
    constructor(reflector, authorizationService) {
        this.reflector = reflector;
        this.authorizationService = authorizationService;
    }
    async canActivate(context) {
        var _a;
        const isPublic = this.reflector.getAllAndOverride(jwt_authentication_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic)
            return true;
        const permissions = this.reflector.getAllAndOverride(permissions_decorator_1.PERMISSIONS_KEY, [context.getHandler(), context.getClass()]);
        if (!permissions)
            return true;
        const request = (_a = context === null || context === void 0 ? void 0 : context.switchToHttp()) === null || _a === void 0 ? void 0 : _a.getRequest();
        const user = request.payload;
        if (user.userType === enum_1.UserType.SUPER_ADMIN)
            return true;
        const userPermissions = await this.authorizationService.getUserPermissions(user.id);
        if (!userPermissions.some((permission) => permissions.includes(permission))) {
            throw new exception_1.Forbidden("You don't have permission to access this API!");
        }
        return true;
    }
};
exports.PermissionsGuard = PermissionsGuard;
exports.PermissionsGuard = PermissionsGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        authorization_service_1.AuthorizationService])
], PermissionsGuard);
//# sourceMappingURL=permissions.guard.js.map