import Role from "./Role";
import Permissions from "./Permission";
import RolePermission from "./RolePermission";
import PermissionGroup from "./PermissionGroup";
import UserPermission from "./UserPermission";
export declare const AuthorizationEntities: (typeof PermissionGroup | typeof Permissions | typeof RolePermission | typeof Role | typeof UserPermission)[];
export default AuthorizationEntities;
