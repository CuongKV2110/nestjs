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
let LanguageEnv = class LanguageEnv {
};
__decorate([
    (0, typeorm_1.Column)('varchar', { primary: true, name: 'code', length: 50 }),
    __metadata("design:type", String)
], LanguageEnv.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 500 }),
    __metadata("design:type", String)
], LanguageEnv.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'status', default: 1 }),
    __metadata("design:type", Number)
], LanguageEnv.prototype, "status", void 0);
LanguageEnv = __decorate([
    (0, typeorm_1.Entity)('language_env')
], LanguageEnv);
exports.default = LanguageEnv;
//# sourceMappingURL=LanguageEnv.js.map