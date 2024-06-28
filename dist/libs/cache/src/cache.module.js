"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalCacheModule = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const cache_service_1 = require("./cache.service");
const config_1 = require("@nestjs/config");
let GlobalCacheModule = class GlobalCacheModule {
};
exports.GlobalCacheModule = GlobalCacheModule;
exports.GlobalCacheModule = GlobalCacheModule = __decorate([
    (0, common_2.Module)({
        imports: [
            common_1.CacheModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => {
                    return {};
                },
                inject: [config_1.ConfigService],
            }),
        ],
        exports: [cache_service_1.GlobalCacheService],
        providers: [cache_service_1.GlobalCacheService],
    })
], GlobalCacheModule);
//# sourceMappingURL=cache.module.js.map