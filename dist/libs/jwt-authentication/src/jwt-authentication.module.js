"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthenticationModule = void 0;
const jwt_authentication_service_1 = require("./jwt-authentication.service");
const jwt_authentication_module_definition_1 = require("./jwt-authentication.module-definition");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let JwtAuthenticationModule = class JwtAuthenticationModule extends jwt_authentication_module_definition_1.ConfigurableModuleClass {
};
exports.JwtAuthenticationModule = JwtAuthenticationModule;
exports.JwtAuthenticationModule = JwtAuthenticationModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [config_1.ConfigModule, jwt_1.JwtModule],
        providers: [jwt_authentication_service_1.JwtAuthenticationService],
        exports: [jwt_authentication_service_1.JwtAuthenticationService],
    })
], JwtAuthenticationModule);
//# sourceMappingURL=jwt-authentication.module.js.map