import { RoleId } from '../../core/src/constants/enum';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: RoleId[]) => import("@nestjs/common").CustomDecorator<string>;
