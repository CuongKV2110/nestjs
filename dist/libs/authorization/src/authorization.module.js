"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationModule = void 0;
const common_1 = require("@nestjs/common");
const authorization_service_1 = require("./authorization.service");
const authorization_controller_1 = require("./authorization.controller");
const typeorm_1 = require("@nestjs/typeorm");
const UserPermission_1 = __importDefault(require("./entities/UserPermission"));
const Role_1 = __importDefault(require("./entities/Role"));
const Permission_1 = __importDefault(require("./entities/Permission"));
const RolePermission_1 = __importDefault(require("./entities/RolePermission"));
const cache_1 = require("@app/cache");
let AuthorizationModule = class AuthorizationModule {
};
exports.AuthorizationModule = AuthorizationModule;
exports.AuthorizationModule = AuthorizationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Role_1.default,
                Permission_1.default,
                UserPermission_1.default,
                RolePermission_1.default,
            ]),
            cache_1.GlobalCacheModule,
        ],
        providers: [authorization_service_1.AuthorizationService],
        controllers: [authorization_controller_1.AuthorizationController],
        exports: [authorization_service_1.AuthorizationService],
    })
], AuthorizationModule);
//# sourceMappingURL=authorization.module.js.map