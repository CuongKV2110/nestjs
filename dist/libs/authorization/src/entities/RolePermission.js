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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Permission_1 = __importDefault(require("./Permission"));
const Role_1 = __importDefault(require("./Role"));
let RolePermission = class RolePermission {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'role_id', type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], RolePermission.prototype, "roleId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'permission_id', type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], RolePermission.prototype, "permissionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Role_1.default, (role) => role.rolePermissions),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", Role_1.default)
], RolePermission.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Permission_1.default),
    (0, typeorm_1.JoinColumn)({ name: 'permission_id' }),
    __metadata("design:type", Permission_1.default)
], RolePermission.prototype, "permission", void 0);
RolePermission = __decorate([
    (0, typeorm_1.Entity)('role_permission')
], RolePermission);
exports.default = RolePermission;
//# sourceMappingURL=RolePermission.js.map