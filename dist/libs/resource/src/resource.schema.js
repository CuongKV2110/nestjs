"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResourceSingleApiBody = exports.updateStatusResourceApiBody = exports.updateResourceApiBody = exports.createResourceApiBody = exports.getResourceByTypeExampleResponse = exports.getDetailResourceExampleResponse = exports.getListResourceExampleResponse = exports.getResourceInfoExampleResponse = exports.exampleResponse = exports.createResourceSingleSchema = exports.updateStatusResourceSchema = exports.updateResourceSchema = exports.addResourceSchema = exports.listResourceSchema = void 0;
exports.listResourceSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        pageIndex: {
            type: 'integer',
            minimum: 1,
        },
        take: {
            type: 'integer',
            minimum: 1,
        },
        start: {
            type: 'integer',
        },
        skip: {
            type: 'integer',
        },
        sort: {
            type: 'string',
        },
        keyword: {
            type: 'string',
            maxLength: 250,
        },
        status: {
            type: 'string',
            enum: ['', '1', '0'],
        },
        type: {
            pattern: '^$|^\\d+$',
        },
    },
};
exports.addResourceSchema = {
    type: 'object',
    required: ['name', 'type'],
    additionalProperties: false,
    properties: {
        name: {
            type: 'string',
            maxLength: 255,
            minLength: 1,
        },
        type: {
            type: 'number',
        },
        order: {
            type: 'number',
        },
        status: {
            type: 'number',
        },
        value: {
            type: 'string',
        },
    },
};
exports.updateResourceSchema = {
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
        order: {
            type: 'integer',
        },
    },
};
exports.updateStatusResourceSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        status: {
            type: 'number',
        },
    },
};
exports.createResourceSingleSchema = {
    type: 'object',
    required: ['type', 'value'],
    additionalProperties: false,
    properties: {
        name: {
            type: 'string',
            maxLength: 255,
        },
        value: {
            type: 'string',
        },
        type: {
            type: 'number',
        },
        order: {
            type: 'number',
        },
        status: {
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
exports.getResourceInfoExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.getListResourceExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.getDetailResourceExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.getResourceByTypeExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.createResourceApiBody = {
    schema: exports.addResourceSchema,
    description: 'Api Create Resource ',
    examples: { exampleResponse: exports.exampleResponse },
};
exports.updateResourceApiBody = {
    schema: exports.updateResourceSchema,
    description: 'Api Update Resource ',
    examples: { exampleResponse: exports.exampleResponse },
};
exports.updateStatusResourceApiBody = {
    schema: exports.updateStatusResourceSchema,
    description: 'Api Update Status Resource ',
    examples: { exampleResponse: exports.exampleResponse },
};
exports.createResourceSingleApiBody = {
    schema: exports.createResourceSingleSchema,
    description: 'Api Create Resource Single',
    examples: { exampleResponse: exports.exampleResponse },
};
//# sourceMappingURL=resource.schema.js.map