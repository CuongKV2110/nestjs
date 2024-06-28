"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationEntities = void 0;
const Role_1 = __importDefault(require("./Role"));
const Permission_1 = __importDefault(require("./Permission"));
const RolePermission_1 = __importDefault(require("./RolePermission"));
const PermissionGroup_1 = __importDefault(require("./PermissionGroup"));
const UserPermission_1 = __importDefault(require("./UserPermission"));
exports.AuthorizationEntities = [Permission_1.default, Role_1.default, RolePermission_1.default, PermissionGroup_1.default, UserPermission_1.default];
exports.default = exports.AuthorizationEntities;
//# sourceMappingURL=index.js.map