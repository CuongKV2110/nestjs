import { MiddlewareConsumer } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfig } from '../config';
export declare class AppModule {
    private configService;
    constructor(configService: ConfigService<IConfig, true>);
    configure(consumer: MiddlewareConsumer): void;
}
