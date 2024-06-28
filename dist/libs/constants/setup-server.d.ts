import { NestExpressApplication } from '@nestjs/platform-express';
import { StartUrl } from './enum';
export declare function SetupServerCommon(app: NestExpressApplication, port: number, startUrl: StartUrl): Promise<void>;
