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
const enum_1 = require("../../../core/src/constants/enum");
const typeorm_1 = require("typeorm");
let Notification = class Notification {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], Notification.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'tinyint', default: enum_1.CommonStatus.ACTIVE }),
    __metadata("design:type", Number)
], Notification.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], Notification.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title', type: 'varchar', length: '500', nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'url', type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'redirect_id',
        type: 'bigint',
        unsigned: true,
        nullable: true,
    }),
    __metadata("design:type", Number)
], Notification.prototype, "redirect_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'redirect_type', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], Notification.prototype, "redirectType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'target_type', type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], Notification.prototype, "targetType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'uuid', type: 'uuid', nullable: true }),
    __metadata("design:type", Number)
], Notification.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'image', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_by',
        type: 'bigint',
        unsigned: true,
        nullable: true,
    }),
    __metadata("design:type", Number)
], Notification.prototype, "createBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'deleted_by',
        type: 'bigint',
        unsigned: true,
        nullable: true,
    }),
    __metadata("design:type", Number)
], Notification.prototype, "deletedBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'datetime' }),
    __metadata("design:type", String)
], Notification.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'datetime' }),
    __metadata("design:type", String)
], Notification.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_by',
        type: 'bigint',
        nullable: true,
        unsigned: true,
    }),
    __metadata("design:type", Number)
], Notification.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'datetime', nullable: true }),
    __metadata("design:type", String)
], Notification.prototype, "deletedAt", void 0);
Notification = __decorate([
    (0, typeorm_1.Entity)('notification')
], Notification);
exports.default = Notification;
//# sourceMappingURL=Notification.js.map