import { DataSource } from 'typeorm';
declare const _default: () => {};
export default _default;
export interface IContact {
    name: string;
    url: string;
    email: string;
}
export interface IConfigAuth {
    secretOrKey: string;
    accessTokenExpiredIn: string;
    refreshTokenExpiredIn: string;
    saltRound: number;
}
export interface IConfig {
    nodeEnv: string;
    portCommon: number;
    portClient: number;
    appName: string;
    contact: IContact;
    typeORMOptions: typeof DataSource;
    auth: IConfigAuth;
}
