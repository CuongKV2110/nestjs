"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateConfigApiBody = exports.detailConfigExampleResponse = exports.getConfigInfoExampleResponse = exports.exampleResponse = exports.updateConfigSchema = void 0;
exports.updateConfigSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        name: {
            type: 'string',
            maxLength: 255,
            minLength: 1,
        },
        value: {
            type: 'string',
        },
        type: {
            type: 'string',
            maxLength: 50,
        },
        order: {
            type: 'number',
        },
        isSystem: {
            type: 'number',
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
exports.getConfigInfoExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.detailConfigExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.updateConfigApiBody = {
    schema: exports.updateConfigSchema,
    description: 'Api Update Config ',
    examples: { exampleResponse: exports.exampleResponse },
};
//# sourceMappingURL=config.schema.js.map