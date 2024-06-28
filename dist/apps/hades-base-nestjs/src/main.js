"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_service_1 = require("@app/core/logging/logging.service");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['log', 'error', 'warn', 'debug', 'verbose'],
    });
    app.set('trust proxy', 1);
    app.useLogger(new logging_service_1.CustomLogger());
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('port', 3000);
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Title Project')
        .setDescription('description of the project')
        .setVersion('1.0')
        .addTag('Tags')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('/api', app, document);
    const logger = new common_1.Logger();
    await app.listen(port, async () => {
        logger.log(`Server running on port: ${port}`);
        logger.log(`Application is running on: ${await app.getUrl()}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map