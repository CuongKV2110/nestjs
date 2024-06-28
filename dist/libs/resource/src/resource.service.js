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
exports.ResourceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Resource_1 = __importDefault(require("./entities/Resource"));
const enum_1 = require("@app/core/constants/enum");
const utils_1 = require("@app/helpers/utils");
const exception_1 = require("@app/core/exception");
const cache_1 = require("@app/cache");
const config_service_1 = require("libs/config/src/config.service");
const RESOURCE_VERSION = 'RESOURCE_VERSION';
let ResourceService = class ResourceService {
    constructor(configService, dataSource, cacheManager, resourceRepository) {
        this.configService = configService;
        this.dataSource = dataSource;
        this.cacheManager = cacheManager;
        this.resourceRepository = resourceRepository;
    }
    async getResourceInfo() {
        const KEY_CACHE_RESOURCE = this.cacheManager.createKeyCacheData('KEY_CACHE_RESOURCE');
        const cacheData = await this.cacheManager.del(KEY_CACHE_RESOURCE);
        if (cacheData)
            return JSON.parse(cacheData);
        const resources = await this.resourceRepository.find({
            where: {
                status: enum_1.CommonStatus.ACTIVE,
            },
        });
        const result = resources.reduce((acc, cur) => {
            if (!acc[cur.type])
                acc[cur.type] = [];
            acc[cur.type].push(cur);
            return acc;
        }, {});
        await this.cacheManager.set(KEY_CACHE_RESOURCE, JSON.stringify(result));
        return result;
    }
    async getListResource(params) {
        const queryBuilder = this.resourceRepository
            .createQueryBuilder('resource')
            .select([
            'resource.id',
            'resource.name',
            'resource.status',
            'resource.order',
            'resource.type',
            'resource.createdBy',
        ])
            .take(params.take)
            .skip(params.skip)
            .where('1=1');
        if (params.type) {
            queryBuilder.andWhere('resource.type = :type', { type: params.type });
        }
        if (params.status) {
            queryBuilder.andWhere('resource.status = :status', {
                status: params.status,
            });
        }
        if (params.keyword) {
            queryBuilder.andWhere('LOWER(resource.name) like :name', {
                name: `%${params.keyword.toLowerCase()}%`,
            });
        }
        const [data, total] = await queryBuilder
            .orderBy('resource.order', 'ASC')
            .addOrderBy('resource.createdAt')
            .getManyAndCount();
        return (0, utils_1.handleOutputPaging)(data, total, params);
    }
    async createResource(userId, params) {
        const KEY_CACHE_RESOURCE = this.cacheManager.createKeyCacheData('KEY_CACHE_RESOURCE');
        params.createdBy = userId;
        return await this.dataSource.transaction(async (transaction) => {
            await this.configService.updateVersionConfig(transaction, RESOURCE_VERSION);
            await this.cacheManager.del(KEY_CACHE_RESOURCE);
            return await transaction.getRepository(Resource_1.default).save(params);
        });
    }
    async updateResource(resourceId, params) {
        const KEY_CACHE_RESOURCE = this.cacheManager.createKeyCacheData('KEY_CACHE_RESOURCE');
        await this.dataSource.transaction(async (transaction) => {
            const resourceRepository = transaction.getRepository(Resource_1.default);
            await resourceRepository.update(resourceId, Object.assign({}, params));
            await this.configService.updateVersionConfig(transaction, RESOURCE_VERSION);
        });
        await this.cacheManager.del(KEY_CACHE_RESOURCE);
        return;
    }
    async updateStatusResource(resourceId, params) {
        return await this.dataSource.transaction(async (transaction) => {
            const KEY_CACHE_RESOURCE = this.cacheManager.createKeyCacheData('KEY_CACHE_RESOURCE');
            await this.configService.updateVersionConfig(transaction, RESOURCE_VERSION);
            await this.resourceRepository.update(resourceId, Object.assign({}, params));
            await this.cacheManager.del(KEY_CACHE_RESOURCE);
        });
    }
    async getDetailResource(resourceId) {
        const resource = await this.resourceRepository.findOne({
            where: { id: resourceId },
        });
        if (!resource)
            throw new exception_1.Exception(enum_1.ErrorCode.Not_Found);
        return resource;
    }
    async createResourceSingle(params) {
        const KEY_CACHE_RESOURCE = this.cacheManager.createKeyCacheData('KEY_CACHE_RESOURCE');
        const resource = await this.resourceRepository.findOne({
            where: {
                type: params.type,
            },
        });
        if (resource)
            throw new exception_1.Exception(enum_1.ErrorCode.Resource_Already_Exists, 'Resource already exist');
        await this.resourceRepository.save(params);
        await this.cacheManager.del(KEY_CACHE_RESOURCE);
    }
    async getResourceByType(type) {
        const resource = await this.resourceRepository.find({
            where: {
                type: type,
                status: (0, typeorm_2.Not)(enum_1.CommonStatus.INACTIVE),
            },
        });
        return resource;
    }
};
exports.ResourceService = ResourceService;
exports.ResourceService = ResourceService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, typeorm_1.InjectRepository)(Resource_1.default)),
    __metadata("design:paramtypes", [config_service_1.LibraryConfigService,
        typeorm_2.DataSource, typeof (_a = typeof cache_1.GlobalCacheService !== "undefined" && cache_1.GlobalCacheService) === "function" ? _a : Object, typeorm_2.Repository])
], ResourceService);
//# sourceMappingURL=resource.service.js.map