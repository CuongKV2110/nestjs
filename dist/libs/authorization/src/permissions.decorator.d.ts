import { Permissions } from "../../core/src/constants/enum";
export declare const PERMISSIONS_KEY = "permissions";
export declare const RequirePermissions: (...permissions: Permissions[]) => import("@nestjs/common").CustomDecorator<string>;
