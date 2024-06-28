import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { IConfig } from 'apps/hades-base-nestjs/src/config';
export declare class OneSignal {
    private readonly configService;
    private readonly dataSource;
    client: any;
    memberTag: string;
    isReceivedNotificationTag: string;
    constructor(configService: ConfigService<IConfig, true>, dataSource: DataSource);
    chunkArray(memberIds: number[], chunkSize: number): any[];
    removeBlank(str: string): string;
    sendNotificationWithPlayerIds(playerIds: string[], title: any, content: any, data: any): Promise<void>;
    adminPushNotificationToAllMember(content: string, data: any): Promise<void>;
    pushNotification(memberIds: number[], title: string, content: string, data: any, playerIds?: string[]): Promise<void>;
}
