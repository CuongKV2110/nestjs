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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryConfigService = void 0;
const cache_1 = require("@app/cache");
const enum_1 = require("@app/core/constants/enum");
const exception_1 = require("@app/core/exception");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Config_1 = __importDefault(require("./entities/Config"));
let LibraryConfigService = class LibraryConfigService {
    constructor(configRepository, cacheManager) {
        this.configRepository = configRepository;
        this.cacheManager = cacheManager;
    }
    async getListConfig(params) {
        const configs = this.configRepository.createQueryBuilder('config');
        if (params.keyword) {
            configs.where('config.name like :name', { name: `%${params.keyword}%` });
        }
        return await configs.getMany();
    }
    async updateConfig(key, params) {
        const KEY_CACHE_CONFIG = this.cacheManager.createKeyCacheData('KEY_CACHE_CONFIG');
        await this.configRepository.update(key, params);
        await this.cacheManager.del(KEY_CACHE_CONFIG);
    }
    async getDetailConfig(key) {
        const config = await this.configRepository.findOne({ where: { key } });
        if (!config)
            throw new exception_1.Exception(enum_1.ErrorCode.Not_Found, `Not found this config key: ${key}`);
        return config;
    }
    async updateVersionConfig(transaction, key) {
        const KEY_CACHE_CONFIG = this.cacheManager.createKeyCacheData('KEY_CACHE_CONFIG');
        await transaction.query(`INSERT INTO config (\`key\`, \`name\`, \`value\`, \`is_system\`, \`created_by\`, \`order\`)
      SELECT \`temp\`.* FROM (SELECT ? as \`key\`, ? as \`name\`, 0 as \`value\`, 1 as \`is_system\`, 1 as \`created_by\`, 0 as \`order\`) as temp 
      WHERE NOT EXISTS ( SELECT \`key\` FROM \`config\` WHERE \`key\` = ?) LIMIT 1`, [key, key, key]);
        await transaction.query('UPDATE config SET `value` = IFNULL(`value`, 0) + 1  WHERE `key` = ?', [key]);
        await this.cacheManager.del(KEY_CACHE_CONFIG);
    }
    async getConfigInfo() {
        const KEY_CACHE_CONFIG = this.cacheManager.createKeyCacheData('KEY_CACHE_CONFIG');
        const cacheData = (await this.cacheManager.get(KEY_CACHE_CONFIG));
        if (cacheData)
            return JSON.parse(cacheData);
        const configs = await this.configRepository.find();
        const result = configs.reduce((acc, cur) => {
            acc[cur.key] = cur;
            return acc;
        }, {});
        await this.cacheManager.set(KEY_CACHE_CONFIG, JSON.stringify(result));
        return result;
    }
};
exports.LibraryConfigService = LibraryConfigService;
exports.LibraryConfigService = LibraryConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Config_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeof (_a = typeof cache_1.GlobalCacheService !== "undefined" && cache_1.GlobalCacheService) === "function" ? _a : Object])
], LibraryConfigService);
//# sourceMappingURL=config.service.js.map