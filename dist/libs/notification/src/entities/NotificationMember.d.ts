import { ReadNotification } from '../../../core/src/constants/enum';
export default class NotificationMember {
    notificationId: number;
    memberId: number;
    isRead: ReadNotification;
    status: number;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}
