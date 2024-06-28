"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Language_1 = __importDefault(require("./entities/Language"));
const LanguageEnv_1 = __importDefault(require("./entities/LanguageEnv"));
const LanguageKey_1 = __importDefault(require("./entities/LanguageKey"));
const LanguageTranslation_1 = __importDefault(require("./entities/LanguageTranslation"));
const flatten = __importStar(require("flat"));
const enum_1 = require("@app/core/constants/enum");
const exception_1 = require("@app/core/exception");
const utils_1 = require("@app/helpers/utils");
const cache_1 = require("@app/cache");
const config_service_1 = require("libs/config/src/config.service");
const LANGUAGE_VERSION = 'LANGUAGE_VERSION';
let LanguageService = class LanguageService {
    constructor(configService, dataSource, cacheManager, languageRepository, languageEnvRepository, languageKeyRepository, languageTranslationRepository) {
        this.configService = configService;
        this.dataSource = dataSource;
        this.cacheManager = cacheManager;
        this.languageRepository = languageRepository;
        this.languageEnvRepository = languageEnvRepository;
        this.languageKeyRepository = languageKeyRepository;
        this.languageTranslationRepository = languageTranslationRepository;
    }
    async getListLanguage(params) {
        const queryBuilder = this.languageRepository.createQueryBuilder('l');
        if (params.status) {
            queryBuilder.andWhere('l.status = :status', { status: params.status });
        }
        const result = await queryBuilder
            .orderBy('l.isDefault', 'DESC')
            .addOrderBy('l.priority', 'ASC')
            .getMany();
        return result;
    }
    async addLanguage(params) {
        return await this.dataSource.transaction(async (transaction) => {
            const languageRepository = transaction.getRepository(Language_1.default);
            if (params.isDefault === enum_1.CommonStatus.ACTIVE) {
                await languageRepository.update({ isDefault: enum_1.CommonStatus.ACTIVE }, { isDefault: enum_1.CommonStatus.INACTIVE });
            }
            if (params.isDefault === enum_1.CommonStatus.INACTIVE) {
                const hasDefaultLanguage = await languageRepository.count({
                    where: {
                        status: enum_1.CommonStatus.ACTIVE,
                        isDefault: enum_1.CommonStatus.ACTIVE,
                    },
                });
                if (!hasDefaultLanguage) {
                    params.isDefault = enum_1.CommonStatus.ACTIVE;
                }
            }
            await languageRepository.save(params);
        });
    }
    async updateLanguage(params) {
        return await this.dataSource.transaction(async (transaction) => {
            const languageRepository = transaction.getRepository(Language_1.default);
            const language = await languageRepository.findOne({
                where: {
                    code: params.code,
                },
            });
            if (!language)
                throw new exception_1.Exception(enum_1.ErrorCode.Not_Found, 'This language not found');
            if (params.status === enum_1.CommonStatus.INACTIVE &&
                language.isDefault === enum_1.CommonStatus.ACTIVE) {
                throw new exception_1.Exception(enum_1.ErrorCode.Can_Not_Disable_Default_language, 'You can not disable default language.');
            }
            if (params.isDefault === enum_1.CommonStatus.INACTIVE &&
                language.isDefault === enum_1.CommonStatus.ACTIVE) {
                throw enum_1.ErrorCode.Can_Not_Disable_Default_language;
            }
            if (params.isDefault === enum_1.CommonStatus.ACTIVE &&
                language.isDefault !== enum_1.CommonStatus.ACTIVE) {
                await languageRepository.update({ isDefault: enum_1.CommonStatus.ACTIVE }, { isDefault: enum_1.CommonStatus.INACTIVE });
            }
            await languageRepository.update({ code: params.code }, params);
        });
    }
    async getListLanguageKey(params) {
        const queryBuilder = this.languageKeyRepository
            .createQueryBuilder('lk')
            .leftJoinAndMapMany('lk.translations', LanguageTranslation_1.default, 'lt', 'lk.key = lt.key AND lk.environment = lt.environment')
            .leftJoin(Language_1.default, 'l', 'l.code = lt.code AND l.status = :status', {
            status: enum_1.CommonStatus.ACTIVE,
        })
            .select([
            'lk.key',
            'lk.defaultValue',
            'lk.environment',
            'lt.code',
            'lt.value',
        ]);
        if (params.keyword) {
            queryBuilder.andWhere('(LOWER(lk.key) LIKE :keyword OR LOWER(lt.value LIKE :keyword))', {
                keyword: `%${params.keyword.toLocaleLowerCase()}%`,
            });
        }
        if (params.environments && params.environments.length) {
            queryBuilder.andWhere('lk.environment IN(:environments)', {
                environments: params.environments,
            });
        }
        const [data, totalItems] = await queryBuilder
            .skip(params.skip)
            .take(params.take)
            .getManyAndCount();
        await this.assignLanguageTranslation(this.languageRepository, data);
        return (0, utils_1.handleOutputPaging)(data, totalItems, params);
    }
    async assignLanguageTranslation(languageRepository, data) {
        const languages = await languageRepository.find({
            where: { status: enum_1.CommonStatus.ACTIVE },
            select: ['code'],
            order: { isDefault: 'DESC' },
        });
        data.forEach((item) => {
            item['translations'] = languages.map((element) => {
                var _a;
                const el = item['translations'].find((x) => x.code === element.code);
                const value = (_a = el === null || el === void 0 ? void 0 : el.value) !== null && _a !== void 0 ? _a : null;
                return { code: element.code, value };
            });
        });
    }
    async addLanguageKey(_a) {
        var { translations } = _a, params = __rest(_a, ["translations"]);
        await this.dataSource.transaction(async (transaction) => {
            const languageKeyRepository = transaction.getRepository(LanguageKey_1.default);
            const languageTranslationRepository = transaction.getRepository(LanguageTranslation_1.default);
            const KEY_CACHE_LANGUAGE = this.cacheManager.createKeyCacheData('KEY_CACHE_LANGUAGE');
            translations.forEach((item) => {
                item.environment = params.environment;
                item.key = params.key;
            });
            await languageKeyRepository.save(params);
            await languageTranslationRepository.save(translations);
            await this.cacheManager.del(KEY_CACHE_LANGUAGE);
            await this.configService.updateVersionConfig(transaction, LANGUAGE_VERSION);
        });
    }
    async updateLanguageKey(_a) {
        var { translations } = _a, params = __rest(_a, ["translations"]);
        await this.dataSource.transaction(async (transaction) => {
            const languageTranslationRepository = transaction.getRepository(LanguageTranslation_1.default);
            const languageKeyRepository = transaction.getRepository(LanguageKey_1.default);
            const KEY_CACHE_LANGUAGE = this.cacheManager.createKeyCacheData('KEY_CACHE_LANGUAGE');
            await languageTranslationRepository.delete({
                key: params.key,
                environment: params.environment,
            });
            translations.forEach((item) => {
                item.environment = params.environment;
                item.key = params.key;
            });
            await languageKeyRepository.save(params);
            await languageTranslationRepository.save(translations);
            await this.cacheManager.del(KEY_CACHE_LANGUAGE);
            await this.configService.updateVersionConfig(transaction, LANGUAGE_VERSION);
        });
    }
    async getFileLanguage(params) {
        const KEY_CACHE_LANGUAGE = this.cacheManager.createKeyCacheData('KEY_CACHE_LANGUAGE');
        const cacheData = (await this.cacheManager.get(KEY_CACHE_LANGUAGE));
        if (cacheData) {
            return (0, utils_1.reformatFileLanguage)(JSON.parse(cacheData), params);
        }
        const queryBuilder = this.languageKeyRepository
            .createQueryBuilder('lk')
            .select([
            'lk.key `key`',
            'lt.code code',
            'IFNULL(lt.value, lk.defaultValue) value',
        ])
            .innerJoin(LanguageTranslation_1.default, 'lt', 'lk.key = lt.key AND lk.environment = lt.environment')
            .innerJoin(Language_1.default, 'l', 'l.status = :status AND lt.code = l.code', {
            status: enum_1.CommonStatus.ACTIVE,
        })
            .where('lk.environment = :environment', {
            environment: params.environment,
        });
        const data = await queryBuilder.getRawMany();
        await this.cacheManager.set(KEY_CACHE_LANGUAGE, JSON.stringify(data));
        return (0, utils_1.reformatFileLanguage)(data, params);
    }
    async downloadFileLanguage(params) {
        const queryBuilder = this.languageKeyRepository
            .createQueryBuilder('lk')
            .select([
            'lk.key `key`',
            'lt.code code',
            'IFNULL(lt.value, lk.defaultValue) value',
        ])
            .innerJoin(LanguageTranslation_1.default, 'lt', 'lk.key = lt.key AND lk.environment = lt.environment')
            .innerJoin(Language_1.default, 'l', 'l.status = :status AND lt.code = l.code', {
            status: enum_1.CommonStatus.ACTIVE,
        })
            .where('lk.environment = :environment', {
            environment: params.environment,
        });
        const data = await queryBuilder.getRawMany();
        return (0, utils_1.reformatFileLanguage)(data, params);
    }
    async uploadLanguageFile({ environment, code, languages }) {
        const flatData = flatten(languages);
        const keys = Object.keys(flatData);
        const params = keys.reduce((acc, cur) => {
            acc.languageTranslation.push({
                key: cur,
                code,
                environment,
                value: flatData[cur],
            });
            acc.languageKey.push({
                key: cur,
                environment,
                defaultValue: cur,
            });
            return acc;
        }, { languageKey: [], languageTranslation: [] });
        return await this.dataSource.transaction(async (transaction) => {
            const languageRepository = transaction.getRepository(LanguageKey_1.default);
            const languageTranslationRepository = transaction.getRepository(LanguageTranslation_1.default);
            const KEY_CACHE_LANGUAGE = this.cacheManager.createKeyCacheData('KEY_CACHE_LANGUAGE');
            await languageRepository.save(params.languageKey);
            await languageTranslationRepository.save(params.languageTranslation);
            await this.cacheManager.del(KEY_CACHE_LANGUAGE);
            await this.configService.updateVersionConfig(transaction, LANGUAGE_VERSION);
        });
    }
    async getListEnvironments() {
        const environments = await this.languageEnvRepository.find({
            where: {
                status: enum_1.CommonStatus.ACTIVE,
            },
        });
        return environments;
    }
};
exports.LanguageService = LanguageService;
exports.LanguageService = LanguageService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, typeorm_1.InjectRepository)(Language_1.default)),
    __param(4, (0, typeorm_1.InjectRepository)(LanguageEnv_1.default)),
    __param(5, (0, typeorm_1.InjectRepository)(LanguageKey_1.default)),
    __param(6, (0, typeorm_1.InjectRepository)(LanguageTranslation_1.default)),
    __metadata("design:paramtypes", [config_service_1.LibraryConfigService,
        typeorm_2.DataSource, typeof (_a = typeof cache_1.GlobalCacheService !== "undefined" && cache_1.GlobalCacheService) === "function" ? _a : Object, typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], LanguageService);
//# sourceMappingURL=language.service.js.map