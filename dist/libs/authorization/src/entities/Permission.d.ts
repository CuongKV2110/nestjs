import PermissionGroup from './PermissionGroup';
export default class Permission {
    id: number;
    name: string;
    permissionGroupId: number;
    permissionGroup: PermissionGroup;
}
