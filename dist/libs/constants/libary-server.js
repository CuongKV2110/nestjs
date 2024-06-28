"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROVIDERS_MODULE_COMMON = exports.IMPORT_MODULE_COMMON = void 0;
const helper_1 = require("@app/helper");
const config_1 = require("@nestjs/config");
const configuration_env_1 = __importDefault(require("./configuration-env"));
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const http_exeption_filter_1 = require("@app/core/filters/http-exeption.filter");
const transform_res_interceptor_1 = require("@app/core/interceptors/transform-res.interceptor");
const jwt_authentication_1 = require("@app/jwt-authentication");
exports.IMPORT_MODULE_COMMON = [
    config_1.ConfigModule.forRoot({
        isGlobal: true,
        load: [configuration_env_1.default],
        cache: true,
    }),
    helper_1.HelperModule,
    jwt_authentication_1.JwtAuthenticationModule.registerAsync({
        imports: [config_1.ConfigModule],
        useFactory: (configService) => (Object.assign({}, configService.get('auth'))),
        inject: [config_1.ConfigService],
    }),
];
exports.PROVIDERS_MODULE_COMMON = [
    {
        provide: core_1.APP_GUARD,
        useClass: throttler_1.ThrottlerGuard,
    },
    {
        provide: core_1.APP_FILTER,
        useClass: http_exeption_filter_1.AllExceptionsFilter,
    },
    {
        provide: core_1.APP_INTERCEPTOR,
        useClass: transform_res_interceptor_1.TransformResponseInterceptor,
    },
];
//# sourceMappingURL=libary-server.js.map