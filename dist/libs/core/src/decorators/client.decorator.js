"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientApi = exports.IS_CLIENT_API = void 0;
const common_1 = require("@nestjs/common");
exports.IS_CLIENT_API = 'isCLientApi';
const ClientApi = () => (0, common_1.SetMetadata)(exports.IS_CLIENT_API, true);
exports.ClientApi = ClientApi;
//# sourceMappingURL=client.decorator.js.map