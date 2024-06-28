"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const core_service_1 = require("./core.service");
describe('CoreService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [core_service_1.CoreService],
        }).compile();
        service = module.get(core_service_1.CoreService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=core.service.spec.js.map