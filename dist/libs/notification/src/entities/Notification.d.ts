import { NotificationTargetType } from '../../../core/src/constants/enum';
export default class Notification {
    id: number;
    status: number;
    type?: number;
    title?: string;
    url?: string;
    redirect_id: number;
    redirectType?: number;
    targetType: NotificationTargetType;
    uuid: number;
    image: string;
    createBy: number;
    deletedBy: number;
    createdAt?: string;
    updatedAt?: string;
    updatedBy?: number;
    deletedAt?: string;
}
