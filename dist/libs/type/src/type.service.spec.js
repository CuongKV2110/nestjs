"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const type_service_1 = require("./type.service");
describe('TypeService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [type_service_1.TypeService],
        }).compile();
        service = module.get(type_service_1.TypeService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=type.service.spec.js.map