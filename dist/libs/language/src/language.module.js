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
exports.LanguageModule = void 0;
const cache_1 = require("@app/cache");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const src_1 = require("libs/config/src");
const Language_1 = __importDefault(require("./entities/Language"));
const LanguageEnv_1 = __importDefault(require("./entities/LanguageEnv"));
const LanguageKey_1 = __importDefault(require("./entities/LanguageKey"));
const LanguageTranslation_1 = __importDefault(require("./entities/LanguageTranslation"));
const language_controller_1 = require("./language.controller");
const language_service_1 = require("./language.service");
let LanguageModule = class LanguageModule {
};
exports.LanguageModule = LanguageModule;
exports.LanguageModule = LanguageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Language_1.default,
                LanguageEnv_1.default,
                LanguageKey_1.default,
                LanguageTranslation_1.default,
            ]),
            config_1.ConfigModule,
            src_1.LibraryConfigModule,
            cache_1.GlobalCacheModule,
        ],
        providers: [language_service_1.LanguageService],
        controllers: [language_controller_1.LanguageController],
    })
], LanguageModule);
//# sourceMappingURL=language.module.js.map