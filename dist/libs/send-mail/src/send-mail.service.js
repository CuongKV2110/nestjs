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
var SendMailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMailService = void 0;
const common_1 = require("@nestjs/common");
const sgMail = __importStar(require("@sendgrid/mail"));
const send_mail_module_definition_1 = require("./send-mail.module-definition");
let SendMailService = SendMailService_1 = class SendMailService {
    constructor(options) {
        this.options = options;
        this.logger = new common_1.Logger(SendMailService_1.name);
        sgMail.setApiKey(this.options.apiKey);
    }
    async sendMail(data) {
        const mail = {
            from: this.options.sender,
            to: data.receiver,
            subject: data.subject,
            text: data.content,
            html: data.html,
        };
        try {
            const info = await sgMail.send(mail);
            this.logger.log(`Email sent! Info: ${info}`);
        }
        catch (error) {
            this.logger.log('Send mail failed!: ', error.response.body);
        }
    }
};
exports.SendMailService = SendMailService;
exports.SendMailService = SendMailService = SendMailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(send_mail_module_definition_1.MODULE_OPTIONS_TOKEN)),
    __metadata("design:paramtypes", [Object])
], SendMailService);
//# sourceMappingURL=send-mail.service.js.map