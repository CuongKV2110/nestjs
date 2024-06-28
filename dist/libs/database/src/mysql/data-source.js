"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataTaskManagerSource = void 0;
require('dotenv').config();
const typeorm_1 = require("typeorm");
const Z_Index_1 = __importDefault(require("./entities/Z-Index"));
const Z_Index_2 = __importDefault(require("./migrations/Z-Index"));
exports.dataTaskManagerSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.MYSQL_MAIN_HOST,
    port: Number(process.env.MYSQL_MAIN_PORT),
    username: process.env.MYSQL_MAIN_USER,
    password: process.env.MYSQL_MAIN_PASS,
    database: process.env.MYSQL_MAIN_DB,
    timezone: 'Z',
    charset: 'utf8mb4',
    bigNumberStrings: false,
    entities: [...Z_Index_1.default],
    migrations: [...Z_Index_2.default],
    subscribers: [],
    synchronize: false,
    logging: process.env.NODE_ENV !== 'production',
    name: 'db1',
});
//# sourceMappingURL=data-source.js.map