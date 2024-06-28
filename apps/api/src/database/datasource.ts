import { DataSource, DataSourceOptions } from "typeorm";
import DefaultEntities from "./entities";
import DefaultMigrations from "./migrations";

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'acms',
    synchronize: true,
    timezone: 'Z',
    charset: 'utf8mb4',
    bigNumberStrings: false,
    entities: [
        ...DefaultEntities
    ],
    migrations: [
        ...DefaultMigrations
    ],
    subscribers: [],
    logging: process.env.NODE_ENV !== 'production',
};
export const dataSource = new DataSource(dataSourceOptions);
