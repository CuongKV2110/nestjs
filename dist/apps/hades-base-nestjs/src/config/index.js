"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConfig = void 0;
require('dotenv').config();
const lodash_1 = require("lodash");
const enum_1 = require("@app/core/constants/enum");
const validate_1 = require("@app/core/validate");
const exception_1 = require("@app/core/exception");
const config = {
    nodeEnv: process.env.NODE_ENV || enum_1.Environment.Development,
    port: Number(process.env.PORT) || 3000,
    appName: 'Notification',
    oneSignal: {
        appId: process.env.APP_ID,
        restKey: process.env.REST_KEY,
    },
    auth: {
        secretOrKey: process.env.JWT_SECRET_KEY,
        accessTokenExpiredIn: '10d',
        refreshTokenExpiredIn: '365d',
    },
    sendGrid: {
        sender: process.env.SENDGRID_SENDER,
        apiKey: process.env.SENDGRID_API_KEY,
    },
    twilio: {
        sid: process.env.TWILIO_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
        phoneNumber: process.env.TWILIO_PHONE_NUMBER,
    },
    queue: {
        host: process.env.QUEUE_HOST || 'localhost',
        port: process.env.QUEUE_PORT || 6379,
        prefix: process.env.QUEUE_PREFIX || '',
    },
};
const validateConfigSchema = {
    type: 'object',
    required: ['nodeEnv', 'port'],
    additionalProperties: false,
    properties: {
        nodeEnv: {
            type: 'string',
            enum: Object.values(enum_1.Environment),
        },
        port: {
            type: 'integer',
            minimum: 0,
            default: 3000,
        },
        auth: {
            type: 'object',
            additionalProperties: false,
            properties: {
                secretOrKey: {
                    type: 'string',
                    minLength: 1,
                },
                accessTokenExpiredIn: {
                    type: 'string',
                    minLength: 1,
                },
                refreshTokenExpiredIn: {
                    type: 'string',
                    minLength: 1,
                },
            },
        },
        sendGrid: {
            type: 'object',
            additionalProperties: false,
            properties: {
                sender: {
                    type: 'string',
                    minLength: 1,
                    format: 'email',
                },
                apiKey: {
                    type: 'string',
                    minLength: 1,
                },
            },
        },
        twilio: {
            type: 'object',
            additionalProperties: false,
            properties: {
                sid: {
                    type: 'string',
                    minLength: 1,
                },
                authToken: {
                    type: 'string',
                    minLength: 1,
                },
                phoneNumber: {
                    type: 'string',
                    minLength: 1,
                },
            },
        },
        queue: {
            type: 'object',
            additionalProperties: false,
            properties: {
                host: {
                    type: 'string',
                    minLength: 1,
                },
                port: {
                    type: 'integer',
                    minimum: 1,
                },
                prefix: {
                    type: 'string',
                },
            },
        },
        appName: {
            type: 'string',
        },
        oneSignal: {
            type: 'object',
            additionalProperties: false,
            properties: {
                appId: {
                    type: 'string',
                },
                restKey: {
                    type: 'string',
                },
            },
        },
    },
};
const validateConfig = (_config) => {
    var _a;
    const validate = validate_1.AjvInstance.validate(validateConfigSchema, config);
    if (!validate) {
        console.error('validateConfig', validate_1.AjvInstance === null || validate_1.AjvInstance === void 0 ? void 0 : validate_1.AjvInstance.errors);
        if (((_a = validate_1.AjvInstance === null || validate_1.AjvInstance === void 0 ? void 0 : validate_1.AjvInstance.errors) === null || _a === void 0 ? void 0 : _a.length) === 1) {
            throw new exception_1.UnprocessableEntity((0, lodash_1.first)(validate_1.AjvInstance.errors));
        }
        else {
            throw new exception_1.UnprocessableEntity(validate_1.AjvInstance.errors);
        }
    }
    return _config;
};
exports.validateConfig = validateConfig;
exports.default = config;
//# sourceMappingURL=index.js.map