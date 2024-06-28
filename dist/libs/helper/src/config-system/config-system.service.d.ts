import { ConsoleLogger, INestApplication } from '@nestjs/common';
import { StartUrl } from 'libs/constants/enum';
export declare class ConfigSystemService {
    setupSwagger(app: INestApplication, appName: string, version: string, contact: {
        name: string;
        url: string;
        email: string;
    }, startUrl: StartUrl): void;
    setUpLoggerLog4js(): void;
}
export declare class LoggingService extends ConsoleLogger {
    error(message: any, stack?: string, context?: string): void;
}
