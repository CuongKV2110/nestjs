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
const typeorm_1 = require("typeorm");
let Resource = class Resource {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], Resource.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', type: 'varchar', length: 250 }),
    __metadata("design:type", String)
], Resource.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'value', type: 'varchar', length: 250, nullable: true }),
    __metadata("design:type", String)
], Resource.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', type: 'tinyint', default: 1 }),
    __metadata("design:type", Number)
], Resource.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'order', type: 'smallint', default: 0 }),
    __metadata("design:type", Number)
], Resource.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'type', type: 'smallint', comment: 'Các type đã chia sẽ được định nghĩa ở enum' }),
    __metadata("design:type", Number)
], Resource.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'datetime' }),
    __metadata("design:type", Number)
], Resource.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_by', type: 'int', default: 1, unsigned: true }),
    __metadata("design:type", Number)
], Resource.prototype, "createdBy", void 0);
Resource = __decorate([
    (0, typeorm_1.Entity)('resource')
], Resource);
exports.default = Resource;
//# sourceMappingURL=Resource.js.map