import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { StartUrl } from 'libs/constants/enum';
import { SetupServerCommon } from 'libs/constants/setup-server';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
    cors: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  await SetupServerCommon(app, 3000, StartUrl.CLIENT);
}
bootstrap();
