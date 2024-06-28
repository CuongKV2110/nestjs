"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const scheduler_module_1 = require("./scheduler.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(scheduler_module_1.SchedulerModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map