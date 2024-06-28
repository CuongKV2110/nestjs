"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingService = exports.ConfigSystemService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const log4js_1 = require("log4js");
let ConfigSystemService = class ConfigSystemService {
    setupSwagger(app, appName, version, contact, startUrl) {
        const documentBuilder = new swagger_1.DocumentBuilder()
            .setTitle(`${appName} api documentation`)
            .setDescription('Develop by Dev grass')
            .setVersion(version)
            .setContact(contact.name, contact.url, contact.email)
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, documentBuilder);
        swagger_1.SwaggerModule.setup(`${startUrl}/api`, app, document);
    }
    setUpLoggerLog4js() {
        (0, log4js_1.configure)({
            appenders: {
                console: {
                    type: 'console',
                },
                errorFile: {
                    type: 'dateFile',
                    filename: 'logs/error.log',
                    keepFileExt: true,
                    numBackups: 10,
                },
                errors: {
                    type: 'logLevelFilter',
                    level: 'ERROR',
                    appender: 'errorFile',
                },
            },
            categories: {
                default: { appenders: ['console', 'errors'], level: 'debug' },
            },
        });
    }
};
exports.ConfigSystemService = ConfigSystemService;
exports.ConfigSystemService = ConfigSystemService = __decorate([
    (0, common_2.Injectable)()
], ConfigSystemService);
class LoggingService extends common_1.ConsoleLogger {
    error(message, stack, context) {
        (0, log4js_1.getLogger)(context).error(stack, message);
    }
}
exports.LoggingService = LoggingService;
//# sourceMappingURL=config-system.service.js.map