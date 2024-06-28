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
var LoggerReqMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerReqMiddleware = void 0;
const utils_service_1 = require("@app/helper/utils/utils.service");
const common_1 = require("@nestjs/common");
const enum_1 = require("libs/constants/enum");
let LoggerReqMiddleware = LoggerReqMiddleware_1 = class LoggerReqMiddleware {
    constructor(utilsService) {
        this.utilsService = utilsService;
        this.logger = new common_1.Logger(LoggerReqMiddleware_1.name);
    }
    use(req, res, next) {
        const body = this.utilsService.hideImportantInformation(req.body, enum_1.ValuesImportant);
        (async () => {
            try {
                const str = JSON.stringify(body);
                if (str.length < 2000) {
                    this.logger.debug(`[${req.method}]-[${req.ip}]: ${req.originalUrl} \n body: ${str}`);
                }
                else {
                    this.logger.debug(`[${req.method}]-[${req.ip}]: ${req.originalUrl} \n body: Body too large`);
                }
            }
            catch (error) { }
        })();
        next();
    }
};
exports.LoggerReqMiddleware = LoggerReqMiddleware;
exports.LoggerReqMiddleware = LoggerReqMiddleware = LoggerReqMiddleware_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [utils_service_1.UtilsService])
], LoggerReqMiddleware);
//# sourceMappingURL=logger.middleware.js.map