"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupServerCommon = void 0;
const helmet_1 = __importDefault(require("helmet"));
const express_1 = require("express");
const config_system_service_1 = require("@app/helper/config-system/config-system.service");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
async function SetupServerCommon(app, port, startUrl) {
    const configService = app.get(config_1.ConfigService);
    const configSystemService = app.get(config_system_service_1.ConfigSystemService);
    const appName = configService.get('appName', '');
    const contact = configService.get('contact') || { name: '', email: '', url: '' };
    const logger = new common_1.Logger(`${appName}:${startUrl}`);
    configSystemService.setUpLoggerLog4js();
    configSystemService.setupSwagger(app, appName, '1.0', contact, startUrl);
    app.useLogger(new config_system_service_1.LoggingService());
    app.set('trust proxy', 1);
    app.use((0, helmet_1.default)());
    app.use((0, express_1.json)({ limit: '150mb' }));
    await app.listen(port, () => {
        logger.log(`=== app ${appName} service ${startUrl} running on port: ${port}. pid: ${process.pid} ===`);
    });
}
exports.SetupServerCommon = SetupServerCommon;
//# sourceMappingURL=setup-server.js.map