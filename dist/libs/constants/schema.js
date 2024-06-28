"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseRefreshToken = exports.responseCheckServer = exports.responseSuccessBasic = void 0;
const common_1 = require("@nestjs/common");
exports.responseSuccessBasic = {
    status: common_1.HttpStatus.OK,
    description: 'Response example',
    schema: {
        example: {
            data: true,
        },
    },
};
exports.responseCheckServer = {
    status: common_1.HttpStatus.OK,
    description: 'Response check server example',
    schema: {
        example: {
            data: '222.252.27.11',
        },
    },
};
exports.responseRefreshToken = {
    status: common_1.HttpStatus.OK,
    description: 'Response check refresh token api',
    schema: {
        example: {
            data: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJ1c2VyVHlwZSI6IlNVUEVSX0FETUlOIiwiaWF0IjoxNjcwNDY1MTE1LCJleHAiOjE2NzMwNTcxMTV9.dwSE0lmdCSiK5OLIU3FxsKBmiPvKpXiKnbUZpQ4uKLc',
        },
    },
};
//# sourceMappingURL=schema.js.map