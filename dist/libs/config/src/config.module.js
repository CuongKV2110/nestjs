"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryConfigModule = void 0;
const cache_1 = require("@app/cache");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_controller_1 = require("./config.controller");
const config_service_1 = require("./config.service");
const Config_1 = __importDefault(require("./entities/Config"));
let LibraryConfigModule = class LibraryConfigModule {
};
exports.LibraryConfigModule = LibraryConfigModule;
exports.LibraryConfigModule = LibraryConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Config_1.default]), cache_1.GlobalCacheModule],
        providers: [config_service_1.LibraryConfigService],
        exports: [config_service_1.LibraryConfigService],
        controllers: [config_controller_1.LibraryConfigController],
    })
], LibraryConfigModule);
//# sourceMappingURL=config.module.js.map