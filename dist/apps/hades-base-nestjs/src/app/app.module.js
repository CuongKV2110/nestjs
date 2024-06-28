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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const jwt_authentication_1 = require("@app/jwt-authentication");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_2 = __importStar(require("../config"));
const authorization_1 = require("y/authorization");
const typeorm_1 = require("@nestjs/typeorm");
const data_source_1 = require("@app/database-type-orm/data-source");
const cache_1 = require("@app/cache");
const language_1 = require("@app/language");
const resource_1 = require("@app/resource");
const src_1 = require("libs/config/src");
const twilio_1 = require("@app/twilio");
const send_mail_1 = require("@app/send-mail");
const queue_1 = require("@app/queue");
const http_exception_filter_1 = require("@app/core/filters/http-exception.filter");
const transform_res_interceptor_1 = require("@app/core/interceptors/transform-res.interceptor");
const enum_1 = require("@app/core/constants/enum");
const logger_middleware_1 = require("@app/core/middlewares/logger.middleware");
let AppModule = class AppModule {
    constructor(configService) {
        this.configService = configService;
    }
    configure(consumer) {
        const nodeEnv = this.configService.get('nodeEnv');
        if (![enum_1.Environment.Production].includes(nodeEnv)) {
            consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
        }
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [() => config_2.default],
                cache: true,
                validate: config_2.validateConfig,
            }),
            throttler_1.ThrottlerModule.forRoot({
                ttl: 60,
                limit: 300,
            }),
            jwt_authentication_1.JwtAuthenticationModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => (Object.assign({}, configService.get('auth'))),
                inject: [config_1.ConfigService],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => (Object.assign({}, configService.get('typeORMOptions'))),
                dataSourceFactory: async () => {
                    return await data_source_1.dataSource.initialize();
                },
                inject: [config_1.ConfigService],
            }),
            authorization_1.AuthorizationModule,
            cache_1.GlobalCacheModule,
            src_1.LibraryConfigModule,
            resource_1.ResourceModule,
            language_1.LanguageModule,
            twilio_1.TwilioModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => (Object.assign({}, configService.get('twilio'))),
                inject: [config_1.ConfigService],
            }),
            send_mail_1.SendMailModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => (Object.assign({}, configService.get('sendGrid'))),
                inject: [config_1.ConfigService],
            }),
            queue_1.QueueModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_authentication_1.JwtAuthenticationGuard,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: http_exception_filter_1.AllExceptionsFilter,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transform_res_interceptor_1.TransformResponseInterceptor,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: authorization_1.PermissionsGuard,
            },
            app_service_1.AppService,
        ],
    }),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppModule);
//# sourceMappingURL=app.module.js.map