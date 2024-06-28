"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const scheduler_controller_1 = require("./scheduler.controller");
const scheduler_service_1 = require("./scheduler.service");
describe('SchedulerController', () => {
    let schedulerController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [scheduler_controller_1.SchedulerController],
            providers: [scheduler_service_1.SchedulerService],
        }).compile();
        schedulerController = app.get(scheduler_controller_1.SchedulerController);
    });
    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(schedulerController.getHello()).toBe('Hello World!');
        });
    });
});
//# sourceMappingURL=scheduler.controller.spec.js.map