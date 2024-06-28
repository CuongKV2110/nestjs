"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const database_type_orm_service_1 = require("./database-type-orm.service");
describe('DatabaseTypeOrmService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [database_type_orm_service_1.DatabaseTypeOrmService],
        }).compile();
        service = module.get(database_type_orm_service_1.DatabaseTypeOrmService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=database-type-orm.service.spec.js.map