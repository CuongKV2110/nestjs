"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const jwt_authentication_service_1 = require("./jwt-authentication.service");
describe('JwtAuthenticationService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [jwt_authentication_service_1.JwtAuthenticationService],
        }).compile();
        service = module.get(jwt_authentication_service_1.JwtAuthenticationService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=jwt-authentication.service.spec.js.map