"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientControllers = exports.CmsControllers = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const enum_1 = require("libs/constants/enum");
const CmsControllers = (controllerName) => (target) => {
    const url = `${enum_1.StartUrl.CMS}/${controllerName || ''}`;
    (0, swagger_1.ApiTags)(url)(target);
    (0, common_1.Controller)(url)(target);
};
exports.CmsControllers = CmsControllers;
const ClientControllers = (controllerName) => (target) => {
    const url = `${enum_1.StartUrl.CLIENT}/${controllerName || ''}`;
    (0, swagger_1.ApiTags)(url)(target);
    (0, common_1.Controller)(url)(target);
};
exports.ClientControllers = ClientControllers;
//# sourceMappingURL=controller-customer.decorator.js.map