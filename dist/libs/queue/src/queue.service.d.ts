import { QueueName } from '@app/core/constants/enum';
import Bull, { Queue } from 'bull';
export declare class QueueService {
    private readonly sendMailQueue;
    private readonly pushNotificationQueue;
    private readonly logger;
    constructor(sendMailQueue: Queue, pushNotificationQueue: Queue);
    addSendMailQueue(name: QueueName, data: any, opts?: Bull.JobOptions): Promise<void>;
    addAdminPushNotificationToAllMember(name: QueueName, data: any, opts?: Bull.JobOptions): Promise<void>;
    addSendNotificationWithPlayerIds(name: QueueName, data: any, opts?: Bull.JobOptions): Promise<void>;
    addPushNotification(name: QueueName, data: any, opts?: Bull.JobOptions): Promise<void>;
}
