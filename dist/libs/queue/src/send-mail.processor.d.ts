import { Job } from 'bull';
import { SendMailService } from '@app/send-mail';
export declare class SendMailQueue {
    private readonly sendMailService;
    private readonly logger;
    constructor(sendMailService: SendMailService);
    handleSendmailQueue(job: Job<any>): Promise<void>;
    onCompleted(job: Job, result: any): Promise<void>;
    onQueueFailed(job: Job, err: Error): Promise<void>;
}
