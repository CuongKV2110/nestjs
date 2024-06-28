import { Job } from 'bull';
import { OneSignal } from '@app/notification/onesignal';
export declare class PushNotificationQueue {
    private readonly pushNotificationService;
    private readonly logger;
    constructor(pushNotificationService: OneSignal);
    handlePushNotificationAllMemberQueue(job: Job<any>): Promise<void>;
    handlePushNotificationWithPlayerIdQueue(job: Job<any>): Promise<void>;
    handlePushNotificationQueue(job: Job<any>): Promise<void>;
    onCompleted(job: Job, result: any): Promise<void>;
    onQueueFailed(job: Job, err: Error): Promise<void>;
}
