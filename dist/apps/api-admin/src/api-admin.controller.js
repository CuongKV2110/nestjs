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
exports.ApiAdminController = void 0;
const common_1 = require("@nestjs/common");
const api_admin_service_1 = require("./api-admin.service");
let ApiAdminController = class ApiAdminController {
    constructor(apiAdminService) {
        this.apiAdminService = apiAdminService;
    }
    getHello() {
        return this.apiAdminService.getHello();
    }
};
exports.ApiAdminController = ApiAdminController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ApiAdminController.prototype, "getHello", null);
exports.ApiAdminController = ApiAdminController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [api_admin_service_1.ApiAdminService])
], ApiAdminController);
//# sourceMappingURL=api-admin.controller.js.map