import { TwilioModuleOptions } from './twilio.interface';
export declare class TwilioService {
    readonly options: TwilioModuleOptions;
    private readonly logger;
    private readonly client;
    constructor(options: TwilioModuleOptions);
    sendSms(phone: string, body: string): Promise<void>;
}
