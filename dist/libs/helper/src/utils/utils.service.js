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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const enum_1 = require("libs/constants/enum");
let UtilsService = class UtilsService {
    constructor(configService) {
        this.configService = configService;
    }
    format(template, ...args) {
        return template.replace(/{(.*?)}/g, (match, key) => {
            const value = args.find((arg) => typeof arg === 'object' && arg.hasOwnProperty(key));
            return value ? value[key] : '';
        });
    }
    hideImportantInformation(data, keys) {
        const result = JSON.parse(JSON.stringify(data));
        keys.forEach((key) => {
            if (result.hasOwnProperty(key)) {
                result[key] = '************************';
            }
        });
        return result;
    }
    deepClone(object) {
        if (typeof object !== 'object' || !object) {
            return object;
        }
        const clonedObject = Array.isArray(object) ? [] : {};
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                if (object[key] instanceof Date) {
                    clonedObject[key] = new Date(object[key]);
                }
                else {
                    clonedObject[key] = this.deepClone(object[key]);
                }
            }
        }
        return clonedObject;
    }
    omitObject(object, omits) {
        const objectCopy = this.deepClone(object);
        omits.forEach((key) => {
            delete objectCopy[key];
        });
        return objectCopy;
    }
    pickObject(object, picks) {
        const objectCopy = this.deepClone(object);
        picks.forEach((key) => {
            if (!picks.includes(key))
                delete objectCopy[key];
        });
        return objectCopy;
    }
    async formatErrorObject(exception) {
        var _a;
        const errorObj = {
            success: false,
            statusCode: exception.status || common_1.HttpStatus.BAD_REQUEST,
            errorValue: enum_1.ErrorCustom.Unknown_Error,
            devMessage: undefined,
            payload: undefined,
        };
        if (exception instanceof common_1.HttpException) {
            const data = exception instanceof common_1.HttpException ? exception.getResponse() : exception['error'];
            if ((data === null || data === void 0 ? void 0 : data.error) === 'Not Found') {
                return {
                    success: false,
                    statusCode: (data === null || data === void 0 ? void 0 : data.status) || common_1.HttpStatus.BAD_REQUEST,
                    errorCode: enum_1.ErrorCustom.Not_Found.ErrorCode,
                    errorMessage: (data === null || data === void 0 ? void 0 : data.message) || enum_1.ErrorCustom.Not_Found.ErrorMessage,
                };
            }
            if ((data === null || data === void 0 ? void 0 : data.error) === 'Bad Request') {
                return {
                    success: false,
                    statusCode: (data === null || data === void 0 ? void 0 : data.status) || common_1.HttpStatus.BAD_REQUEST,
                    errorCode: enum_1.ErrorCustom.Invalid_Input.ErrorCode,
                    errorMessage: (data === null || data === void 0 ? void 0 : data.message) || enum_1.ErrorCustom.Invalid_Input.ErrorMessage,
                };
            }
            const extraData = this.pickObject(data, ['errorValue', 'statusCode', 'devMessage', 'payload', 'errorMessage']);
            Object.assign(errorObj, extraData);
            if (data === 'ThrottlerException: Too Many Requests') {
                Object.assign(errorObj, {
                    errorValue: enum_1.ErrorCustom.The_Allowed_Number_Of_Calls_Has_Been_Exceeded,
                    devMessage: 'Too Many Requests',
                });
            }
        }
        const errorValue = errorObj.errorValue;
        const errorMessageFormat = {};
        errorObj.errorMessage = ((_a = errorMessageFormat[errorValue.ErrorCode]) === null || _a === void 0 ? void 0 : _a.message) || errorValue.ErrorMessage;
        errorObj.errorCode = errorValue.ErrorCode;
        const keyOmit = ['errorValue'];
        if (this.configService.get('nodeEnv', enum_1.Environment.Development) === enum_1.Environment.Production) {
            keyOmit.push('devMessage');
        }
        if (errorObj.errorMessage) {
            errorObj.errorMessage = this.format(errorObj.errorMessage, errorObj.payload);
        }
        if (errorObj.devMessage) {
            errorObj.devMessage = this.format(errorObj.devMessage, errorObj.payload);
        }
        return this.omitObject(errorObj, ['errorValue']);
    }
};
exports.UtilsService = UtilsService;
exports.UtilsService = UtilsService = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UtilsService);
//# sourceMappingURL=utils.service.js.map