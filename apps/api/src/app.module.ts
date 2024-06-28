import { LoggerReqMiddleware } from '@app/core/middlewares/logger.middleware';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IConfig } from 'libs/constants/configuration-env';
import { Environment } from 'libs/constants/enum';
import { IMPORT_MODULE_COMMON, PROVIDERS_MODULE_COMMON } from 'libs/constants/libary-server';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from './database/datasource';
import { ChatModule } from './modules/chat/chat.module';
import { LogworkModule } from './modules/logwork/logwork.module';
import { ProjectModule } from './modules/project/project.module';
import { RequestModule } from './modules/request/request.module';
import { UserModule } from './modules/user/use.module';

@Module({
  imports: [
    ...IMPORT_MODULE_COMMON,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    RequestModule,
    LogworkModule,
    ChatModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [...PROVIDERS_MODULE_COMMON, AppService],
})
export class AppModule {
  constructor(private configService: ConfigService<IConfig, true>) { }

  configure(consumer: MiddlewareConsumer) {
    const nodeEnv = this.configService.get<Environment>('nodeEnv');

    if (![Environment.Production].includes(nodeEnv)) {
      consumer.apply(LoggerReqMiddleware).forRoutes('*');
    }
  }
}
