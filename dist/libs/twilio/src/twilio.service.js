"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TwilioService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioService = void 0;
const common_1 = require("@nestjs/common");
const twilio = __importStar(require("twilio"));
const twilio_module_definition_1 = require("./twilio.module-definition");
let TwilioService = TwilioService_1 = class TwilioService {
    constructor(options) {
        this.options = options;
        this.logger = new common_1.Logger(TwilioService_1.name);
        this.client = twilio(options.sid, options.authToken);
    }
    async sendSms(phone, body) {
        try {
            if (phone.startsWith('84') || phone.startsWith('84'))
                phone = '+' + phone;
            if (phone.startsWith('0'))
                phone = '+84' + phone.substring(1);
            const from = this.options.phoneNumber;
            const sendSms = await this.client.messages.create({
                body,
                from,
                to: phone,
            });
            this.logger.log(`SEND SMS PHONE: ${phone} DONE | ID: ${sendSms.sid}`);
        }
        catch (error) {
            this.logger.error(error);
        }
    }
};
exports.TwilioService = TwilioService;
exports.TwilioService = TwilioService = TwilioService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(twilio_module_definition_1.MODULE_OPTIONS_TOKEN)),
    __metadata("design:paramtypes", [Object])
], TwilioService);
//# sourceMappingURL=twilio.service.js.map