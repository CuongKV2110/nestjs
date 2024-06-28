import { ConsoleLogger } from '@nestjs/common';
export declare class CustomLogger extends ConsoleLogger {
    error(message: any, stack?: string, context?: string): void;
}
