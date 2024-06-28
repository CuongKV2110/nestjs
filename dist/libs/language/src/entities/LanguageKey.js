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
let LanguageKey = class LanguageKey {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('varchar', { name: 'key', length: 500 }),
    __metadata("design:type", String)
], LanguageKey.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'default_value', length: 500 }),
    __metadata("design:type", String)
], LanguageKey.prototype, "defaultValue", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'environment', length: 50 }),
    __metadata("design:type", String)
], LanguageKey.prototype, "environment", void 0);
LanguageKey = __decorate([
    (0, typeorm_1.Entity)('language_key')
], LanguageKey);
exports.default = LanguageKey;
//# sourceMappingURL=LanguageKey.js.map