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
exports.ResourceController = void 0;
const enum_1 = require("@app/core/constants/enum");
const admin_guard_1 = require("@app/core/guards/admin.guard");
const validation_pipe_1 = require("@app/core/pipes/validation.pipe");
const validate_1 = require("@app/core/validate");
const utils_1 = require("@app/helpers/utils");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_authentication_decorator_1 = require("libs/jwt-authentication/src/jwt-authentication.decorator");
const authorization_1 = require("y/authorization");
const resource_schema_1 = require("./resource.schema");
const resource_service_1 = require("./resource.service");
let ResourceController = class ResourceController {
    constructor(resourceService) {
        this.resourceService = resourceService;
    }
    async getResourceInfo() {
        return await this.resourceService.getResourceInfo();
    }
    async getLisResource(query) {
        (0, utils_1.handleInputPaging)(query);
        return await this.resourceService.getListResource(query);
    }
    async createResource(body, userId) {
        (0, validate_1.validate)(resource_schema_1.addResourceSchema, body);
        await this.resourceService.createResource(userId, body);
        return;
    }
    async getDetailResource(resourceId) {
        return await this.resourceService.getDetailResource(resourceId);
    }
    async updateResource(body, resourceId) {
        (0, validate_1.validate)(resource_schema_1.updateResourceSchema, body);
        await this.resourceService.updateResource(resourceId, body);
        return;
    }
    async updateStatusResource(body, resourceId) {
        (0, validate_1.validate)(resource_schema_1.updateStatusResourceSchema, body);
        await this.resourceService.updateStatusResource(resourceId, body);
        return;
    }
    async createResourceSingle(body) {
        (0, validate_1.validate)(resource_schema_1.createResourceSingleSchema, body);
        await this.resourceService.createResourceSingle(body);
        return;
    }
    async getResourceByType(type) {
        return await this.resourceService.getResourceByType(type);
    }
};
exports.ResourceController = ResourceController;
__decorate([
    (0, common_1.Get)('/init'),
    (0, jwt_authentication_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)(resource_schema_1.getResourceInfoExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, jwt_authentication_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "getResourceInfo", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.RESOURCE_MANAGEMENT),
    (0, jwt_authentication_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)(resource_schema_1.getListResourceExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "getLisResource", null);
__decorate([
    (0, common_1.Post)('/create-resource'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.RESOURCE_MANAGEMENT),
    (0, swagger_1.ApiBody)(resource_schema_1.createResourceApiBody),
    (0, swagger_1.ApiResponse)(resource_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('userId', validation_pipe_1.ToIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "createResource", null);
__decorate([
    (0, common_1.Get)('/:resourceId'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.RESOURCE_MANAGEMENT),
    (0, swagger_1.ApiResponse)(resource_schema_1.getDetailResourceExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('resourceId', validation_pipe_1.ToIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "getDetailResource", null);
__decorate([
    (0, common_1.Put)('/:resourceId'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.RESOURCE_MANAGEMENT),
    (0, swagger_1.ApiBody)(resource_schema_1.updateResourceApiBody),
    (0, swagger_1.ApiResponse)(resource_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('resourceId', validation_pipe_1.ToIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "updateResource", null);
__decorate([
    (0, common_1.Put)('/update-status/:resourceId'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.RESOURCE_MANAGEMENT),
    (0, swagger_1.ApiBody)(resource_schema_1.updateStatusResourceApiBody),
    (0, swagger_1.ApiResponse)(resource_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('resourceId', validation_pipe_1.ToIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "updateStatusResource", null);
__decorate([
    (0, common_1.Post)('/create-resource-single'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.RESOURCE_MANAGEMENT),
    (0, swagger_1.ApiBody)(resource_schema_1.createResourceSingleApiBody),
    (0, swagger_1.ApiResponse)(resource_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "createResourceSingle", null);
__decorate([
    (0, jwt_authentication_decorator_1.Public)(),
    (0, common_1.Get)('/resource-by-type/:type'),
    (0, swagger_1.ApiResponse)(resource_schema_1.getResourceByTypeExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('type', validation_pipe_1.ToIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "getResourceByType", null);
exports.ResourceController = ResourceController = __decorate([
    (0, swagger_1.ApiTags)('Resource'),
    (0, common_1.Controller)('cms/resource'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    __metadata("design:paramtypes", [resource_service_1.ResourceService])
], ResourceController);
//# sourceMappingURL=resource.controller.js.map