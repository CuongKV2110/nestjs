import RolePermission from './RolePermission';
export default class Role {
    id: number;
    name: string;
    isSystem: number;
    isVisible: number;
    rolePermissions: RolePermission[];
}
