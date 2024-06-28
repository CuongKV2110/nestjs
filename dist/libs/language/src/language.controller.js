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
exports.LanguageController = void 0;
const enum_1 = require("@app/core/constants/enum");
const admin_guard_1 = require("@app/core/guards/admin.guard");
const utils_1 = require("@app/helpers/utils");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_authentication_decorator_1 = require("libs/jwt-authentication/src/jwt-authentication.decorator");
const authorization_1 = require("y/authorization");
const language_schema_1 = require("./language.schema");
const language_service_1 = require("./language.service");
let LanguageController = class LanguageController {
    constructor(languageService) {
        this.languageService = languageService;
    }
    async getLanguageInfo(query) {
        query.environment = query.environment || 'APP';
        const response = await this.languageService.getFileLanguage(query);
        return response;
    }
    async getListLanguage(body) {
        const response = await this.languageService.getListLanguage(body);
        return response;
    }
    async addLanguage(body) {
        const response = await this.languageService.addLanguage(body);
        return response;
    }
    async updateLanguage(body) {
        const response = await this.languageService.updateLanguage(body);
        return response;
    }
    async getListLanguageKey(body) {
        (0, utils_1.handleInputPaging)(body);
        const result = await this.languageService.getListLanguageKey(body);
        return result;
    }
    async addLanguageKey(body) {
        const result = await this.languageService.addLanguageKey(body);
        return result;
    }
    async updateLanguageKey(body) {
        const result = await this.languageService.updateLanguageKey(body);
        return result;
    }
    async getFileLanguage(body) {
        body.environment = body.environment || 'APP';
        const result = await this.languageService.downloadFileLanguage(body);
        return result;
    }
    async uploadFileLanguage(body) {
        const result = await this.languageService.uploadLanguageFile(body);
        return result;
    }
    async getListEnvironments() {
        const result = await this.languageService.getListEnvironments();
        return result;
    }
};
exports.LanguageController = LanguageController;
__decorate([
    (0, common_1.Get)('/init'),
    (0, jwt_authentication_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)(language_schema_1.getLanguageInfoExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getLanguageInfo", null);
__decorate([
    (0, common_1.Post)('/list'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.LANGUAGE_MANAGEMENT),
    (0, swagger_1.ApiResponse)(language_schema_1.getListLanguageResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getListLanguage", null);
__decorate([
    (0, common_1.Post)('/add-language'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.LANGUAGE_MANAGEMENT),
    (0, swagger_1.ApiBody)(language_schema_1.addLanguageApiBody),
    (0, swagger_1.ApiResponse)(language_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "addLanguage", null);
__decorate([
    (0, common_1.Put)('/update-language'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.LANGUAGE_MANAGEMENT),
    (0, swagger_1.ApiBody)(language_schema_1.updateLanguageApiBody),
    (0, swagger_1.ApiResponse)(language_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "updateLanguage", null);
__decorate([
    (0, common_1.Post)('/list-language-key'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.LANGUAGE_MANAGEMENT),
    (0, swagger_1.ApiResponse)(language_schema_1.listLanguageKeyResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getListLanguageKey", null);
__decorate([
    (0, common_1.Put)('/add-language-key'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.LANGUAGE_MANAGEMENT),
    (0, swagger_1.ApiBody)(language_schema_1.addLanguageKeyApiBody),
    (0, swagger_1.ApiResponse)(language_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "addLanguageKey", null);
__decorate([
    (0, common_1.Put)('/update-language-key'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.LANGUAGE_MANAGEMENT),
    (0, swagger_1.ApiBody)(language_schema_1.updateLanguageKeyApiBody),
    (0, swagger_1.ApiResponse)(language_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "updateLanguageKey", null);
__decorate([
    (0, jwt_authentication_decorator_1.Public)(),
    (0, common_1.Post)('/get-file-language'),
    (0, swagger_1.ApiResponse)(language_schema_1.getFileLanguageExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getFileLanguage", null);
__decorate([
    (0, common_1.Post)('/upload-file-language'),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.LANGUAGE_MANAGEMENT),
    (0, swagger_1.ApiBody)(language_schema_1.updateFileLanguageApiBody),
    (0, swagger_1.ApiResponse)(language_schema_1.exampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "uploadFileLanguage", null);
__decorate([
    (0, common_1.Post)('/list-environments'),
    (0, swagger_1.ApiResponse)(language_schema_1.listEnvironmentsExampleResponse),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, authorization_1.RequirePermissions)(enum_1.Permissions.LANGUAGE_MANAGEMENT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LanguageController.prototype, "getListEnvironments", null);
exports.LanguageController = LanguageController = __decorate([
    (0, swagger_1.ApiTags)('Language'),
    (0, common_1.Controller)('cms/language'),
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    __metadata("design:paramtypes", [language_service_1.LanguageService])
], LanguageController);
//# sourceMappingURL=language.controller.js.map