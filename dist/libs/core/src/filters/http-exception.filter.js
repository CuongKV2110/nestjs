"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.formatErrorObject = exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
const enum_1 = require("../constants/enum");
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter {
    constructor() {
        this.logger = new common_1.Logger(AllExceptionsFilter_1.name);
    }
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();
        Object.assign(exception, {
            request: {
                method: request.method,
                url: request.url,
                body: request.body,
                ip: request.ip,
                payload: request.payload,
            },
        });
        this.logger.error(exception);
        const _a = formatErrorObject(exception), { statusCode } = _a, errorObject = __rest(_a, ["statusCode"]);
        response.status(statusCode).json(errorObject);
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
function formatErrorObject(exception) {
    const errorObj = {
        success: false,
        statusCode: exception.status || common_1.HttpStatus.BAD_REQUEST,
        errorCode: enum_1.ErrorCode.Unknown_Error,
        errorMessage: undefined,
        devMessage: undefined,
        payload: undefined,
    };
    if (exception instanceof common_1.HttpException) {
        const data = exception.getResponse();
        if ((data === null || data === void 0 ? void 0 : data.error) === 'Not Found') {
            return {
                success: false,
                statusCode: (data === null || data === void 0 ? void 0 : data.status) || common_1.HttpStatus.BAD_REQUEST,
                errorCode: enum_1.ErrorCode.Not_Found,
                errorMessage: data === null || data === void 0 ? void 0 : data.message,
            };
        }
        const extraData = (0, lodash_1.pick)(data, [
            'errorCode',
            'statusCode',
            'devMessage',
            'payload',
            'errorMessage',
        ]);
        Object.assign(errorObj, extraData);
        if (data === 'ThrottlerException: Too Many Requests') {
            Object.assign(errorObj, {
                errorCode: enum_1.ErrorCode.The_Allowed_Number_Of_Calls_Has_Been_Exceeded,
                devMessage: 'Too Many Requests',
            });
        }
    }
    if (!(errorObj === null || errorObj === void 0 ? void 0 : errorObj.errorMessage))
        errorObj.errorMessage = errorObj.errorCode;
    return errorObj;
}
exports.formatErrorObject = formatErrorObject;
//# sourceMappingURL=http-exception.filter.js.map