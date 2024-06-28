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
exports.MemberGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const enum_1 = require("../constants/enum");
const public_decorator_1 = require("../decorators/public.decorator");
let MemberGuard = class MemberGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        var _a;
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic)
            return true;
        const request = (_a = context === null || context === void 0 ? void 0 : context.switchToHttp()) === null || _a === void 0 ? void 0 : _a.getRequest();
        return request.user.userType === enum_1.UserType.CLIENT;
    }
};
exports.MemberGuard = MemberGuard;
exports.MemberGuard = MemberGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], MemberGuard);
//# sourceMappingURL=client.guard.js.map