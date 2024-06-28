"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueModule = void 0;
const enum_1 = require("@app/core/constants/enum");
const notification_1 = require("@app/notification");
const send_mail_1 = require("@app/send-mail");
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const push_notification_processor_1 = require("./push-notification.processor");
const queue_service_1 = require("./queue.service");
const send_mail_processor_1 = require("./send-mail.processor");
let QueueModule = class QueueModule {
};
exports.QueueModule = QueueModule;
exports.QueueModule = QueueModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    redis: {
                        host: configService.get('queue').host,
                        port: configService.get('queue').port,
                    },
                    prefix: configService.get('queue').prefix,
                    defaultJobOptions: {
                        removeOnFail: true,
                        removeOnComplete: true,
                        attempts: 10,
                        backoff: {
                            type: 'exponential',
                            delay: 5000,
                        },
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            bull_1.BullModule.registerQueue({
                name: enum_1.QueueProcessor.PUSH_NOTIFICATION,
            }, {
                name: enum_1.QueueProcessor.SEND_MAIL,
            }),
            send_mail_1.SendMailModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => (Object.assign({}, configService.get('sendGrid'))),
                inject: [config_1.ConfigService],
            }),
            notification_1.NotificationModule,
        ],
        providers: [queue_service_1.QueueService, send_mail_processor_1.SendMailQueue, push_notification_processor_1.PushNotificationQueue],
        exports: [queue_service_1.QueueService, send_mail_processor_1.SendMailQueue, push_notification_processor_1.PushNotificationQueue],
    })
], QueueModule);
//# sourceMappingURL=queue.module.js.map