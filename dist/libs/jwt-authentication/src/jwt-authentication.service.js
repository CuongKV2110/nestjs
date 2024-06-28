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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const jwt_authentication_module_definition_1 = require("./jwt-authentication.module-definition");
const enum_1 = require("libs/constants/enum");
const exception_1 = require("@app/core/exception");
const jwt_1 = require("@nestjs/jwt");
let JwtAuthenticationService = class JwtAuthenticationService {
    constructor(jwtService, options) {
        this.jwtService = jwtService;
        this.options = options;
    }
    async validateRequest(request) {
        const token = this.extractFromAuthHeaderByBearerToken(request);
        try {
            const decoded = this.jwtService.verify(token, {
                secret: this.options.secretOrKey,
                algorithms: ['HS256'],
            });
            Object.assign(request, { payload: decoded });
            return true;
        }
        catch (error) {
            throw new exception_1.Unauthorized("Your authorization token isn't valid. Please login again!");
        }
    }
    extractFromAuthHeaderByBearerToken(req) {
        const token = req.headers.authorization || '';
        return token.trim().replace('Bearer ', '');
    }
    generateAccessToken(payload) {
        const timeStamp = new Date().getTime();
        return this.jwtService.sign(Object.assign(Object.assign({}, payload), { tokenType: enum_1.TokenType.ACCESS_TOKEN, timeStamp }), {
            secret: this.options.secretOrKey,
            expiresIn: this.options.accessTokenExpiredIn,
            algorithm: 'HS256',
        });
    }
    generateTokenForgotPassword(payload) {
        return this.jwtService.sign(payload, {
            secret: this.options.secretOrKey,
            expiresIn: this.options.accessTokenExpiredIn,
            algorithm: 'HS256',
        });
    }
    generateRefreshToken(payload) {
        const timeStamp = new Date().getTime();
        return this.jwtService.sign(Object.assign(Object.assign({}, payload), { tokenType: enum_1.TokenType.REFRESH_TOKEN, timeStamp }), {
            secret: this.options.secretOrKey,
            expiresIn: this.options.refreshTokenExpiredIn,
            algorithm: 'HS256',
        });
    }
    verifyAccessToken(accessToken) {
        try {
            const payload = this.jwtService.verify(accessToken, {
                secret: this.options.secretOrKey,
            });
            return payload;
        }
        catch (error) {
            return false;
        }
    }
    verifyRefreshToken(refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken, {
                secret: this.options.secretOrKey,
            });
            return payload;
        }
        catch (error) {
            return false;
        }
    }
};
exports.JwtAuthenticationService = JwtAuthenticationService;
exports.JwtAuthenticationService = JwtAuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(jwt_authentication_module_definition_1.MODULE_OPTIONS_TOKEN)),
    __metadata("design:paramtypes", [jwt_1.JwtService, Object])
], JwtAuthenticationService);
//# sourceMappingURL=jwt-authentication.service.js.map