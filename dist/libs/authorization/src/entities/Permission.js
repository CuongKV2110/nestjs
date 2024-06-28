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
const PermissionGroup_1 = __importDefault(require("./PermissionGroup"));
let Permission = class Permission {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], Permission.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'permission_group_id', type: 'int' }),
    __metadata("design:type", Number)
], Permission.prototype, "permissionGroupId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PermissionGroup_1.default, (permissionGroup) => permissionGroup.permissions),
    (0, typeorm_1.JoinColumn)({ name: 'permission_group_id' }),
    __metadata("design:type", PermissionGroup_1.default)
], Permission.prototype, "permissionGroup", void 0);
Permission = __decorate([
    (0, typeorm_1.Entity)('permission')
], Permission);
exports.default = Permission;
//# sourceMappingURL=Permission.js.map