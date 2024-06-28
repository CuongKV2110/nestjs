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
const enum_1 = require("../../../core/src/constants/enum");
const typeorm_1 = require("typeorm");
const RolePermission_1 = __importDefault(require("./RolePermission"));
let Role = class Role {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id', unsigned: true }),
    __metadata("design:type", Number)
], Role.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', unique: true, length: 255 }),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'is_system', default: 0, comment: '1: is a system, 0: not system' }),
    __metadata("design:type", Number)
], Role.prototype, "isSystem", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'is_visible', default: enum_1.CommonStatus.ACTIVE }),
    __metadata("design:type", Number)
], Role.prototype, "isVisible", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => RolePermission_1.default, (rolePermission) => rolePermission.role),
    __metadata("design:type", Array)
], Role.prototype, "rolePermissions", void 0);
Role = __decorate([
    (0, typeorm_1.Entity)('role')
], Role);
exports.default = Role;
//# sourceMappingURL=Role.js.map