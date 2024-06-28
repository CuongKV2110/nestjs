"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PushNotificationQueue_1;
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotificationQueue = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const bull_2 = require("bull");
const enum_1 = require("@app/core/constants/enum");
const onesignal_1 = require("@app/notification/onesignal");
let PushNotificationQueue = PushNotificationQueue_1 = class PushNotificationQueue {
    constructor(pushNotificationService) {
        this.pushNotificationService = pushNotificationService;
        this.logger = new common_1.Logger(PushNotificationQueue_1.name);
    }
    async handlePushNotificationAllMemberQueue(job) {
        this.logger.log('push-notification-to-all-member - handle : ', job.data);
        const { content, payload } = job.data;
        await this.pushNotificationService.adminPushNotificationToAllMember(content, payload);
    }
    async handlePushNotificationWithPlayerIdQueue(job) {
        this.logger.log('push-notification-with-player-id - handle : ', job.data);
        const { playerIds, title, content, data } = job.data;
        await this.pushNotificationService.sendNotificationWithPlayerIds(playerIds, title, content, data);
    }
    async handlePushNotificationQueue(job) {
        this.logger.log('push-notification - handle : ', job.data);
        const { memberIds, title, content, data, playerIds } = job.data;
        await this.pushNotificationService.pushNotification(memberIds, title, content, data, playerIds);
    }
    async onCompleted(job, result) {
        this.logger.log(`Queue - Complete: ${job.id}\n`);
    }
    async onQueueFailed(job, err) {
        this.logger.log(`Queue - failed: ${job.id}.\n Reason: ${job.failedReason}\n`);
    }
};
exports.PushNotificationQueue = PushNotificationQueue;
__decorate([
    (0, bull_1.Process)(enum_1.QueueName.ADMIN_PUSH_NOTIFICATION_ALL_MEMBERS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof bull_2.Job !== "undefined" && bull_2.Job) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PushNotificationQueue.prototype, "handlePushNotificationAllMemberQueue", null);
__decorate([
    (0, bull_1.Process)(enum_1.QueueName.PUSH_NOTIFICATION_WITH_PLAYER_ID),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof bull_2.Job !== "undefined" && bull_2.Job) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], PushNotificationQueue.prototype, "handlePushNotificationWithPlayerIdQueue", null);
__decorate([
    (0, bull_1.Process)(enum_1.QueueName.PUSH_NOTIFICATION),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof bull_2.Job !== "undefined" && bull_2.Job) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], PushNotificationQueue.prototype, "handlePushNotificationQueue", null);
__decorate([
    (0, bull_1.OnQueueCompleted)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof bull_2.Job !== "undefined" && bull_2.Job) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", Promise)
], PushNotificationQueue.prototype, "onCompleted", null);
__decorate([
    (0, bull_1.OnQueueFailed)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof bull_2.Job !== "undefined" && bull_2.Job) === "function" ? _f : Object, Error]),
    __metadata("design:returntype", Promise)
], PushNotificationQueue.prototype, "onQueueFailed", null);
exports.PushNotificationQueue = PushNotificationQueue = PushNotificationQueue_1 = __decorate([
    (0, bull_1.Processor)(enum_1.QueueProcessor.PUSH_NOTIFICATION),
    __metadata("design:paramtypes", [typeof (_a = typeof onesignal_1.OneSignal !== "undefined" && onesignal_1.OneSignal) === "function" ? _a : Object])
], PushNotificationQueue);
//# sourceMappingURL=push-notification.processor.js.map