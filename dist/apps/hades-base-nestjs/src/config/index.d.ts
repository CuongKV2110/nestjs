import { dataSource } from '@app/database-type-orm/data-source';
import { Environment } from '@app/core/constants/enum';
declare const config: {
    nodeEnv: string;
    port: number;
    appName: string;
    oneSignal: {
        appId: string;
        restKey: string;
    };
    auth: {
        secretOrKey: string;
        accessTokenExpiredIn: string;
        refreshTokenExpiredIn: string;
    };
    sendGrid: {
        sender: string;
        apiKey: string;
    };
    twilio: {
        sid: string;
        authToken: string;
        phoneNumber: string;
    };
    queue: {
        host: string;
        port: string | number;
        prefix: string;
    };
};
export declare const validateConfig: (_config: Record<string, unknown>) => Record<string, unknown>;
export interface IConfigAuth {
    secretOrKey: string;
    accessTokenExpiredIn: string;
    refreshTokenExpiredIn: string;
}
export interface IConfigSendGrid {
    sender: string;
    apiKey: string;
}
export interface IConfigQueue {
    host: string;
    port: number;
    prefix: string;
}
export interface IConfigTwilio {
    sid: string;
    authToken: string;
    phoneNumber: string;
}
export interface IConfigOneSignal {
    restKey: string;
    appId: string;
}
export interface IConfig {
    nodeEnv: Environment;
    port: number;
    auth: IConfigAuth;
    typeORMOptions: typeof dataSource;
    sendGrid: IConfigSendGrid;
    twilio: IConfigTwilio;
    queue: IConfigQueue;
    appName: string;
    oneSignal: IConfigOneSignal;
}
export default config;
