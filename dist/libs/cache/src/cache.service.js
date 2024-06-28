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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalCacheService = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("cache-manager");
const config_1 = require("@nestjs/config");
let GlobalCacheService = class GlobalCacheService {
    constructor(cacheManager, configService) {
        this.cacheManager = cacheManager;
        this.configService = configService;
    }
    async reset() {
        await this.cacheManager.reset();
    }
    createKeyCacheData(keyCache) {
        const nodeEnv = this.configService.get('nodeEnv');
        return `cache${nodeEnv}:${keyCache}`;
    }
    async set(keyCache, data, ttl) {
        return await this.cacheManager.set(keyCache, data, { ttl: ttl });
    }
    async get(keyCache) {
        return await this.cacheManager.get(keyCache);
    }
    async mget(keyCache) {
        return await this.cacheManager.mget(...keyCache);
    }
    async mset(data) {
        return await this.cacheManager.mset(...data);
    }
    async del(keyCache) {
        return await this.cacheManager.del(keyCache);
    }
};
exports.GlobalCacheService = GlobalCacheService;
exports.GlobalCacheService = GlobalCacheService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeof (_a = typeof cache_manager_1.Cache !== "undefined" && cache_manager_1.Cache) === "function" ? _a : Object, config_1.ConfigService])
], GlobalCacheService);
//# sourceMappingURL=cache.service.js.map