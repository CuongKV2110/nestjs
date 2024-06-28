"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const migrations_1 = __importDefault(require("../../authorization/src/migrations"));
const entities_1 = require("../../authorization/src/entities");
const entities_2 = __importDefault(require("../../../apps/api/src/database/entities"));
const migrations_2 = __importDefault(require("./migrations"));
const entities_3 = __importDefault(require("../../resource/src/entities"));
const entities_4 = __importDefault(require("../../language/src/entities"));
const migrations_3 = __importDefault(require("../../resource/src/migrations"));
const migrations_4 = __importDefault(require("../../language/src/migrations"));
const entities_5 = __importDefault(require("../../config/src/entities"));
const migrations_5 = __importDefault(require("../../config/src/migrations"));
const entities_6 = __importDefault(require("../../notification/src/entities"));
const migrations_6 = __importDefault(require("../../notification/src/migrations"));
require('dotenv').config();
exports.dataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    timezone: 'Z',
    charset: 'utf8mb4',
    bigNumberStrings: false,
    entities: [
        ...entities_2.default,
        ...entities_1.AuthorizationEntities,
        ...entities_3.default,
        ...entities_4.default,
        ...entities_5.default,
        ...entities_6.default,
    ],
    migrations: [
        ...migrations_2.default,
        ...migrations_1.default,
        ...migrations_3.default,
        ...migrations_4.default,
        ...migrations_5.default,
        ...migrations_6.default,
    ],
    subscribers: [],
    synchronize: false,
    logging: process.env.NODE_ENV !== 'production',
});
//# sourceMappingURL=data-source.js.map