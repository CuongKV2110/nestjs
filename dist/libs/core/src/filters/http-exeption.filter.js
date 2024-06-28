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
var AllExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const utils_service_1 = require("@app/helper/utils/utils.service");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const enum_1 = require("libs/constants/enum");
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter {
    constructor(utilsService, configService) {
        this.utilsService = utilsService;
        this.configService = configService;
        this.logger = new common_1.Logger(AllExceptionsFilter_1.name);
        this.nodeEnv = this.configService.get('nodeEnv', enum_1.Environment.Development);
    }
    async catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();
        Object.assign(exception, {
            request: {
                method: request.method,
                url: request.url,
                body: this.utilsService.hideImportantInformation(request.body, enum_1.ValuesImportant),
                ip: request.ip,
                payload: request.payload,
            },
        });
        this.logger.error(Object.assign(exception, { env: this.nodeEnv }));
        const _a = await this.utilsService.formatErrorObject(exception), { statusCode } = _a, errorObject = __rest(_a, ["statusCode"]);
        response.status(statusCode).json(errorObject);
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [utils_service_1.UtilsService,
        config_1.ConfigService])
], AllExceptionsFilter);
//# sourceMappingURL=http-exeption.filter.js.map