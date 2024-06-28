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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneSignal = void 0;
const enum_1 = require("@app/core/constants/enum");
const utils_1 = require("@app/helpers/utils");
const lodash_1 = require("lodash");
const onesignal_node_1 = require("onesignal-node");
require('dotenv').config();
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const Notification_1 = __importDefault(require("./entities/Notification"));
let OneSignal = class OneSignal {
    constructor(configService, dataSource) {
        this.configService = configService;
        this.dataSource = dataSource;
        this.client = new onesignal_node_1.Client(configService.get('oneSignal').appId, configService.get('oneSignal').restKey);
        this.memberTag =
            configService.get('nodeEnv') !== enum_1.Environment.Production
                ? `${configService.get('nodeEnv')}_memberId`
                : 'memberId';
        this.isReceivedNotificationTag =
            configService.get('nodeEnv') !== enum_1.Environment.Production
                ? `${configService.get('nodeEnv')}_isReceivedNotification`
                : 'isReceivedNotification';
    }
    chunkArray(memberIds, chunkSize) {
        let index = 0;
        const arrayLength = memberIds.length;
        const tempArray = [];
        for (index = 0; index < arrayLength; index += chunkSize) {
            const myChunk = memberIds.slice(index, index + chunkSize);
            tempArray.push(myChunk);
        }
        return tempArray;
    }
    removeBlank(str) {
        return str.split(' ').join('');
    }
    async sendNotificationWithPlayerIds(playerIds, title, content, data) {
        const notification = {
            headings: {
                en: title,
                ja: title,
                vi: title,
            },
            contents: {
                en: content,
                ja: content,
                vi: content,
            },
            data,
            android_group: `${this.removeBlank(this.configService.get('appName'))}_notification`,
            adm_group: `${this.removeBlank(this.configService.get('appName'))}_notification`,
            thread_id: `${this.removeBlank(this.configService.get('appName'))}_notification`,
            include_player_ids: playerIds,
        };
        await this.client.createNotification(notification);
    }
    async adminPushNotificationToAllMember(content, data) {
        const notification = {
            headings: {
                en: this.removeBlank(this.configService.get('appName')),
                ja: this.removeBlank(this.configService.get('appName')),
                vi: this.removeBlank(this.configService.get('appName')),
            },
            contents: {
                en: content,
                ja: content,
                vi: content,
            },
            data,
            android_group: `${this.configService.get('appName')}_notification`,
            adm_group: `${this.configService.get('appName')}_notification`,
            thread_id: `${this.configService.get('appName')}_notification`,
            filters: [
                {
                    field: 'tag',
                    key: this.memberTag,
                    relation: 'exists',
                },
                {
                    field: 'tag',
                    key: this.isReceivedNotificationTag,
                    relation: '=',
                    value: 'true',
                },
            ],
        };
        await this.client.createNotification(notification);
    }
    async pushNotification(memberIds, title, content, data, playerIds) {
        const notificationRepository = this.dataSource.getRepository(Notification_1.default);
        content = (0, utils_1.substrContent)(content, 100);
        title = (0, utils_1.substrContent)(title, 100);
        if (playerIds && playerIds.length && (0, lodash_1.first)(playerIds)) {
            await this.sendNotificationWithPlayerIds(playerIds, title, content, data);
            return;
        }
        if (!memberIds.length)
            return;
        const memberIdChunk = this.chunkArray(memberIds, 100);
        for (const memberIdsItem of memberIdChunk) {
            const filters = [];
            memberIdsItem.forEach((x) => {
                if (filters.length > 0) {
                    filters.push({
                        operator: 'OR',
                    });
                    filters.push({
                        field: 'tag',
                        key: this.memberTag,
                        relation: '=',
                        value: x,
                    });
                }
                else {
                    filters.push({
                        field: 'tag',
                        key: this.memberTag,
                        relation: '=',
                        value: x,
                    });
                }
            });
            let uuid = (0, uuid_1.v4)();
            const notification = {
                headings: {
                    en: title,
                    ja: title,
                    vi: title,
                },
                contents: {
                    en: content,
                    ja: content,
                    vi: content,
                },
                data,
                android_group: `${data.type}_${data.redirectType}_${data.redirectId}${this.removeBlank(this.configService.get('appName'))}_notification`,
                adm_group: `${data.type}_${data.redirectType}_${data.redirectId}${this.removeBlank(this.configService.get('appName'))}_notification`,
                thread_id: `${data.type}_${data.redirectType}_${data.redirectId}${this.removeBlank(this.configService.get('appName'))}_notification`,
                filters,
                collapse_id: uuid,
            };
            const notificationOnesignal = await this.client.createNotification(notification);
            if (notificationOnesignal.statusCode === 200) {
                await notificationRepository.update({ id: data.notificationId }, { uuid: Number(uuid) });
            }
        }
    }
};
exports.OneSignal = OneSignal;
exports.OneSignal = OneSignal = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_1.DataSource])
], OneSignal);
//# sourceMappingURL=onesignal.js.map