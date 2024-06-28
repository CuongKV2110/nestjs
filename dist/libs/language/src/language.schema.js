"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFileLanguageApiBody = exports.updateLanguageKeyApiBody = exports.addLanguageKeyApiBody = exports.updateLanguageApiBody = exports.addLanguageApiBody = exports.listEnvironmentsExampleResponse = exports.getFileLanguageExampleResponse = exports.listLanguageKeyResponse = exports.getListLanguageResponse = exports.getLanguageInfoExampleResponse = exports.exampleResponse = exports.updateFileLanguageSchema = exports.updateLanguageKeySchema = exports.addLanguageKeySchema = exports.updateLanguageSchema = exports.addLanguageSchema = void 0;
exports.addLanguageSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        code: {
            type: 'string',
            minLength: 1,
            maxLength: 50,
        },
        name: {
            type: 'string',
            minLength: 1,
            maxLength: 50,
        },
        status: {
            type: 'integer',
        },
        viName: {
            type: 'string',
            minLength: 1,
            maxLength: 50,
        },
        priority: {
            type: 'integer',
        },
        flagIcon: {
            type: 'string',
            minLength: 1,
            maxLength: 50,
        },
        isDefault: {
            type: 'integer',
        },
    },
};
exports.updateLanguageSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        code: {
            type: 'string',
            minLength: 1,
            maxLength: 50,
        },
        name: {
            type: 'string',
            minLength: 1,
            maxLength: 50,
        },
        status: {
            type: 'integer',
        },
        viName: {
            type: 'string',
            minLength: 1,
            maxLength: 50,
        },
        priority: {
            type: 'integer',
        },
        flagIcon: {
            type: 'string',
            minLength: 1,
            maxLength: 50,
        },
        isDefault: {
            type: 'integer',
            default: 1,
        },
    },
};
exports.addLanguageKeySchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        key: {
            type: 'string',
            minLength: 1,
            maxLength: 500,
        },
        defaultValue: {
            type: 'string',
            minLength: 1,
            maxLength: 500,
        },
        environment: {
            type: 'string',
            minLength: 1,
            maxLength: 50,
        },
        translations: {
            type: 'array',
            items: {
                properties: {
                    code: {
                        type: 'string',
                        minLength: 1,
                        maxLength: 500,
                    },
                    value: {
                        type: 'string',
                        minLength: 1,
                        maxLength: 500,
                    },
                    environment: {
                        type: 'string',
                        minLength: 1,
                        maxLength: 50,
                    },
                    key: {
                        type: 'string',
                        minLength: 1,
                        maxLength: 50,
                    },
                },
            },
        },
    },
};
exports.updateLanguageKeySchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        key: {
            type: 'string',
            minLength: 1,
            maxLength: 500,
        },
        defaultValue: {
            type: 'string',
            minLength: 1,
            maxLength: 500,
        },
        environment: {
            type: 'string',
            minLength: 1,
            maxLength: 50,
        },
        translations: {
            type: 'array',
            items: {
                properties: {
                    code: {
                        type: 'string',
                        minLength: 1,
                        maxLength: 500,
                    },
                    value: {
                        type: 'string',
                        minLength: 1,
                        maxLength: 500,
                    },
                    environment: {
                        type: 'string',
                        minLength: 1,
                        maxLength: 50,
                    },
                    key: {
                        type: 'string',
                        minLength: 1,
                        maxLength: 50,
                    },
                },
            },
        },
    },
};
exports.updateFileLanguageSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        environment: {
            type: 'string',
            minLength: 1,
            maxLength: 500,
        },
        code: {
            type: 'string',
            minLength: 1,
            maxLength: 500,
        },
        languages: {
            type: 'string',
            minLength: 1,
            maxLength: 500,
        },
    },
};
exports.exampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.getLanguageInfoExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.getListLanguageResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.listLanguageKeyResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.getFileLanguageExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.listEnvironmentsExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.addLanguageApiBody = {
    schema: exports.addLanguageSchema,
    description: 'Api Add Language ',
    examples: { exampleResponse: exports.exampleResponse },
};
exports.updateLanguageApiBody = {
    schema: exports.updateLanguageSchema,
    description: 'Api Update Language',
    examples: { exampleResponse: exports.exampleResponse },
};
exports.addLanguageKeyApiBody = {
    schema: exports.addLanguageKeySchema,
    description: 'Api Add Language Key',
    examples: { exampleResponse: exports.exampleResponse },
};
exports.updateLanguageKeyApiBody = {
    schema: exports.updateLanguageKeySchema,
    description: 'Api Update Language Key',
    examples: { exampleResponse: exports.exampleResponse },
};
exports.updateFileLanguageApiBody = {
    schema: exports.updateFileLanguageSchema,
    description: 'Api Update File Language',
    examples: { exampleResponse: exports.exampleResponse },
};
//# sourceMappingURL=language.schema.js.map