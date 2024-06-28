"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const api_admin_module_1 = require("./api-admin.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(api_admin_module_1.ApiAdminModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map