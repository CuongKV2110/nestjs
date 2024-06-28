"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseTypeOrmModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const data_source_1 = require("./data-source");
const database_type_orm_service_1 = require("./database-type-orm.service");
let DatabaseTypeOrmModule = class DatabaseTypeOrmModule {
};
exports.DatabaseTypeOrmModule = DatabaseTypeOrmModule;
exports.DatabaseTypeOrmModule = DatabaseTypeOrmModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot(data_source_1.dataSource.options)],
        providers: [database_type_orm_service_1.DatabaseTypeOrmService],
        exports: [database_type_orm_service_1.DatabaseTypeOrmService],
    })
], DatabaseTypeOrmModule);
//# sourceMappingURL=database-type-orm.module.js.map