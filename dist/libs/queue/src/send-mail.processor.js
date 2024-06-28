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
var SendMailQueue_1;
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMailQueue = void 0;
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const bull_2 = require("bull");
const enum_1 = require("@app/core/constants/enum");
const send_mail_1 = require("@app/send-mail");
let SendMailQueue = SendMailQueue_1 = class SendMailQueue {
    constructor(sendMailService) {
        this.sendMailService = sendMailService;
        this.logger = new common_1.Logger(SendMailQueue_1.name);
    }
    async handleSendmailQueue(job) {
        this.logger.log('send mail - handle : ', job.data);
        await this.sendMailService.sendMail(job.data);
    }
    async onCompleted(job, result) {
        this.logger.log(`Queue - Complete: ${job.id}\n`);
    }
    async onQueueFailed(job, err) {
        this.logger.log(`Queue - failed: ${job.id}.\n Reason: ${job.failedReason}\n`);
    }
};
exports.SendMailQueue = SendMailQueue;
__decorate([
    (0, bull_1.Process)(enum_1.QueueName.SEND_MAIL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof bull_2.Job !== "undefined" && bull_2.Job) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], SendMailQueue.prototype, "handleSendmailQueue", null);
__decorate([
    (0, bull_1.OnQueueCompleted)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof bull_2.Job !== "undefined" && bull_2.Job) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], SendMailQueue.prototype, "onCompleted", null);
__decorate([
    (0, bull_1.OnQueueFailed)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof bull_2.Job !== "undefined" && bull_2.Job) === "function" ? _d : Object, Error]),
    __metadata("design:returntype", Promise)
], SendMailQueue.prototype, "onQueueFailed", null);
exports.SendMailQueue = SendMailQueue = SendMailQueue_1 = __decorate([
    (0, bull_1.Processor)(enum_1.QueueProcessor.SEND_MAIL),
    __metadata("design:paramtypes", [typeof (_a = typeof send_mail_1.SendMailService !== "undefined" && send_mail_1.SendMailService) === "function" ? _a : Object])
], SendMailQueue);
//# sourceMappingURL=send-mail.processor.js.map