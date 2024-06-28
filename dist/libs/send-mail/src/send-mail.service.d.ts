import { SendMailDto } from './send-mail.dto';
import { SendMailModuleOptions } from './send-mail.interface';
export declare class SendMailService {
    readonly options: SendMailModuleOptions;
    private readonly logger;
    constructor(options: SendMailModuleOptions);
    sendMail(data: SendMailDto): Promise<void>;
}
