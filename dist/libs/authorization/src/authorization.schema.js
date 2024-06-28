"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserPermissionApiBody = exports.updateRolePermissionApiBody = exports.hiddenRoleApiBody = exports.updateRoleApiBody = exports.addRoleApiBody = exports.userPermissionExampleResponse = exports.listRolePermissionExampleResponse = exports.listUserPermissionExampleResponse = exports.addRoleExampleResponse = exports.listRoleExampleResponse = exports.listPermissionExampleResponse = exports.exampleResponse = exports.updateRolePermissionsSchema = exports.updateUserPermissionSchema = exports.updateRoleSchema = exports.addRoleSchema = void 0;
exports.addRoleSchema = {
    type: 'object',
    required: ['name'],
    additionalProperties: false,
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
        },
    },
};
exports.updateRoleSchema = {
    type: 'object',
    required: ['name'],
    additionalProperties: false,
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            maxLength: 255,
        },
    },
};
exports.updateUserPermissionSchema = {
    type: 'object',
    required: [],
    additionalProperties: false,
    properties: {
        permissions: {
            type: 'array',
            minItems: 1,
            maxItems: 100,
            items: {
                type: 'integer',
                minimum: 1,
            },
        },
    },
};
exports.updateRolePermissionsSchema = {
    type: 'object',
    required: ['permissions', 'changeUserPermission'],
    additionalProperties: false,
    properties: {
        permissions: {
            type: 'array',
            items: {
                type: 'number',
                minimum: 1,
                maximum: 998,
            },
            minItems: 0,
        },
        changeUserPermission: {
            enum: [0, 1],
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
exports.listPermissionExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: [
                {
                    id: 1,
                    name: 'PERMISSION_MANAGEMENT',
                    permissionGroupId: 1,
                },
                {
                    id: 2,
                    name: 'CONFIG_MANAGEMENT',
                    permissionGroupId: 1,
                },
                {
                    id: 3,
                    name: 'RESOURCE_MANAGEMENT',
                    permissionGroupId: 1,
                },
                {
                    id: 4,
                    name: 'LANGUAGE_MANAGEMENT',
                    permissionGroupId: 1,
                },
            ],
        },
    },
};
exports.listRoleExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: [
                {
                    id: 1,
                    name: 'Role 1',
                    isSystem: 0,
                    isVisible: 1,
                },
                {
                    id: 2,
                    name: 'Role 2',
                    isSystem: 0,
                    isVisible: 1,
                },
            ],
        },
    },
};
exports.addRoleExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: {
                id: 1,
                name: 'Role 1',
                isSystem: 0,
                isVisible: 1,
            },
        },
    },
};
exports.listUserPermissionExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: {
                'Common Permission': [
                    {
                        id: 1,
                        name: 'PERMISSION_MANAGEMENT',
                        permissionGroupId: 1,
                        hasPermission: 0,
                    },
                    {
                        id: 2,
                        name: 'CONFIG_MANAGEMENT',
                        permissionGroupId: 1,
                        hasPermission: 0,
                    },
                    {
                        id: 3,
                        name: 'RESOURCE_MANAGEMENT',
                        permissionGroupId: 1,
                        hasPermission: 0,
                    },
                    {
                        id: 4,
                        name: 'LANGUAGE_MANAGEMENT',
                        permissionGroupId: 1,
                        hasPermission: 0,
                    },
                ],
            },
        },
    },
};
exports.listRolePermissionExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.userPermissionExampleResponse = {
    status: 200,
    description: 'Response data example',
    schema: {
        example: {
            data: null,
        },
    },
};
exports.addRoleApiBody = {
    schema: exports.addRoleSchema,
    description: 'Api Add Role',
    examples: { exampleResponse: exports.exampleResponse },
};
exports.updateRoleApiBody = {
    schema: exports.updateRoleSchema,
    description: 'Api Update Role',
    examples: { exampleResponse: exports.exampleResponse },
};
exports.hiddenRoleApiBody = {
    description: 'Api Hidden Role',
    examples: { exampleResponse: exports.exampleResponse },
};
exports.updateRolePermissionApiBody = {
    schema: exports.updateRolePermissionsSchema,
    description: 'Api Update Role Permission',
    examples: { exampleResponse: exports.exampleResponse },
};
exports.updateUserPermissionApiBody = {
    schema: exports.updateUserPermissionSchema,
    description: 'Api Update  User Permission',
    examples: { exampleResponse: exports.exampleResponse },
};
//# sourceMappingURL=authorization.schema.js.map