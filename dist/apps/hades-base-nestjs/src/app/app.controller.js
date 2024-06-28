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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const cache_1 = require("@app/cache");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_authentication_decorator_1 = require("libs/jwt-authentication/src/jwt-authentication.decorator");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService, cacheService) {
        this.appService = appService;
        this.cacheService = cacheService;
    }
    async getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('Hello'),
    (0, jwt_authentication_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)('App-Controller'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService, typeof (_a = typeof cache_1.GlobalCacheService !== "undefined" && cache_1.GlobalCacheService) === "function" ? _a : Object])
], AppController);
//# sourceMappingURL=app.controller.js.map