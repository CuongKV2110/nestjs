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
let Language = class Language {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'code', length: 50 }),
    __metadata("design:type", String)
], Language.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 50 }),
    __metadata("design:type", String)
], Language.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'status', comment: '1: Active, 0: Deleted' }),
    __metadata("design:type", Number)
], Language.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'vi_name', length: 50 }),
    __metadata("design:type", String)
], Language.prototype, "viName", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'priority' }),
    __metadata("design:type", Number)
], Language.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'flag_icon', length: 500 }),
    __metadata("design:type", String)
], Language.prototype, "flagIcon", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'is_default' }),
    __metadata("design:type", Number)
], Language.prototype, "isDefault", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime', name: 'created_date', nullable: true }),
    __metadata("design:type", String)
], Language.prototype, "createdAt", void 0);
Language = __decorate([
    (0, typeorm_1.Entity)('language')
], Language);
exports.default = Language;
//# sourceMappingURL=Language.js.map