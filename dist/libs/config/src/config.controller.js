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
exports.LibraryConfigController = void 0;
const enum_1 = require("@app/core/constants/enum");
const exception_1 = require("@app/core/exception");
const admin_guard_1 = require("@app/core/guards/admin.guard");
const validate_1 = require("@app/core/validate");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_authentication_decorator_1 = require("libs/jwt-authentication/src/jwt-authentication.decorator");
const authorization_1 = require("y/authorization");
const config_schema_1 = require("./config.schema");
const config_service_1 = require("./config.service");
let LibraryConfigController = class LibraryConfigController {
    constructor(configService) {
        this.configService = configService;
    }
    async getConfigInfo() {
        return await this.configService.getConfigInfo();
    }
    async getList(query) {
        return await this.configService.getListConfig(query);
    }
    async getDetailConfig(key) {
        if (!key)
            throw new exception_1.Exception(enum_1.ErrorCode.Invalid_Input, 'Missing config key.');
        return await this.configService.getDetailConfig(key);
    }
    async updateConfig(body, key) {
        (0, validate_1.validate)(config_schema_1.updateConfigSchema, body);
        if (!key)
            throw enum_1.ErrorCode.Invalid_Input;
        await this.configService.updateConfig(key, body);
        return;
    }
};
exports.LibraryConfigController = LibraryConfigController;
__decorate([
    (0, common_1.Get)('/init'),
    (0, jwt_authentication_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)(config_schema_1.getConfigInfoExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LibraryConfigController.prototype, "getConfigInfo", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.CONFIG_MANAGEMENT),
    (0, swagger_1.ApiResponse)(config_schema_1.detailConfigExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LibraryConfigController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)('/:key'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.CONFIG_MANAGEMENT),
    (0, swagger_1.ApiResponse)(config_schema_1.detailConfigExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LibraryConfigController.prototype, "getDetailConfig", null);
__decorate([
    (0, common_1.Put)('/:key'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.CONFIG_MANAGEMENT),
    (0, swagger_1.ApiBody)(config_schema_1.updateConfigApiBody),
    (0, swagger_1.ApiResponse)(config_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LibraryConfigController.prototype, "updateConfig", null);
exports.LibraryConfigController = LibraryConfigController = __decorate([
    (0, swagger_1.ApiTags)('Config'),
    (0, common_1.Controller)('cms/config'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    __metadata("design:paramtypes", [config_service_1.LibraryConfigService])
], LibraryConfigController);
//# sourceMappingURL=config.controller.js.map