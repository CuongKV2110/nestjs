"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const api_admin_controller_1 = require("./api-admin.controller");
const api_admin_service_1 = require("./api-admin.service");
describe('ApiAdminController', () => {
    let apiAdminController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [api_admin_controller_1.ApiAdminController],
            providers: [api_admin_service_1.ApiAdminService],
        }).compile();
        apiAdminController = app.get(api_admin_controller_1.ApiAdminController);
    });
    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(apiAdminController.getHello()).toBe('Hello World!');
        });
    });
});
//# sourceMappingURL=api-admin.controller.spec.js.map