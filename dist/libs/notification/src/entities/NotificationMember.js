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
let NotificationMember = class NotificationMember {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        name: 'notification_id',
        type: 'bigint',
        unsigned: true,
        nullable: false,
    }),
    __metadata("design:type", Number)
], NotificationMember.prototype, "notificationId", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({
        name: 'member_id',
        type: 'bigint',
        unsigned: true,
        nullable: false,
    }),
    __metadata("design:type", Number)
], NotificationMember.prototype, "memberId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_read',
        type: 'tinyint',
        default: enum_1.ReadNotification.UNREAD,
    }),
    __metadata("design:type", Number)
], NotificationMember.prototype, "isRead", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'status',
        type: 'tinyint',
        default: enum_1.CommonStatus.ACTIVE,
    }),
    __metadata("design:type", Number)
], NotificationMember.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'datetime' }),
    __metadata("design:type", String)
], NotificationMember.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'datetime' }),
    __metadata("design:type", String)
], NotificationMember.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at', type: 'datetime', nullable: true }),
    __metadata("design:type", String)
], NotificationMember.prototype, "deletedAt", void 0);
NotificationMember = __decorate([
    (0, typeorm_1.Entity)('notification_member')
], NotificationMember);
exports.default = NotificationMember;
//# sourceMappingURL=NotificationMember.js.map