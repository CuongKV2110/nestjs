"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminApi = exports.IS_ADMIN_API = void 0;
const common_1 = require("@nestjs/common");
exports.IS_ADMIN_API = 'isAdminApi';
const AdminApi = () => (0, common_1.SetMetadata)(exports.IS_ADMIN_API, true);
exports.AdminApi = AdminApi;
//# sourceMappingURL=admin.decorator.js.map