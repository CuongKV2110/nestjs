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
let PermissionGroup = class PermissionGroup {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], PermissionGroup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', unique: true, length: 150 }),
    __metadata("design:type", String)
], PermissionGroup.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Permission_1.default, (permission) => permission.permissionGroup),
    __metadata("design:type", Array)
], PermissionGroup.prototype, "permissions", void 0);
PermissionGroup = __decorate([
    (0, typeorm_1.Entity)('permission_group')
], PermissionGroup);
exports.default = PermissionGroup;
//# sourceMappingURL=PermissionGroup.js.map