"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const worker_controller_1 = require("./worker.controller");
const worker_service_1 = require("./worker.service");
describe('WorkerController', () => {
    let workerController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [worker_controller_1.WorkerController],
            providers: [worker_service_1.WorkerService],
        }).compile();
        workerController = app.get(worker_controller_1.WorkerController);
    });
    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(workerController.getHello()).toBe('Hello World!');
        });
    });
});
//# sourceMappingURL=worker.controller.spec.js.map