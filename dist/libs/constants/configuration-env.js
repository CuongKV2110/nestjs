"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.default = () => ({
    nodeEnv: process.env.NODE_ENV,
    portClient: Number(process.env.SERVER_PORT_CLIENT) || 3000,
    portCms: Number(process.env.SERVER_PORT_CMS) || 3001,
    appName: String(process.env.APP_NAME),
    contact: {
        name: process.env.CONTACT_NAME,
        url: process.env.CONTACT_URL,
        email: process.env.CONTACT_EMAIL,
    },
    auth: {
        secretOrKey: process.env.JWT_SECRET_KEY,
        accessTokenExpiredIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN || '10d',
        refreshTokenExpiredIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN || '30d',
        saltRound: Number(process.env.BCRYPT_HASH_ROUNDS),
    },
});
//# sourceMappingURL=configuration-env.js.map