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
exports.JwtAuthenticationGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_authentication_service_1 = require("./jwt-authentication.service");
const core_1 = require("@nestjs/core");
const public_api_decorator_1 = require("./public-api.decorator");
let JwtAuthenticationGuard = class JwtAuthenticationGuard {
    constructor(reflector, jwtAuthenticationService) {
        this.reflector = reflector;
        this.jwtAuthenticationService = jwtAuthenticationService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const isPublic = this.reflector.getAllAndOverride(public_api_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        const user = this.jwtAuthenticationService.validateRequest(request);
        return user;
    }
};
exports.JwtAuthenticationGuard = JwtAuthenticationGuard;
exports.JwtAuthenticationGuard = JwtAuthenticationGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(jwt_authentication_service_1.JwtAuthenticationService)),
    __metadata("design:paramtypes", [core_1.Reflector,
        jwt_authentication_service_1.JwtAuthenticationService])
], JwtAuthenticationGuard);
//# sourceMappingURL=jwt-authentication.guard.js.map