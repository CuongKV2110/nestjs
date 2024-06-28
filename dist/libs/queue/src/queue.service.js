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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var QueueService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueService = void 0;
const enum_1 = require("@app/core/constants/enum");
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const bull_2 = require("bull");
let QueueService = QueueService_1 = class QueueService {
    constructor(sendMailQueue, pushNotificationQueue) {
        this.sendMailQueue = sendMailQueue;
        this.pushNotificationQueue = pushNotificationQueue;
        this.logger = new common_2.Logger(QueueService_1.name);
    }
    async addSendMailQueue(name, data, opts) {
        await this.sendMailQueue.add(name, data, Object.assign({}, opts));
    }
    async addAdminPushNotificationToAllMember(name, data, opts) {
        await this.pushNotificationQueue.add(name, data, Object.assign({}, opts));
    }
    async addSendNotificationWithPlayerIds(name, data, opts) {
        await this.pushNotificationQueue.add(name, data, Object.assign({}, opts));
    }
    async addPushNotification(name, data, opts) {
        await this.pushNotificationQueue.add(name, data, Object.assign({}, opts));
    }
};
exports.QueueService = QueueService;
exports.QueueService = QueueService = QueueService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, bull_1.InjectQueue)(enum_1.QueueName.SEND_MAIL)),
    __param(1, (0, bull_1.InjectQueue)(enum_1.QueueName.PUSH_NOTIFICATION)),
    __metadata("design:paramtypes", [typeof (_a = typeof bull_2.Queue !== "undefined" && bull_2.Queue) === "function" ? _a : Object, typeof (_b = typeof bull_2.Queue !== "undefined" && bull_2.Queue) === "function" ? _b : Object])
], QueueService);
//# sourceMappingURL=queue.service.js.map