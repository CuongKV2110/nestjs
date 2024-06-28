/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app.controller.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app.controller.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const controller_customer_decorator_1 = __webpack_require__(/*! @app/core/decorator/controller-customer.decorator */ "./libs/core/src/decorator/controller-customer.decorator.ts");
const public_api_decorator_1 = __webpack_require__(/*! @app/core/decorator/public-api.decorator */ "./libs/core/src/decorator/public-api.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const schema_1 = __webpack_require__(/*! libs/constants/schema */ "./libs/constants/schema.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app.service.ts");
const express_1 = __webpack_require__(/*! express */ "express");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    healthCheck(req) {
        return this.appService.healthCheck(req);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('health-check'),
    (0, public_api_decorator_1.Public)(),
    (0, swagger_1.ApiResponse)(schema_1.responseCheckServer),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "healthCheck", null);
exports.AppController = AppController = __decorate([
    (0, controller_customer_decorator_1.ClientControllers)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./apps/api/src/app.module.ts":
/*!************************************!*\
  !*** ./apps/api/src/app.module.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const logger_middleware_1 = __webpack_require__(/*! @app/core/middlewares/logger.middleware */ "./libs/core/src/middlewares/logger.middleware.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const enum_1 = __webpack_require__(/*! libs/constants/enum */ "./libs/constants/enum.ts");
const libary_server_1 = __webpack_require__(/*! libs/constants/libary-server */ "./libs/constants/libary-server.ts");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app.service.ts");
const datasource_1 = __webpack_require__(/*! ./database/datasource */ "./apps/api/src/database/datasource.ts");
const chat_module_1 = __webpack_require__(/*! ./modules/chat/chat.module */ "./apps/api/src/modules/chat/chat.module.ts");
const logwork_module_1 = __webpack_require__(/*! ./modules/logwork/logwork.module */ "./apps/api/src/modules/logwork/logwork.module.ts");
const project_module_1 = __webpack_require__(/*! ./modules/project/project.module */ "./apps/api/src/modules/project/project.module.ts");
const request_module_1 = __webpack_require__(/*! ./modules/request/request.module */ "./apps/api/src/modules/request/request.module.ts");
const use_module_1 = __webpack_require__(/*! ./modules/user/use.module */ "./apps/api/src/modules/user/use.module.ts");
let AppModule = class AppModule {
    constructor(configService) {
        this.configService = configService;
    }
    configure(consumer) {
        const nodeEnv = this.configService.get('nodeEnv');
        if (![enum_1.Environment.Production].includes(nodeEnv)) {
            consumer.apply(logger_middleware_1.LoggerReqMiddleware).forRoutes('*');
        }
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            ...libary_server_1.IMPORT_MODULE_COMMON,
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 60000,
                    limit: 10,
                },
            ]),
            typeorm_1.TypeOrmModule.forRoot(datasource_1.dataSourceOptions),
            use_module_1.UserModule,
            request_module_1.RequestModule,
            logwork_module_1.LogworkModule,
            chat_module_1.ChatModule,
            project_module_1.ProjectModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [...libary_server_1.PROVIDERS_MODULE_COMMON, app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], AppModule);


/***/ }),

/***/ "./apps/api/src/app.service.ts":
/*!*************************************!*\
  !*** ./apps/api/src/app.service.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    healthCheck(req) {
        return req.ip;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),

/***/ "./apps/api/src/constants/enum.ts":
/*!****************************************!*\
  !*** ./apps/api/src/constants/enum.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageText = exports.GroupChatStatus = exports.PositionOfMember = exports.Environment = exports.TimeDefault = exports.RequestType = exports.RequestProjectType = exports.RequestHandle = exports.MessageStatus = exports.RequestStatus = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType[UserType["EMPLOYEE"] = 1] = "EMPLOYEE";
    UserType[UserType["PM"] = 2] = "PM";
    UserType[UserType["ADMIN"] = 3] = "ADMIN";
})(UserType || (exports.UserType = UserType = {}));
var RequestStatus;
(function (RequestStatus) {
    RequestStatus[RequestStatus["All"] = 0] = "All";
    RequestStatus[RequestStatus["InProgress"] = 1] = "InProgress";
    RequestStatus[RequestStatus["Rejected"] = 2] = "Rejected";
    RequestStatus[RequestStatus["Approved"] = 3] = "Approved";
    RequestStatus[RequestStatus["Cancelled"] = 4] = "Cancelled";
})(RequestStatus || (exports.RequestStatus = RequestStatus = {}));
var MessageStatus;
(function (MessageStatus) {
    MessageStatus[MessageStatus["New"] = 1] = "New";
    MessageStatus[MessageStatus["Sending"] = 2] = "Sending";
    MessageStatus[MessageStatus["Sent"] = 3] = "Sent";
    MessageStatus[MessageStatus["Deleted"] = 4] = "Deleted";
})(MessageStatus || (exports.MessageStatus = MessageStatus = {}));
var RequestHandle;
(function (RequestHandle) {
    RequestHandle[RequestHandle["Approve"] = 1] = "Approve";
    RequestHandle[RequestHandle["Reject"] = 2] = "Reject";
})(RequestHandle || (exports.RequestHandle = RequestHandle = {}));
var RequestProjectType;
(function (RequestProjectType) {
    RequestProjectType[RequestProjectType["Request_PM_Role"] = 1] = "Request_PM_Role";
    RequestProjectType[RequestProjectType["Request_Member_Role"] = 2] = "Request_Member_Role";
})(RequestProjectType || (exports.RequestProjectType = RequestProjectType = {}));
var RequestType;
(function (RequestType) {
    RequestType[RequestType["Request_TimeOff"] = 1] = "Request_TimeOff";
    RequestType[RequestType["Request_Onleave"] = 2] = "Request_Onleave";
})(RequestType || (exports.RequestType = RequestType = {}));
var TimeDefault;
(function (TimeDefault) {
    TimeDefault[TimeDefault["Time_Off"] = 120] = "Time_Off";
    TimeDefault[TimeDefault["On_Leave"] = 8] = "On_Leave";
})(TimeDefault || (exports.TimeDefault = TimeDefault = {}));
var Environment;
(function (Environment) {
    Environment["Development"] = "development";
    Environment["Staging"] = "staging";
    Environment["Production"] = "production";
    Environment["Test"] = "test";
})(Environment || (exports.Environment = Environment = {}));
var PositionOfMember;
(function (PositionOfMember) {
    PositionOfMember[PositionOfMember["Developer"] = 1] = "Developer";
    PositionOfMember[PositionOfMember["Comtor"] = 2] = "Comtor";
    PositionOfMember[PositionOfMember["Tester"] = 3] = "Tester";
    PositionOfMember[PositionOfMember["BA"] = 4] = "BA";
})(PositionOfMember || (exports.PositionOfMember = PositionOfMember = {}));
var GroupChatStatus;
(function (GroupChatStatus) {
    GroupChatStatus[GroupChatStatus["Active"] = 0] = "Active";
    GroupChatStatus[GroupChatStatus["Deleted"] = 1] = "Deleted";
})(GroupChatStatus || (exports.GroupChatStatus = GroupChatStatus = {}));
var MessageText;
(function (MessageText) {
    MessageText["Logout_Success"] = "Logout success";
    MessageText["Logout_Fail"] = "Failed to logout";
    MessageText["Email_Incorrect"] = "Email is incorrect";
    MessageText["Password_Incorrect"] = "Password is incorrect";
    MessageText["Password_Requirement"] = "Password does not meet the required conditions";
    MessageText["Password_Invalid"] = "Password invalid";
    MessageText["Email_Already_Exists"] = "Email already exists";
    MessageText["User_Not_Found"] = "User not found";
    MessageText["Recipent_Not_PM"] = "The recipient of the request is not the PM";
    MessageText["User_Not_PM"] = "This account is not PM";
    MessageText["User_Not_AD"] = "This account is not ADMIN";
    MessageText["Request_Not_Processing"] = "This request is not in processing status";
    MessageText["User_Not_Receiver_Request"] = "This user is not the receiver of this request";
    MessageText["Request_Not_Found"] = "Request not found";
    MessageText["Require_Permission_Update"] = "You do not have permission to update this request";
    MessageText["Require_Permission_Create_Project"] = "You do not have permission to create project";
    MessageText["Require_Permission_Add_Member"] = "You do not have permission to add people to the project";
    MessageText["Member_Already_Exists"] = "All members are already part of the project";
    MessageText["Project_Member_Error"] = "Project Member Error";
    MessageText["Member_Duplicate"] = "ID members duplicated by user created";
    MessageText["Member_Not_Exists"] = "Some members do not exist";
    MessageText["User_Not_Join_Project"] = "User not join this Project";
    MessageText["Logwork_Not_Found"] = "Logwork not found";
    MessageText["ProjectMember_Not_Found"] = "Logwork not found";
    MessageText["Handle_Logwork_Fail"] = "An error occurred while processing the request";
    MessageText["TimeError"] = "The time difference between startTime and endTime exceeds freeTime or is less than 10 minutes";
    MessageText["Time_Not_Enough"] = "You do not have enough time for this request";
    MessageText["TimeOff_Not_Found"] = "Time Off not found";
    MessageText["OnLeave"] = "On Leave not found";
})(MessageText || (exports.MessageText = MessageText = {}));


/***/ }),

/***/ "./apps/api/src/database/datasource.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/database/datasource.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dataSource = exports.dataSourceOptions = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const entities_1 = __importDefault(__webpack_require__(/*! ./entities */ "./apps/api/src/database/entities/index.ts"));
const migrations_1 = __importDefault(__webpack_require__(/*! ./migrations */ "./apps/api/src/database/migrations/index.ts"));
exports.dataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'acms',
    synchronize: true,
    timezone: 'Z',
    charset: 'utf8mb4',
    bigNumberStrings: false,
    entities: [
        ...entities_1.default
    ],
    migrations: [
        ...migrations_1.default
    ],
    subscribers: [],
    logging: process.env.NODE_ENV !== 'production',
};
exports.dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);


/***/ }),

/***/ "./apps/api/src/database/entities/group_chat.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/database/entities/group_chat.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupChat = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_1 = __importDefault(__webpack_require__(/*! ./user */ "./apps/api/src/database/entities/user.ts"));
const group_chat_member_1 = __webpack_require__(/*! ./group_chat_member */ "./apps/api/src/database/entities/group_chat_member.ts");
let GroupChat = class GroupChat {
};
exports.GroupChat = GroupChat;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], GroupChat.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'chat_name',
        type: 'varchar',
        length: 255
    }),
    __metadata("design:type", String)
], GroupChat.prototype, "chatName", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_1.default, user => user.id),
    (0, typeorm_1.Column)({
        name: 'created_by',
        type: 'uuid'
    }),
    __metadata("design:type", String)
], GroupChat.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], GroupChat.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], GroupChat.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'description',
        type: 'varchar',
        length: 100
    }),
    __metadata("design:type", String)
], GroupChat.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_private',
        type: 'tinyint'
    }),
    __metadata("design:type", Number)
], GroupChat.prototype, "isPrivate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'is_deleted',
        type: 'tinyint'
    }),
    __metadata("design:type", Number)
], GroupChat.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => group_chat_member_1.GroupChatMember, groupChatMember => groupChatMember.groupChat),
    __metadata("design:type", Array)
], GroupChat.prototype, "members", void 0);
exports.GroupChat = GroupChat = __decorate([
    (0, typeorm_1.Entity)()
], GroupChat);


/***/ }),

/***/ "./apps/api/src/database/entities/group_chat_member.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/database/entities/group_chat_member.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupChatMember = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const group_chat_1 = __webpack_require__(/*! ./group_chat */ "./apps/api/src/database/entities/group_chat.ts");
let GroupChatMember = class GroupChatMember {
};
exports.GroupChatMember = GroupChatMember;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], GroupChatMember.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'user_id',
        type: 'uuid'
    }),
    __metadata("design:type", String)
], GroupChatMember.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'group_chat_id',
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], GroupChatMember.prototype, "groupChatId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'joined_at',
        type: 'datetime'
    }),
    __metadata("design:type", String)
], GroupChatMember.prototype, "joinedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], GroupChatMember.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], GroupChatMember.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_chat_1.GroupChat, groupChat => groupChat.members),
    (0, typeorm_1.JoinColumn)({ name: "group_chat_id" }),
    __metadata("design:type", typeof (_a = typeof group_chat_1.GroupChat !== "undefined" && group_chat_1.GroupChat) === "function" ? _a : Object)
], GroupChatMember.prototype, "groupChat", void 0);
exports.GroupChatMember = GroupChatMember = __decorate([
    (0, typeorm_1.Entity)()
], GroupChatMember);


/***/ }),

/***/ "./apps/api/src/database/entities/index.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/database/entities/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultEntities = void 0;
const group_chat_1 = __webpack_require__(/*! ./group_chat */ "./apps/api/src/database/entities/group_chat.ts");
const group_chat_member_1 = __webpack_require__(/*! ./group_chat_member */ "./apps/api/src/database/entities/group_chat_member.ts");
const logwork_1 = __webpack_require__(/*! ./logwork */ "./apps/api/src/database/entities/logwork.ts");
const message_1 = __webpack_require__(/*! ./message */ "./apps/api/src/database/entities/message.ts");
const on_leave_1 = __webpack_require__(/*! ./on_leave */ "./apps/api/src/database/entities/on_leave.ts");
const project_1 = __webpack_require__(/*! ./project */ "./apps/api/src/database/entities/project.ts");
const project_user_1 = __webpack_require__(/*! ./project_user */ "./apps/api/src/database/entities/project_user.ts");
const request_1 = __webpack_require__(/*! ./request */ "./apps/api/src/database/entities/request.ts");
const timeoff_1 = __webpack_require__(/*! ./timeoff */ "./apps/api/src/database/entities/timeoff.ts");
const user_1 = __importDefault(__webpack_require__(/*! ./user */ "./apps/api/src/database/entities/user.ts"));
exports.DefaultEntities = [user_1.default, logwork_1.Logwork, project_1.Project, request_1.Request, message_1.Message, timeoff_1.TimeOff, group_chat_1.GroupChat, group_chat_member_1.GroupChatMember, project_user_1.ProjectUser, on_leave_1.OnLeave];
exports["default"] = exports.DefaultEntities;


/***/ }),

/***/ "./apps/api/src/database/entities/logwork.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/database/entities/logwork.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logwork = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const project_1 = __webpack_require__(/*! ./project */ "./apps/api/src/database/entities/project.ts");
const user_1 = __importDefault(__webpack_require__(/*! ./user */ "./apps/api/src/database/entities/user.ts"));
let Logwork = class Logwork {
};
exports.Logwork = Logwork;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], Logwork.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'title',
        type: 'varchar',
        length: 100
    }),
    __metadata("design:type", String)
], Logwork.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'type',
        type: 'tinyint'
    }),
    __metadata("design:type", Number)
], Logwork.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.default, user => user.logwork),
    (0, typeorm_1.Column)({
        name: 'user_id',
        type: 'uuid'
    }),
    __metadata("design:type", String)
], Logwork.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'status',
        type: 'tinyint'
    }),
    __metadata("design:type", Number)
], Logwork.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'work_content',
        type: 'varchar',
        length: 100
    }),
    __metadata("design:type", String)
], Logwork.prototype, "workContent", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_1.Project, project => project.id),
    (0, typeorm_1.Column)({
        name: 'project_id',
        type: 'int'
    }),
    __metadata("design:type", Number)
], Logwork.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'work_date',
        type: 'timestamp',
    }),
    __metadata("design:type", String)
], Logwork.prototype, "workDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'working_hours',
        type: 'float'
    }),
    __metadata("design:type", Number)
], Logwork.prototype, "workingHours", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], Logwork.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'update_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], Logwork.prototype, "updateAt", void 0);
exports.Logwork = Logwork = __decorate([
    (0, typeorm_1.Entity)()
], Logwork);


/***/ }),

/***/ "./apps/api/src/database/entities/message.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/database/entities/message.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const group_chat_1 = __webpack_require__(/*! ./group_chat */ "./apps/api/src/database/entities/group_chat.ts");
const user_1 = __importDefault(__webpack_require__(/*! ./user */ "./apps/api/src/database/entities/user.ts"));
let Message = class Message {
};
exports.Message = Message;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], Message.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'message_content',
        type: 'nvarchar',
    }),
    __metadata("design:type", String)
], Message.prototype, "messageContent", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'status',
        type: 'tinyint',
    }),
    __metadata("design:type", Number)
], Message.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'sender_id',
        type: 'uuid'
    }),
    __metadata("design:type", String)
], Message.prototype, "senderId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'group_chat_id',
        type: 'int'
    }),
    __metadata("design:type", Number)
], Message.prototype, "groupChatId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], Message.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], Message.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.default, user => user.id),
    __metadata("design:type", typeof (_a = typeof user_1.default !== "undefined" && user_1.default) === "function" ? _a : Object)
], Message.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => group_chat_1.GroupChat, groupChat => groupChat.id),
    __metadata("design:type", typeof (_b = typeof group_chat_1.GroupChat !== "undefined" && group_chat_1.GroupChat) === "function" ? _b : Object)
], Message.prototype, "groupChat", void 0);
exports.Message = Message = __decorate([
    (0, typeorm_1.Entity)()
], Message);


/***/ }),

/***/ "./apps/api/src/database/entities/on_leave.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/database/entities/on_leave.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OnLeave = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const request_1 = __webpack_require__(/*! ./request */ "./apps/api/src/database/entities/request.ts");
let OnLeave = class OnLeave {
};
exports.OnLeave = OnLeave;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], OnLeave.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], OnLeave.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'hour',
        type: 'int',
    }),
    __metadata("design:type", Number)
], OnLeave.prototype, "hour", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], OnLeave.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'update_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], OnLeave.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], OnLeave.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => request_1.Request, request => request.id),
    (0, typeorm_1.Column)({
        name: 'request_id'
    }),
    __metadata("design:type", Number)
], OnLeave.prototype, "requestId", void 0);
exports.OnLeave = OnLeave = __decorate([
    (0, typeorm_1.Entity)()
], OnLeave);


/***/ }),

/***/ "./apps/api/src/database/entities/project.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/database/entities/project.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Project = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const project_user_1 = __webpack_require__(/*! ./project_user */ "./apps/api/src/database/entities/project_user.ts");
const user_1 = __importDefault(__webpack_require__(/*! ./user */ "./apps/api/src/database/entities/user.ts"));
let Project = class Project {
};
exports.Project = Project;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], Project.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'project_name',
        type: 'varchar',
        length: 255
    }),
    __metadata("design:type", String)
], Project.prototype, "projectName", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_1.default, user => user.id),
    (0, typeorm_1.Column)({
        name: 'project_manager_id',
        type: 'uuid'
    }),
    __metadata("design:type", String)
], Project.prototype, "projectManagerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", String)
], Project.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", String)
], Project.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'description',
        type: 'varchar',
        length: 255
    }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], Project.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'update_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], Project.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => project_user_1.ProjectUser, projectUser => projectUser.project),
    __metadata("design:type", Array)
], Project.prototype, "projectUsers", void 0);
exports.Project = Project = __decorate([
    (0, typeorm_1.Entity)()
], Project);


/***/ }),

/***/ "./apps/api/src/database/entities/project_user.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/database/entities/project_user.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectUser = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const project_1 = __webpack_require__(/*! ./project */ "./apps/api/src/database/entities/project.ts");
const user_1 = __importDefault(__webpack_require__(/*! ./user */ "./apps/api/src/database/entities/user.ts"));
let ProjectUser = class ProjectUser {
};
exports.ProjectUser = ProjectUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], ProjectUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.default, user => user.id),
    (0, typeorm_1.Column)({
        name: 'user_id',
        type: 'uuid'
    }),
    __metadata("design:type", String)
], ProjectUser.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "total_work_hour",
        type: 'float',
        default: 0
    }),
    __metadata("design:type", Number)
], ProjectUser.prototype, "totalWorkHour", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'project_id',
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], ProjectUser.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'joined_at',
        type: 'datetime'
    }),
    __metadata("design:type", String)
], ProjectUser.prototype, "joinedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], ProjectUser.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'updated_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], ProjectUser.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_1.Project, project => project.projectUsers),
    (0, typeorm_1.JoinColumn)({ name: "project_id" }),
    __metadata("design:type", typeof (_a = typeof project_1.Project !== "undefined" && project_1.Project) === "function" ? _a : Object)
], ProjectUser.prototype, "project", void 0);
exports.ProjectUser = ProjectUser = __decorate([
    (0, typeorm_1.Entity)()
], ProjectUser);


/***/ }),

/***/ "./apps/api/src/database/entities/request.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/database/entities/request.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Request = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_1 = __importDefault(__webpack_require__(/*! ./user */ "./apps/api/src/database/entities/user.ts"));
let Request = class Request {
};
exports.Request = Request;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], Request.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.default, user => user.requests),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_a = typeof user_1.default !== "undefined" && user_1.default) === "function" ? _a : Object)
], Request.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'type',
        type: 'tinyint'
    }),
    __metadata("design:type", Number)
], Request.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'status',
        type: 'tinyint'
    }),
    __metadata("design:type", Number)
], Request.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.default, user => user.receivedRequests),
    (0, typeorm_1.JoinColumn)({ name: 'receiver_request' }),
    __metadata("design:type", typeof (_b = typeof user_1.default !== "undefined" && user_1.default) === "function" ? _b : Object)
], Request.prototype, "receiverRequest", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], Request.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", String)
], Request.prototype, "updatedAt", void 0);
exports.Request = Request = __decorate([
    (0, typeorm_1.Entity)()
], Request);


/***/ }),

/***/ "./apps/api/src/database/entities/timeoff.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/database/entities/timeoff.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeOff = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let TimeOff = class TimeOff {
};
exports.TimeOff = TimeOff;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'id',
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], TimeOff.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], TimeOff.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], TimeOff.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'update_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", String)
], TimeOff.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'start_time',
        type: 'datetime'
    }),
    __metadata("design:type", String)
], TimeOff.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'end_time',
        type: 'datetime'
    }),
    __metadata("design:type", String)
], TimeOff.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], TimeOff.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'request_id',
        type: 'int',
        unsigned: true
    }),
    __metadata("design:type", Number)
], TimeOff.prototype, "requestId", void 0);
exports.TimeOff = TimeOff = __decorate([
    (0, typeorm_1.Entity)()
], TimeOff);


/***/ }),

/***/ "./apps/api/src/database/entities/user.ts":
/*!************************************************!*\
  !*** ./apps/api/src/database/entities/user.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const logwork_1 = __webpack_require__(/*! ./logwork */ "./apps/api/src/database/entities/logwork.ts");
const request_1 = __webpack_require__(/*! ./request */ "./apps/api/src/database/entities/request.ts");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', type: 'varchar', length: 100, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'username', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'role', type: 'tinyint', unsigned: true }),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'refresh_token', type: 'varchar', length: 500, select: false, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "time_wallet",
        type: 'float',
        default: 0
    }),
    __metadata("design:type", Number)
], User.prototype, "timeWallet", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "time_free",
        type: 'float',
        default: 0
    }),
    __metadata("design:type", Number)
], User.prototype, "timeFree", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'datetime', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'datetime', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => request_1.Request, request => request.user),
    __metadata("design:type", Array)
], User.prototype, "requests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => logwork_1.Logwork, logwork => logwork.userId),
    __metadata("design:type", Array)
], User.prototype, "logwork", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => request_1.Request, request => request.receiverRequest),
    __metadata("design:type", Array)
], User.prototype, "receivedRequests", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('user')
], User);
exports["default"] = User;


/***/ }),

/***/ "./apps/api/src/database/migrations/1713782052449-CreateTable.ts":
/*!***********************************************************************!*\
  !*** ./apps/api/src/database/migrations/1713782052449-CreateTable.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTable1713782052449 = void 0;
class CreateTable1713782052449 {
    constructor() {
        this.name = 'CreateTable1713782052449';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`request\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`type\` int NOT NULL, \`receiver_request\` int NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`useridId\` int UNSIGNED NULL, \`receiverRequesId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`email\` varchar(100) NOT NULL, \`password\` varchar(100) NULL, \`username\` varchar(100) NULL, \`role\` tinyint UNSIGNED NOT NULL, \`refresh_token\` varchar(500) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`logwork\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`type\` int NOT NULL, \`user_id\` int NOT NULL, \`status\` int NOT NULL, \`work_content\` varchar(255) NOT NULL, \`project_id\` int NOT NULL, \`work_date\` datetime NOT NULL, \`working_hours\` int NOT NULL, \`created_at\` datetime NOT NULL, \`update_at\` datetime NOT NULL, \`userIdId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`message\` (\`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`message_content\` varchar(255) NOT NULL, \`timestamp\` datetime NOT NULL, \`status\` tinyint UNSIGNED NOT NULL, \`sender_id\` int NOT NULL, \`group_chat_id\` int NOT NULL, \`created_at\` datetime NOT NULL, \`update_at\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project\` (\`id\` int NOT NULL AUTO_INCREMENT, \`project_name\` varchar(255) NOT NULL, \`project_manager_id\` int NOT NULL, \`start_date\` datetime NOT NULL, \`end_date\` datetime NOT NULL, \`description\` varchar(255) NOT NULL, \`created_time\` datetime NOT NULL, \`created_at\` datetime NOT NULL, \`update_at\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`request\` ADD CONSTRAINT \`FK_408c7614db8968fa8edae0284d8\` FOREIGN KEY (\`useridId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`request\` ADD CONSTRAINT \`FK_67c4eee2d57327e5d4da6a15a6d\` FOREIGN KEY (\`receiverRequesId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD CONSTRAINT \`FK_61a09b7223a21bda354ae133f73\` FOREIGN KEY (\`userIdId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP FOREIGN KEY \`FK_61a09b7223a21bda354ae133f73\``);
        await queryRunner.query(`ALTER TABLE \`request\` DROP FOREIGN KEY \`FK_67c4eee2d57327e5d4da6a15a6d\``);
        await queryRunner.query(`ALTER TABLE \`request\` DROP FOREIGN KEY \`FK_408c7614db8968fa8edae0284d8\``);
        await queryRunner.query(`DROP TABLE \`project\``);
        await queryRunner.query(`DROP TABLE \`message\``);
        await queryRunner.query(`DROP TABLE \`logwork\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`request\``);
    }
}
exports.CreateTable1713782052449 = CreateTable1713782052449;


/***/ }),

/***/ "./apps/api/src/database/migrations/1713841352846-AddDataUser.ts":
/*!***********************************************************************!*\
  !*** ./apps/api/src/database/migrations/1713841352846-AddDataUser.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddDataUser1713841352846 = void 0;
class AddDataUser1713841352846 {
    async up(queryRunner) {
        await queryRunner.query(`
            INSERT INTO user (email, password, username, role, refresh_token, created_at, updated_at)
            VALUES ('example1@example.com', '123456', 'kvc1', 1, '', NOW(), NOW())
        `);
        await queryRunner.query(`
            INSERT INTO user (email, password, username, role, refresh_token, created_at, updated_at)
            VALUES ('example2@example.com', '123456', 'kvc2', 2, '', NOW(), NOW())
        `);
        await queryRunner.query(`
            INSERT INTO user (email, password, username, role, refresh_token, created_at, updated_at)
            VALUES ('example3@example.com', '123456', 'kvc3', 3, '', NOW(), NOW())
        `);
    }
    ;
    async down(queryRunner) {
    }
}
exports.AddDataUser1713841352846 = AddDataUser1713841352846;


/***/ }),

/***/ "./apps/api/src/database/migrations/1713847272769-UpdateTypeData.ts":
/*!**************************************************************************!*\
  !*** ./apps/api/src/database/migrations/1713847272769-UpdateTypeData.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateTypeData1713847272769 = void 0;
class UpdateTypeData1713847272769 {
    constructor() {
        this.name = 'UpdateTypeData1713847272769';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`number\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP FOREIGN KEY \`FK_69e295a6a0bc92b1ce88ddaca3d\``);
        await queryRunner.query(`ALTER TABLE \`project\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`project_name\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`project_name\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`description\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`update_at\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`update_at\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`title\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`status\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`work_content\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`work_content\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` CHANGE \`projectIdId\` \`projectIdId\` int UNSIGNED NULL`);
        await queryRunner.query(`ALTER TABLE \`request\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`request\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`request\` ADD \`type\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`group_chat\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`group_chat\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`group_chat\` ADD \`description\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`group_chat_member\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`message\` CHANGE \`id\` \`id\` bigint UNSIGNED NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`message\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`message\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`message\` ADD \`id\` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`time_off\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`time_off\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`time_off\` ADD \`type\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`time_off\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`time_off\` ADD \`status\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD CONSTRAINT \`FK_69e295a6a0bc92b1ce88ddaca3d\` FOREIGN KEY (\`projectIdId\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP FOREIGN KEY \`FK_69e295a6a0bc92b1ce88ddaca3d\``);
        await queryRunner.query(`ALTER TABLE \`time_off\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`time_off\` ADD \`status\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`time_off\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`time_off\` ADD \`type\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`time_off\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`message\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`message\` ADD \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`message\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`message\` CHANGE \`id\` \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`group_chat_member\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`group_chat\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`group_chat\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`group_chat\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`request\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`request\` ADD \`type\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`request\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`logwork\` CHANGE \`projectIdId\` \`projectIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`work_content\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`work_content\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`status\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`update_at\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`update_at\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`project_name\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`project_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD CONSTRAINT \`FK_69e295a6a0bc92b1ce88ddaca3d\` FOREIGN KEY (\`projectIdId\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`number\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`type\` int NOT NULL`);
    }
}
exports.UpdateTypeData1713847272769 = UpdateTypeData1713847272769;


/***/ }),

/***/ "./apps/api/src/database/migrations/1713857905898-ImportData.ts":
/*!**********************************************************************!*\
  !*** ./apps/api/src/database/migrations/1713857905898-ImportData.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImportData1713857905898 = void 0;
class ImportData1713857905898 {
    async up(queryRunner) {
        const x = 5;
        for (let i = 1; i <= x; i++) {
            const userId = i;
            const type = 1;
            const receiverRequestId = 1;
            const now = new Date();
            const createdAt = now.toISOString().slice(0, 19).replace('T', ' ');
            const updateAt = createdAt;
            await queryRunner.query(`
                INSERT INTO Request (user_id, type, receiver_request, created_at, update_at)
                VALUES(${userId}, ${type}, ${receiverRequestId}, '${createdAt}', '${updateAt}'); 
            `);
        }
        for (let i = 1; i <= x; i++) {
            const messageContent = `Nội dung tin nhắn ${i}`;
            const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const status = 1;
            const senderId = 1;
            const groupChatId = 1;
            const createdAt = timestamp;
            const updateAt = timestamp;
            await queryRunner.query(`
                INSERT INTO Message (message_content, timestamp, status, sender_id, group_chat_id, created_at, update_at)
                VALUES('${messageContent}', '${timestamp}', ${status}, ${senderId}, ${groupChatId}, '${createdAt}', '${updateAt}'); 
            `);
        }
        for (let i = 1; i <= x; i++) {
            const projectName = `Dự án số ${i}`;
            const projectManagerId = 1;
            const startDate = '2024-04-23';
            const endDate = '2024-12-31';
            const description = `Mô tả dự án số ${i}`;
            const createdTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const createdAt = createdTime;
            const updateAt = createdTime;
            await queryRunner.query(`
                INSERT INTO Project (project_name, project_manager_id, start_date, end_date, description, created_time, created_at, update_at)
                VALUES('${projectName}', ${projectManagerId}, '${startDate}', '${endDate}', '${description}', '${createdTime}', '${createdAt}', '${updateAt}'); 
            `);
        }
        for (let i = 1; i <= 5; i++) {
            const userId = i;
            const groupChatId = 1;
            const joinedAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const createdAt = joinedAt;
            const updateAt = joinedAt;
            await queryRunner.query(`
                INSERT INTO Group_Chat_Member (user_id, group_chat_id, joined_at, created_at, update_at)
                VALUES(${userId}, ${groupChatId}, '${joinedAt}', '${createdAt}', '${updateAt}'); 
            `);
        }
        for (let i = 1; i <= 5; i++) {
            const title = `Title ${i}`;
            const type = 1;
            const userId = 1;
            const status = 1;
            const workContent = `Nội dung công việc ${i}`;
            const projectId = 1;
            const workDate = '2024-04-23';
            const workingHours = 8;
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const updateAt = createdAt;
            await queryRunner.query(`
                INSERT INTO Logwork (title, type, user_id, status, work_content, project_id, work_date, working_hours, created_at, update_at)
                VALUES('${title}', ${type}, ${userId}, ${status}, '${workContent}', ${projectId}, '${workDate}', ${workingHours}, '${createdAt}', '${updateAt}'); 
            `);
        }
        for (let i = 1; i <= x; i++) {
            const projectId = i;
            const userId = i;
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const updateAt = createdAt;
            await queryRunner.query(`
                INSERT INTO Project_User (project_id, user_id, created_at, update_at)
                VALUES(${projectId}, ${userId}, '${createdAt}', '${updateAt}'); 
            `);
        }
        for (let i = 1; i <= x; i++) {
            const title = `Nghỉ phép ${i}`;
            const type = 1;
            const status = 1;
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const updateAt = createdAt;
            const startTime = '2024-04-23';
            const endTime = '2024-04-25';
            const reason = `Lý do nghỉ ${i}`;
            const requestId = i;
            await queryRunner.query(`
                INSERT INTO Time_Off (title, type, status, created_at, update_at, start_time, end_time, reason, request_id)
                VALUES('${title}', ${type}, ${status}, '${createdAt}', '${updateAt}', '${startTime}', '${endTime}', '${reason}', ${requestId}); 
            `);
        }
        for (let i = 1; i <= x; i++) {
            const chatName = `Nhóm trò chuyện ${i}`;
            const createdBy = 1;
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');
            const updateAt = createdAt;
            const description = `Mô tả nhóm trò chuyện ${i}`;
            const isPrivate = false;
            const isDeleted = false;
            await queryRunner.query(`
                INSERT INTO Group_Chat (chat_name, created_by, created_at, update_at, description, is_private, is_deleted)
                VALUES('${chatName}', ${createdBy}, '${createdAt}', '${updateAt}', '${description}', ${isPrivate ? 1 : 0}, ${isDeleted ? 1 : 0}); 
            `);
        }
    }
    async down(queryRunner) {
    }
}
exports.ImportData1713857905898 = ImportData1713857905898;


/***/ }),

/***/ "./apps/api/src/database/migrations/1714033265119-Add_UserData.ts":
/*!************************************************************************!*\
  !*** ./apps/api/src/database/migrations/1714033265119-Add_UserData.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddUserData1714033265119 = void 0;
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
class AddUserData1714033265119 {
    async up(queryRunner) {
        for (let i = 1; i <= 5; i++) {
            const userId = (0, uuid_1.v4)();
            const email = `user${i}@example.com`;
            const password = `password${i}`;
            const username = `User ${i}`;
            const role = 1;
            const now = new Date();
            const createdAt = now.toISOString().slice(0, 19).replace('T', ' ');
            const updatedAt = createdAt;
            await queryRunner.query(`
                INSERT INTO User (id, email, password, username, role, created_at, updated_at)
                VALUES ('${userId}', '${email}', '${password}', '${username}', ${role}, '${createdAt}', '${updatedAt}');
            `);
        }
    }
    async down(queryRunner) {
    }
}
exports.AddUserData1714033265119 = AddUserData1714033265119;


/***/ }),

/***/ "./apps/api/src/database/migrations/index.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/database/migrations/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultMigrations = void 0;
const _1713782052449_CreateTable_1 = __webpack_require__(/*! ./1713782052449-CreateTable */ "./apps/api/src/database/migrations/1713782052449-CreateTable.ts");
const _1713841352846_AddDataUser_1 = __webpack_require__(/*! ./1713841352846-AddDataUser */ "./apps/api/src/database/migrations/1713841352846-AddDataUser.ts");
const _1713847272769_UpdateTypeData_1 = __webpack_require__(/*! ./1713847272769-UpdateTypeData */ "./apps/api/src/database/migrations/1713847272769-UpdateTypeData.ts");
const _1713857905898_ImportData_1 = __webpack_require__(/*! ./1713857905898-ImportData */ "./apps/api/src/database/migrations/1713857905898-ImportData.ts");
const _1714033265119_Add_UserData_1 = __webpack_require__(/*! ./1714033265119-Add_UserData */ "./apps/api/src/database/migrations/1714033265119-Add_UserData.ts");
exports.DefaultMigrations = [
    _1713782052449_CreateTable_1.CreateTable1713782052449,
    _1713841352846_AddDataUser_1.AddDataUser1713841352846,
    _1713847272769_UpdateTypeData_1.UpdateTypeData1713847272769,
    _1713857905898_ImportData_1.ImportData1713857905898,
    _1714033265119_Add_UserData_1.AddUserData1714033265119
];
exports["default"] = exports.DefaultMigrations;


/***/ }),

/***/ "./apps/api/src/helper/number.validation.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/helper/number.validation.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsNumberNotNull = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let IsNumberNotNull = class IsNumberNotNull {
    transform(value, metadata) {
        if (value === null) {
            throw new common_1.BadRequestException(`${metadata.data} should not be null`);
        }
        if (typeof value === 'string' && value.trim().length === 0) {
            throw new common_1.BadRequestException(`${metadata.data} should not be empty`);
        }
        if (Array.isArray(value) && value.length === 0) {
            throw new common_1.BadRequestException(`${metadata.data} should not be an empty array`);
        }
        if (isNaN(value)) {
            throw new common_1.BadRequestException(`${metadata.data} should be a number`);
        }
        return value;
    }
};
exports.IsNumberNotNull = IsNumberNotNull;
exports.IsNumberNotNull = IsNumberNotNull = __decorate([
    (0, common_1.Injectable)()
], IsNumberNotNull);


/***/ }),

/***/ "./apps/api/src/helper/pagination.ts":
/*!*******************************************!*\
  !*** ./apps/api/src/helper/pagination.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPagination = void 0;
function getPagination(params) {
    if (params.page <= 0 || params.pageSize <= 0) {
        throw new Error("Invalid page or pageSize value.");
    }
    const skip = (params.page - 1) * params.pageSize;
    const take = params.pageSize;
    return { skip, take };
}
exports.getPagination = getPagination;


/***/ }),

/***/ "./apps/api/src/modules/chat/chat.controller.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/modules/chat/chat.controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatController = void 0;
const controller_customer_decorator_1 = __webpack_require__(/*! @app/core/decorator/controller-customer.decorator */ "./libs/core/src/decorator/controller-customer.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const page_size_dto_1 = __webpack_require__(/*! ../../utils/page_size.dto */ "./apps/api/src/utils/page_size.dto.ts");
const auth_guard_1 = __webpack_require__(/*! ../user/auth.guard */ "./apps/api/src/modules/user/auth.guard.ts");
const chat_service_1 = __webpack_require__(/*! ./chat.service */ "./apps/api/src/modules/chat/chat.service.ts");
const add_member_dto_1 = __webpack_require__(/*! ./dto/add_member.dto */ "./apps/api/src/modules/chat/dto/add_member.dto.ts");
const create_group_chat_dto_1 = __webpack_require__(/*! ./dto/create_group_chat.dto */ "./apps/api/src/modules/chat/dto/create_group_chat.dto.ts");
const send_message_dto_1 = __webpack_require__(/*! ./dto/send_message.dto */ "./apps/api/src/modules/chat/dto/send_message.dto.ts");
const view_chat_query_1 = __webpack_require__(/*! ./dto/view_chat_query */ "./apps/api/src/modules/chat/dto/view_chat_query.ts");
let ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    createGroupChat(createGroupChatDto, req) {
        return this.chatService.createGroupChat(createGroupChatDto, req.user);
    }
    getInfoGroupChat() {
        return this.chatService.getInfoGroupChat();
    }
    getListChat(pageSizeDto, req) {
        return this.chatService.getListChat(pageSizeDto, req.user);
    }
    viewChat(viewChatQuery, req) {
        return this.chatService.viewChat(viewChatQuery, req.user);
    }
    sendMessage(body, req) {
        return this.chatService.sendMessage(body, req.user);
    }
    addMember(body) {
        return this.chatService.addMember(body);
    }
    joinGroupChat() {
        return this.chatService.joinGroupChat();
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_group_chat_dto_1.CreateGroupChatDto !== "undefined" && create_group_chat_dto_1.CreateGroupChatDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "createGroupChat", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getInfoGroupChat", null);
__decorate([
    (0, common_1.Get)('list-chat'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof page_size_dto_1.PageSizeDto !== "undefined" && page_size_dto_1.PageSizeDto) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "getListChat", null);
__decorate([
    (0, common_1.Get)('view-chat'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof view_chat_query_1.ViewChatQuery !== "undefined" && view_chat_query_1.ViewChatQuery) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "viewChat", null);
__decorate([
    (0, common_1.Post)('send-message'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof send_message_dto_1.SendMessageDto !== "undefined" && send_message_dto_1.SendMessageDto) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Post)('add-member'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof add_member_dto_1.AddMemberDto !== "undefined" && add_member_dto_1.AddMemberDto) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "addMember", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChatController.prototype, "joinGroupChat", null);
exports.ChatController = ChatController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, controller_customer_decorator_1.ClientControllers)('chat'),
    __metadata("design:paramtypes", [typeof (_a = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _a : Object])
], ChatController);


/***/ }),

/***/ "./apps/api/src/modules/chat/chat.module.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/modules/chat/chat.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const group_chat_1 = __webpack_require__(/*! ../../database/entities/group_chat */ "./apps/api/src/database/entities/group_chat.ts");
const group_chat_member_1 = __webpack_require__(/*! ../../database/entities/group_chat_member */ "./apps/api/src/database/entities/group_chat_member.ts");
const message_1 = __webpack_require__(/*! ../../database/entities/message */ "./apps/api/src/database/entities/message.ts");
const user_1 = __importDefault(__webpack_require__(/*! ../../database/entities/user */ "./apps/api/src/database/entities/user.ts"));
const chat_controller_1 = __webpack_require__(/*! ./chat.controller */ "./apps/api/src/modules/chat/chat.controller.ts");
const chat_service_1 = __webpack_require__(/*! ./chat.service */ "./apps/api/src/modules/chat/chat.service.ts");
let ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule;
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        controllers: [chat_controller_1.ChatController],
        providers: [chat_service_1.ChatService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([group_chat_1.GroupChat, group_chat_member_1.GroupChatMember, message_1.Message, user_1.default]),
        ]
    })
], ChatModule);


/***/ }),

/***/ "./apps/api/src/modules/chat/chat.service.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/modules/chat/chat.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const enum_1 = __webpack_require__(/*! ../../constants/enum */ "./apps/api/src/constants/enum.ts");
const group_chat_1 = __webpack_require__(/*! ../../database/entities/group_chat */ "./apps/api/src/database/entities/group_chat.ts");
const group_chat_member_1 = __webpack_require__(/*! ../../database/entities/group_chat_member */ "./apps/api/src/database/entities/group_chat_member.ts");
const message_1 = __webpack_require__(/*! ../../database/entities/message */ "./apps/api/src/database/entities/message.ts");
const user_1 = __importDefault(__webpack_require__(/*! ../../database/entities/user */ "./apps/api/src/database/entities/user.ts"));
const pagination_1 = __webpack_require__(/*! ../../helper/pagination */ "./apps/api/src/helper/pagination.ts");
let ChatService = class ChatService {
    constructor(groupChatRepository, groupChatMemberRepository, messageRepository) {
        this.groupChatRepository = groupChatRepository;
        this.groupChatMemberRepository = groupChatMemberRepository;
        this.messageRepository = messageRepository;
    }
    async createGroupChat(createGroupChatDto, user) {
        return this.groupChatRepository.manager.transaction(async (transactionalEntityManager) => {
            try {
                const { chatName, isPrivate, description, members } = createGroupChatDto;
                const userRepository = transactionalEntityManager.getRepository(user_1.default);
                const validUsers = await userRepository.findByIds(members);
                if (validUsers.length !== members.length) {
                    throw new Error(enum_1.MessageText.Member_Not_Exists);
                }
                if (members.includes(user.id)) {
                    throw new Error(enum_1.MessageText.Member_Duplicate);
                }
                const newGroupChat = transactionalEntityManager.create(group_chat_1.GroupChat, {
                    chatName,
                    isPrivate,
                    isDeleted: enum_1.GroupChatStatus.Active,
                    description,
                    createdBy: user.id,
                });
                const savedGroupChat = await transactionalEntityManager.save(group_chat_1.GroupChat, newGroupChat);
                members.push(user.id);
                const groupChatMembers = createGroupChatDto.members.map(memberId => ({
                    groupChatId: savedGroupChat.id,
                    userId: memberId,
                    joinedAt: new Date().toISOString(),
                }));
                await transactionalEntityManager.insert(group_chat_member_1.GroupChatMember, groupChatMembers);
                return {
                    success: true,
                };
            }
            catch (error) {
                return {
                    success: false,
                    message: error.message
                };
            }
        });
    }
    async addMember(addMemberDto) {
        try {
            const { groupId, memberId } = addMemberDto;
            const groupChatMembers = await this.groupChatMemberRepository.find({
                where: {
                    groupChatId: addMemberDto.groupId
                }
            });
            const memberIds = [];
            groupChatMembers.forEach(member => {
                memberIds.push(member.userId);
            });
            if (memberIds.includes(memberId)) {
                throw new Error('member was joined');
            }
            else {
                const newGroupChatMember = this.groupChatMemberRepository.create({
                    groupChatId: groupId,
                    userId: memberId,
                    joinedAt: new Date().toString()
                });
                await this.groupChatMemberRepository.save(newGroupChatMember);
                return {
                    success: true,
                };
            }
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async getListChat(pageSizeDto, user) {
        try {
            const { skip, take } = (0, pagination_1.getPagination)(pageSizeDto);
            const groupChats = await this.groupChatRepository
                .createQueryBuilder("groupChat")
                .innerJoin(group_chat_member_1.GroupChatMember, "groupChatMember", "groupChat.id = groupChatMember.groupChatId")
                .where("groupChatMember.userId = :userId", { userId: user.id })
                .select([
                "groupChat.id",
                "groupChat.chatName",
                "groupChat.description",
                "groupChat.isPrivate",
                "groupChat.isDeleted",
                "groupChat.createdBy"
            ])
                .skip(skip)
                .take(take)
                .getMany();
            return {
                success: true,
                data: groupChats
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async sendMessage(sendMessage, user) {
        try {
            const { groupChatId, content } = sendMessage;
            const joinedChat = await this.groupChatMemberRepository.findOne({ where: { groupChatId: groupChatId, userId: user.id } });
            if (!!joinedChat) {
                const newMessage = this.messageRepository.create({
                    groupChatId,
                    senderId: user.id,
                    messageContent: content,
                    status: enum_1.MessageStatus.New
                });
                await this.messageRepository.save(newMessage);
                return {
                    success: true,
                };
            }
            else {
                throw Error("You are not in this chat group");
            }
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async viewChat(viewChatQuery, user) {
        try {
            const { groupChatId, page, pageSize } = viewChatQuery;
            const { skip, take } = (0, pagination_1.getPagination)({
                page: page,
                pageSize: pageSize
            });
            const joinedChat = await this.groupChatMemberRepository.findOne({ where: { groupChatId: groupChatId, userId: user.id } });
            if (!!joinedChat) {
                const chatResponse = await this.messageRepository.find({
                    select: ["id", "messageContent", "senderId", "createdAt"],
                    where: { groupChatId },
                    skip: skip,
                    take: take,
                    order: { createdAt: 'DESC' }
                });
                return {
                    success: true,
                    data: chatResponse
                };
            }
            else {
                throw Error("You are not in this chat group");
            }
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    joinGroupChat() { }
    getInfoGroupChat() { }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(group_chat_1.GroupChat)),
    __param(1, (0, typeorm_1.InjectRepository)(group_chat_member_1.GroupChatMember)),
    __param(2, (0, typeorm_1.InjectRepository)(message_1.Message)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], ChatService);


/***/ }),

/***/ "./apps/api/src/modules/chat/dto/add_member.dto.ts":
/*!*********************************************************!*\
  !*** ./apps/api/src/modules/chat/dto/add_member.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddMemberDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AddMemberDto {
}
exports.AddMemberDto = AddMemberDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AddMemberDto.prototype, "groupId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], AddMemberDto.prototype, "memberId", void 0);


/***/ }),

/***/ "./apps/api/src/modules/chat/dto/create_group_chat.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/modules/chat/dto/create_group_chat.dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateGroupChatDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateGroupChatDto {
}
exports.CreateGroupChatDto = CreateGroupChatDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Chat name must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Chat name is required' }),
    __metadata("design:type", String)
], CreateGroupChatDto.prototype, "chatName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Description must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Description is required' }),
    __metadata("design:type", String)
], CreateGroupChatDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Is private must be an integer' }),
    (0, class_validator_1.Min)(0, { message: 'Is private must be 0 or 1' }),
    (0, class_validator_1.Max)(1, { message: 'Is private must be 0 or 1' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Is private is required' }),
    __metadata("design:type", Number)
], CreateGroupChatDto.prototype, "isPrivate", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Members must be an array' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'Members array must not be empty' }),
    (0, class_validator_1.IsUUID)('4', { each: true, message: 'Each member ID must be a valid UUID' }),
    __metadata("design:type", Array)
], CreateGroupChatDto.prototype, "members", void 0);


/***/ }),

/***/ "./apps/api/src/modules/chat/dto/send_message.dto.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/modules/chat/dto/send_message.dto.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SendMessageDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class SendMessageDto {
}
exports.SendMessageDto = SendMessageDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendMessageDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], SendMessageDto.prototype, "groupChatId", void 0);


/***/ }),

/***/ "./apps/api/src/modules/chat/dto/view_chat_query.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/modules/chat/dto/view_chat_query.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ViewChatQuery = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const page_size_dto_1 = __webpack_require__(/*! apps/api/src/utils/page_size.dto */ "./apps/api/src/utils/page_size.dto.ts");
class ViewChatQuery extends page_size_dto_1.PageSizeDto {
}
exports.ViewChatQuery = ViewChatQuery;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1, { message: 'GroupChatId must be a positive integer' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], ViewChatQuery.prototype, "groupChatId", void 0);


/***/ }),

/***/ "./apps/api/src/modules/logwork/dto/create_logwork.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/modules/logwork/dto/create_logwork.dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateLogworkDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateLogworkDto {
}
exports.CreateLogworkDto = CreateLogworkDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Title must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Title is required' }),
    __metadata("design:type", String)
], CreateLogworkDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Type must be a number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Type is required' }),
    __metadata("design:type", Number)
], CreateLogworkDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Work content must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Work content is required' }),
    __metadata("design:type", String)
], CreateLogworkDto.prototype, "workContent", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Project ID must be a number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Project ID is required' }),
    __metadata("design:type", Number)
], CreateLogworkDto.prototype, "projectId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Work date must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Work date is required' }),
    __metadata("design:type", String)
], CreateLogworkDto.prototype, "workDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Working hours must be a number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Working hours is required' }),
    __metadata("design:type", Number)
], CreateLogworkDto.prototype, "workingHours", void 0);


/***/ }),

/***/ "./apps/api/src/modules/logwork/dto/handle_logwork.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/modules/logwork/dto/handle_logwork.dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HandleLogWorkDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class HandleLogWorkDto {
}
exports.HandleLogWorkDto = HandleLogWorkDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], HandleLogWorkDto.prototype, "logworkId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], HandleLogWorkDto.prototype, "type", void 0);


/***/ }),

/***/ "./apps/api/src/modules/logwork/dto/received_logwork.dto.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/modules/logwork/dto/received_logwork.dto.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReceivedLogWorkDto = void 0;
const page_size_dto_1 = __webpack_require__(/*! apps/api/src/utils/page_size.dto */ "./apps/api/src/utils/page_size.dto.ts");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ReceivedLogWorkDto extends page_size_dto_1.PageSizeDto {
}
exports.ReceivedLogWorkDto = ReceivedLogWorkDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], ReceivedLogWorkDto.prototype, "projectId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], ReceivedLogWorkDto.prototype, "typeRequest", void 0);


/***/ }),

/***/ "./apps/api/src/modules/logwork/dto/update_logwork.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/modules/logwork/dto/update_logwork.dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateLogWorkDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateLogWorkDto {
}
exports.UpdateLogWorkDto = UpdateLogWorkDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UpdateLogWorkDto.prototype, "logworkId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateLogWorkDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateLogWorkDto.prototype, "workContent", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateLogWorkDto.prototype, "workingHour", void 0);


/***/ }),

/***/ "./apps/api/src/modules/logwork/logwork.controller.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/modules/logwork/logwork.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogworkController = void 0;
const controller_customer_decorator_1 = __webpack_require__(/*! @app/core/decorator/controller-customer.decorator */ "./libs/core/src/decorator/controller-customer.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_guard_1 = __webpack_require__(/*! ../user/auth.guard */ "./apps/api/src/modules/user/auth.guard.ts");
const create_logwork_dto_1 = __webpack_require__(/*! ./dto/create_logwork.dto */ "./apps/api/src/modules/logwork/dto/create_logwork.dto.ts");
const handle_logwork_dto_1 = __webpack_require__(/*! ./dto/handle_logwork.dto */ "./apps/api/src/modules/logwork/dto/handle_logwork.dto.ts");
const received_logwork_dto_1 = __webpack_require__(/*! ./dto/received_logwork.dto */ "./apps/api/src/modules/logwork/dto/received_logwork.dto.ts");
const update_logwork_dto_1 = __webpack_require__(/*! ./dto/update_logwork.dto */ "./apps/api/src/modules/logwork/dto/update_logwork.dto.ts");
const logwork_service_1 = __webpack_require__(/*! ./logwork.service */ "./apps/api/src/modules/logwork/logwork.service.ts");
let LogworkController = class LogworkController {
    constructor(logworkService) {
        this.logworkService = logworkService;
    }
    createLogwork(createLogworkDto, req) {
        return this.logworkService.createLogWork(createLogworkDto, req.user);
    }
    logWorkDetail(id) {
        return this.logworkService.logWorkDetail(id);
    }
    receivedLogwork(receivedLogwork) {
        return this.logworkService.receivedLogwork(receivedLogwork);
    }
    handleLogWork(body) {
        return this.logworkService.handleLogWork(body);
    }
    updateLogWork(body, req) {
        return this.logworkService.updateLogWork(body, req.user);
    }
};
exports.LogworkController = LogworkController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_logwork_dto_1.CreateLogworkDto !== "undefined" && create_logwork_dto_1.CreateLogworkDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], LogworkController.prototype, "createLogwork", null);
__decorate([
    (0, common_1.Get)('detail/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LogworkController.prototype, "logWorkDetail", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof received_logwork_dto_1.ReceivedLogWorkDto !== "undefined" && received_logwork_dto_1.ReceivedLogWorkDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], LogworkController.prototype, "receivedLogwork", null);
__decorate([
    (0, common_1.Put)('handle-logwork'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof handle_logwork_dto_1.HandleLogWorkDto !== "undefined" && handle_logwork_dto_1.HandleLogWorkDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], LogworkController.prototype, "handleLogWork", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof update_logwork_dto_1.UpdateLogWorkDto !== "undefined" && update_logwork_dto_1.UpdateLogWorkDto) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", void 0)
], LogworkController.prototype, "updateLogWork", null);
exports.LogworkController = LogworkController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, controller_customer_decorator_1.ClientControllers)('logwork'),
    __metadata("design:paramtypes", [typeof (_a = typeof logwork_service_1.LogworkService !== "undefined" && logwork_service_1.LogworkService) === "function" ? _a : Object])
], LogworkController);


/***/ }),

/***/ "./apps/api/src/modules/logwork/logwork.module.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/modules/logwork/logwork.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogworkModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const logwork_1 = __webpack_require__(/*! ../../database/entities/logwork */ "./apps/api/src/database/entities/logwork.ts");
const project_user_1 = __webpack_require__(/*! ../../database/entities/project_user */ "./apps/api/src/database/entities/project_user.ts");
const logwork_controller_1 = __webpack_require__(/*! ./logwork.controller */ "./apps/api/src/modules/logwork/logwork.controller.ts");
const logwork_service_1 = __webpack_require__(/*! ./logwork.service */ "./apps/api/src/modules/logwork/logwork.service.ts");
let LogworkModule = class LogworkModule {
};
exports.LogworkModule = LogworkModule;
exports.LogworkModule = LogworkModule = __decorate([
    (0, common_1.Module)({
        controllers: [logwork_controller_1.LogworkController],
        providers: [logwork_service_1.LogworkService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([logwork_1.Logwork, project_user_1.ProjectUser])
        ]
    })
], LogworkModule);


/***/ }),

/***/ "./apps/api/src/modules/logwork/logwork.service.ts":
/*!*********************************************************!*\
  !*** ./apps/api/src/modules/logwork/logwork.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogworkService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const enum_1 = __webpack_require__(/*! ../../constants/enum */ "./apps/api/src/constants/enum.ts");
const logwork_1 = __webpack_require__(/*! ../../database/entities/logwork */ "./apps/api/src/database/entities/logwork.ts");
const project_user_1 = __webpack_require__(/*! ../../database/entities/project_user */ "./apps/api/src/database/entities/project_user.ts");
const pagination_1 = __webpack_require__(/*! ../../helper/pagination */ "./apps/api/src/helper/pagination.ts");
let LogworkService = class LogworkService {
    constructor(logworkRepository, projectUserRepository) {
        this.logworkRepository = logworkRepository;
        this.projectUserRepository = projectUserRepository;
    }
    async createLogWork(createLogworkDto, user) {
        try {
            const { title, type, projectId, workContent, workingHours, workDate } = createLogworkDto;
            const isCheckUser = await this.projectUserRepository.findOne({
                where: {
                    projectId: projectId,
                    userId: user.id
                }
            });
            if (!isCheckUser) {
                throw new Error(enum_1.MessageText.User_Not_Join_Project);
            }
            else {
                const newLogwork = this.logworkRepository.create({
                    title: title,
                    type: type,
                    userId: user.id,
                    status: enum_1.RequestStatus.InProgress,
                    workContent: workContent,
                    projectId: projectId,
                    workDate: workDate,
                    workingHours: workingHours
                });
                await this.logworkRepository.save(newLogwork);
                return {
                    success: true
                };
            }
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async logWorkDetail(id) {
        try {
            const logworkDetail = await this.logworkRepository
                .createQueryBuilder('logwork')
                .select([
                'logwork.title AS title',
                'logwork.status AS status',
                'logwork.type AS type',
                'logwork.workContent AS workContent',
                'logwork.workDate AS workDate',
                'logwork.createdAt AS createdAt',
                'logwork.workingHours AS workingHours',
            ])
                .where('logwork.id = :id', { id })
                .getRawOne();
            if (!logworkDetail) {
                throw new Error(enum_1.MessageText.Logwork_Not_Found);
            }
            return {
                success: true,
                data: logworkDetail
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async handleLogWork(handleLogWork) {
        return this.logworkRepository.manager.transaction(async (transactionalEntityManager) => {
            try {
                const { logworkId, type } = handleLogWork;
                const logworkResponse = await transactionalEntityManager.findOne(logwork_1.Logwork, { where: { id: logworkId } });
                if (!logworkResponse) {
                    throw new Error(enum_1.MessageText.Logwork_Not_Found);
                }
                if (type === enum_1.RequestHandle.Approve) {
                    logworkResponse.status = enum_1.RequestStatus.Approved;
                    const projectUser = await transactionalEntityManager.findOne(project_user_1.ProjectUser, {
                        where: {
                            projectId: logworkResponse.projectId,
                            userId: logworkResponse.userId
                        },
                    });
                    if (!projectUser) {
                        throw new Error(enum_1.MessageText.ProjectMember_Not_Found);
                    }
                    projectUser.totalWorkHour = (projectUser.totalWorkHour || 0) + logworkResponse.workingHours;
                    await transactionalEntityManager.save(logwork_1.Logwork, logworkResponse);
                    await transactionalEntityManager.save(project_user_1.ProjectUser, projectUser);
                    return {
                        success: true
                    };
                }
                else if (type === enum_1.RequestHandle.Reject) {
                    logworkResponse.status = enum_1.RequestStatus.Rejected;
                    await transactionalEntityManager.save(logwork_1.Logwork, logworkResponse);
                    return {
                        success: true
                    };
                }
                else {
                    throw new Error(enum_1.MessageText.Handle_Logwork_Fail);
                }
            }
            catch (error) {
                return {
                    success: false,
                    message: error.message
                };
            }
        });
    }
    async receivedLogwork(receivedLogwork) {
        try {
            const { projectId, typeRequest, page, pageSize, } = receivedLogwork;
            const { skip, take } = (0, pagination_1.getPagination)({
                page: page,
                pageSize: pageSize
            });
            let logworkResponse;
            if (typeRequest != enum_1.RequestStatus.All) {
                logworkResponse = await this.logworkRepository.find({
                    where: { projectId, status: typeRequest },
                    skip: skip,
                    take: take
                });
            }
            else {
                logworkResponse = await this.logworkRepository.find({
                    where: { projectId },
                    skip: skip,
                    take: take
                });
            }
            return {
                success: true,
                data: logworkResponse,
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async updateLogWork(updateLogWork, user) {
        try {
            const { logworkId, title, workContent, workingHour } = updateLogWork;
            const logworkResponse = await this.logworkRepository.findOne({ where: { id: logworkId, userId: user.id, status: enum_1.RequestStatus.InProgress } });
            if (!logworkResponse) {
                throw new Error(enum_1.MessageText.Logwork_Not_Found);
            }
            else {
                const projectUser = await this.projectUserRepository.findOne({
                    where: {
                        projectId: logworkResponse.projectId,
                        userId: user.id,
                    },
                });
                if (!projectUser) {
                    throw new Error(enum_1.MessageText.User_Not_Found);
                }
                else {
                    logworkResponse.title = title;
                    logworkResponse.workContent = workContent;
                    logworkResponse.workingHours = workingHour;
                    const projectUser = await this.projectUserRepository.findOne({
                        where: {
                            projectId: logworkResponse.projectId,
                            userId: logworkResponse.userId
                        },
                    });
                    if (!projectUser) {
                        throw new Error(enum_1.MessageText.ProjectMember_Not_Found);
                    }
                    projectUser.totalWorkHour = projectUser.totalWorkHour + workingHour;
                    await this.logworkRepository.manager.transaction(async (transactionalEntityManager) => {
                        await transactionalEntityManager.save(logwork_1.Logwork, logworkResponse);
                        await transactionalEntityManager.save(project_user_1.ProjectUser, projectUser);
                    });
                    return {
                        success: true
                    };
                }
            }
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
};
exports.LogworkService = LogworkService;
exports.LogworkService = LogworkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(logwork_1.Logwork)),
    __param(1, (0, typeorm_1.InjectRepository)(project_user_1.ProjectUser)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], LogworkService);


/***/ }),

/***/ "./apps/api/src/modules/project/dto/add_member.dto.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/modules/project/dto/add_member.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddMemberDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class AddMemberDto {
}
exports.AddMemberDto = AddMemberDto;
__decorate([
    (0, class_validator_1.IsNumber)(undefined, { message: 'ProjectId must be a number' }),
    __metadata("design:type", Number)
], AddMemberDto.prototype, "projectId", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Members must be an array' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'Members array must not be empty' }),
    (0, class_validator_1.IsUUID)('4', { each: true, message: 'Each member ID must be a valid UUID' }),
    __metadata("design:type", Array)
], AddMemberDto.prototype, "listMember", void 0);


/***/ }),

/***/ "./apps/api/src/modules/project/dto/create_project.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/modules/project/dto/create_project.dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProjectDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateProjectDto {
}
exports.CreateProjectDto = CreateProjectDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'ProjectName is required' }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "projectName", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "projectManagerId", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'startDate is required' }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'endDate is required' }),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateProjectDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Members must be an array' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'Members array must not be empty' }),
    (0, class_validator_1.IsUUID)('4', { each: true, message: 'Each member ID must be a valid UUID' }),
    __metadata("design:type", Array)
], CreateProjectDto.prototype, "members", void 0);


/***/ }),

/***/ "./apps/api/src/modules/project/dto/prject_detail.dto.ts":
/*!***************************************************************!*\
  !*** ./apps/api/src/modules/project/dto/prject_detail.dto.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectDetailDto = void 0;
class ProjectDetailDto {
}
exports.ProjectDetailDto = ProjectDetailDto;


/***/ }),

/***/ "./apps/api/src/modules/project/dto/project_member.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/modules/project/dto/project_member.dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectMemberDto = void 0;
class ProjectMemberDto {
}
exports.ProjectMemberDto = ProjectMemberDto;


/***/ }),

/***/ "./apps/api/src/modules/project/project.controller.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/modules/project/project.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectController = void 0;
const controller_customer_decorator_1 = __webpack_require__(/*! @app/core/decorator/controller-customer.decorator */ "./libs/core/src/decorator/controller-customer.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const number_validation_1 = __webpack_require__(/*! ../../helper/number.validation */ "./apps/api/src/helper/number.validation.ts");
const page_size_dto_1 = __webpack_require__(/*! ../../utils/page_size.dto */ "./apps/api/src/utils/page_size.dto.ts");
const auth_guard_1 = __webpack_require__(/*! ../user/auth.guard */ "./apps/api/src/modules/user/auth.guard.ts");
const add_member_dto_1 = __webpack_require__(/*! ./dto/add_member.dto */ "./apps/api/src/modules/project/dto/add_member.dto.ts");
const create_project_dto_1 = __webpack_require__(/*! ./dto/create_project.dto */ "./apps/api/src/modules/project/dto/create_project.dto.ts");
const project_service_1 = __webpack_require__(/*! ./project.service */ "./apps/api/src/modules/project/project.service.ts");
let ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    createProject(createProjectDto, req) {
        return this.projectService.createProject(createProjectDto, req.user);
    }
    addMemberToProject(addMemberDto, req) {
        return this.projectService.addMemberToProject(addMemberDto, req.user);
    }
    getProjectParticipated(pageSizeDto, req) {
        return this.projectService.getProjectParticipated(pageSizeDto, req.user);
    }
    getListProjectManager(pageSizeDto, req) {
        return this.projectService.getListProjectManager(pageSizeDto, req.user);
    }
    getInfoProject(id) {
        return this.projectService.getInfoProject(id);
    }
};
exports.ProjectController = ProjectController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_project_dto_1.CreateProjectDto !== "undefined" && create_project_dto_1.CreateProjectDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "createProject", null);
__decorate([
    (0, common_1.Post)('add-member'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof add_member_dto_1.AddMemberDto !== "undefined" && add_member_dto_1.AddMemberDto) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "addMemberToProject", null);
__decorate([
    (0, common_1.Get)('list-project'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof page_size_dto_1.PageSizeDto !== "undefined" && page_size_dto_1.PageSizeDto) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "getProjectParticipated", null);
__decorate([
    (0, common_1.Get)('list-project-manager'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof page_size_dto_1.PageSizeDto !== "undefined" && page_size_dto_1.PageSizeDto) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "getListProjectManager", null);
__decorate([
    (0, common_1.Get)('detail/:id'),
    __param(0, (0, common_1.Param)('id', number_validation_1.IsNumberNotNull)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "getInfoProject", null);
exports.ProjectController = ProjectController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, controller_customer_decorator_1.ClientControllers)('project'),
    __metadata("design:paramtypes", [typeof (_a = typeof project_service_1.ProjectService !== "undefined" && project_service_1.ProjectService) === "function" ? _a : Object])
], ProjectController);


/***/ }),

/***/ "./apps/api/src/modules/project/project.module.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/modules/project/project.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const project_1 = __webpack_require__(/*! ../../database/entities/project */ "./apps/api/src/database/entities/project.ts");
const project_user_1 = __webpack_require__(/*! ../../database/entities/project_user */ "./apps/api/src/database/entities/project_user.ts");
const project_controller_1 = __webpack_require__(/*! ./project.controller */ "./apps/api/src/modules/project/project.controller.ts");
const project_service_1 = __webpack_require__(/*! ./project.service */ "./apps/api/src/modules/project/project.service.ts");
let ProjectModule = class ProjectModule {
};
exports.ProjectModule = ProjectModule;
exports.ProjectModule = ProjectModule = __decorate([
    (0, common_1.Module)({
        controllers: [project_controller_1.ProjectController],
        providers: [project_service_1.ProjectService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([project_1.Project, project_user_1.ProjectUser])
        ]
    })
], ProjectModule);


/***/ }),

/***/ "./apps/api/src/modules/project/project.service.ts":
/*!*********************************************************!*\
  !*** ./apps/api/src/modules/project/project.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const enum_1 = __webpack_require__(/*! ../../constants/enum */ "./apps/api/src/constants/enum.ts");
const project_1 = __webpack_require__(/*! ../../database/entities/project */ "./apps/api/src/database/entities/project.ts");
const project_user_1 = __webpack_require__(/*! ../../database/entities/project_user */ "./apps/api/src/database/entities/project_user.ts");
const pagination_1 = __webpack_require__(/*! ../../helper/pagination */ "./apps/api/src/helper/pagination.ts");
const prject_detail_dto_1 = __webpack_require__(/*! ./dto/prject_detail.dto */ "./apps/api/src/modules/project/dto/prject_detail.dto.ts");
const project_member_dto_1 = __webpack_require__(/*! ./dto/project_member.dto */ "./apps/api/src/modules/project/dto/project_member.dto.ts");
let ProjectService = class ProjectService {
    constructor(projectRepository, projectMemberRepository) {
        this.projectRepository = projectRepository;
        this.projectMemberRepository = projectMemberRepository;
    }
    async createProject(createProjectDto, user) {
        if (user.role !== enum_1.UserType.ADMIN) {
            throw new Error(enum_1.MessageText.Require_Permission_Create_Project);
        }
        return await this.projectRepository.manager.transaction(async (transactionalEntityManager) => {
            try {
                const { projectName, startDate, endDate, projectManagerId, description, members } = createProjectDto;
                const newProject = this.projectRepository.create({
                    projectName,
                    startDate,
                    endDate,
                    projectManagerId,
                    description,
                });
                const savedProject = await transactionalEntityManager.save(project_1.Project, newProject);
                members.push(projectManagerId);
                const memberData = createProjectDto.members.map(memberId => ({
                    projectId: savedProject.id,
                    userId: memberId,
                    joinedAt: new Date().toISOString(),
                }));
                await transactionalEntityManager
                    .createQueryBuilder()
                    .insert()
                    .into(project_user_1.ProjectUser)
                    .values(memberData)
                    .execute();
                return {
                    success: true
                };
            }
            catch (error) {
                return {
                    success: false,
                    message: error.message
                };
            }
        });
    }
    async addMemberToProject(addMemberDto, user) {
        try {
            const { projectId, listMember } = addMemberDto;
            if (user.role == enum_1.UserType.ADMIN || user.role == enum_1.UserType.PM) {
                const projectMembers = await this.projectMemberRepository.find({ where: { projectId } });
                if (!projectMembers) {
                    throw new Error(enum_1.MessageText.Project_Member_Error);
                }
                const existingMemberIds = projectMembers.map(member => member.userId);
                const newMembers = listMember.filter(memberId => !existingMemberIds.includes(memberId));
                if (newMembers.length === 0) {
                    throw new Error(enum_1.MessageText.Member_Already_Exists);
                }
                const memberData = newMembers.map(memberId => ({
                    projectId,
                    userId: memberId,
                    joinedAt: new Date().toISOString()
                }));
                await this.projectMemberRepository
                    .createQueryBuilder()
                    .insert()
                    .into(project_user_1.ProjectUser)
                    .values(memberData)
                    .execute();
                return {
                    success: true
                };
            }
            else {
                throw new Error(enum_1.MessageText.Require_Permission_Add_Member);
            }
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    deleteMember() { }
    async getInfoProject(id) {
        try {
            const project = await this.projectRepository.findOne({ where: { id } });
            const listMember = await this.projectMemberRepository.find({ where: { projectId: id } });
            let totalWorkHours = 0;
            const projectMembers = listMember.map(member => {
                const projectMember = new project_member_dto_1.ProjectMemberDto();
                projectMember.id = member.userId;
                projectMember.joinedAt = member.joinedAt;
                projectMember.totalWorkHour = member.totalWorkHour || 0;
                totalWorkHours += projectMember.totalWorkHour;
                return projectMember;
            });
            const projectDetailDto = new prject_detail_dto_1.ProjectDetailDto();
            projectDetailDto.id = project.id;
            projectDetailDto.projectName = project.projectName;
            projectDetailDto.projectManagerId = project.projectManagerId;
            projectDetailDto.startDate = project.startDate;
            projectDetailDto.endDate = project.endDate;
            projectDetailDto.description = project.description;
            projectDetailDto.member = projectMembers;
            projectDetailDto.totalWorkHour = totalWorkHours;
            return {
                success: true,
                data: projectDetailDto
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async getProjectParticipated(pageSizeDto, user) {
        try {
            const { page, pageSize } = pageSizeDto;
            const { skip, take } = (0, pagination_1.getPagination)({ page, pageSize });
            const projects = await this.projectRepository
                .createQueryBuilder("project")
                .innerJoin(project_user_1.ProjectUser, "projectUser", "project.id = projectUser.projectId")
                .select([
                "project.id",
                "project.projectName",
                "project.projectManagerId",
                "project.startDate",
                "project.endDate",
                "project.description"
            ])
                .where("projectUser.userId = :userId", { userId: user.id })
                .skip(skip)
                .take(take)
                .getMany();
            return {
                success: true,
                data: projects
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async getListProjectManager(pageSizeDto, user) {
        try {
            const { page, pageSize } = pageSizeDto;
            const { skip, take } = (0, pagination_1.getPagination)({ page, pageSize });
            const projects = await this.projectRepository.find({
                select: ['id', 'projectName', 'startDate', 'endDate', 'description'],
                where: { projectManagerId: user.id },
                skip,
                take
            });
            return {
                success: true,
                data: projects
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_1.Project)),
    __param(1, (0, typeorm_1.InjectRepository)(project_user_1.ProjectUser)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], ProjectService);


/***/ }),

/***/ "./apps/api/src/modules/request/dto/handle_request.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/modules/request/dto/handle_request.dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HandleRequestDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class HandleRequestDto {
}
exports.HandleRequestDto = HandleRequestDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], HandleRequestDto.prototype, "requestId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(4),
    __metadata("design:type", Number)
], HandleRequestDto.prototype, "status", void 0);


/***/ }),

/***/ "./apps/api/src/modules/request/dto/request.dto.ts":
/*!*********************************************************!*\
  !*** ./apps/api/src/modules/request/dto/request.dto.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestDto = void 0;
class RequestDto {
}
exports.RequestDto = RequestDto;


/***/ }),

/***/ "./apps/api/src/modules/request/dto/request_detail_query.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/modules/request/dto/request_detail_query.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestDetailQuery = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RequestDetailQuery {
}
exports.RequestDetailQuery = RequestDetailQuery;
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], RequestDetailQuery.prototype, "requestId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(4),
    __metadata("design:type", Number)
], RequestDetailQuery.prototype, "type", void 0);


/***/ }),

/***/ "./apps/api/src/modules/request/dto/request_on_leave.dto.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/modules/request/dto/request_on_leave.dto.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestOnLeaveDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RequestOnLeaveDto {
}
exports.RequestOnLeaveDto = RequestOnLeaveDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Receiver request must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Receiver request is required' }),
    __metadata("design:type", String)
], RequestOnLeaveDto.prototype, "receiverRequest", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Title must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Title is required' }),
    __metadata("design:type", String)
], RequestOnLeaveDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Reason must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Reason is required' }),
    __metadata("design:type", String)
], RequestOnLeaveDto.prototype, "reason", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: 'Hour must be an integer' }),
    (0, class_validator_1.IsPositive)({ message: 'Hour must be a positive number' }),
    (0, class_validator_1.Min)(2),
    (0, class_validator_1.Max)(8),
    __metadata("design:type", Number)
], RequestOnLeaveDto.prototype, "hour", void 0);


/***/ }),

/***/ "./apps/api/src/modules/request/dto/request_timeoff.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/modules/request/dto/request_timeoff.dto.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestTimeOffDto = exports.IsEndTimeGreaterThanStartTime = exports.IsEndTimeGreaterThanStartTimeConstraint = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const request_dto_1 = __webpack_require__(/*! ./request.dto */ "./apps/api/src/modules/request/dto/request.dto.ts");
let IsEndTimeGreaterThanStartTimeConstraint = class IsEndTimeGreaterThanStartTimeConstraint {
    validate(endTime, args) {
        const request = args.object;
        return new Date(request.startTime).getTime() < new Date(endTime).getTime();
    }
    defaultMessage(args) {
        return 'End time must be greater than start time';
    }
};
exports.IsEndTimeGreaterThanStartTimeConstraint = IsEndTimeGreaterThanStartTimeConstraint;
exports.IsEndTimeGreaterThanStartTimeConstraint = IsEndTimeGreaterThanStartTimeConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isEndTimeGreaterThanStartTime', async: false })
], IsEndTimeGreaterThanStartTimeConstraint);
function IsEndTimeGreaterThanStartTime(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEndTimeGreaterThanStartTimeConstraint,
        });
    };
}
exports.IsEndTimeGreaterThanStartTime = IsEndTimeGreaterThanStartTime;
class RequestTimeOffDto extends request_dto_1.RequestDto {
}
exports.RequestTimeOffDto = RequestTimeOffDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Receiver request must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Receiver request is required' }),
    __metadata("design:type", String)
], RequestTimeOffDto.prototype, "receiverRequest", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Title must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Title is required' }),
    __metadata("design:type", String)
], RequestTimeOffDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Reason must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Reason is required' }),
    __metadata("design:type", String)
], RequestTimeOffDto.prototype, "reason", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Start time must be a valid date string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Start time is required' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], RequestTimeOffDto.prototype, "startTime", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'End time must be a valid date string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'End time is required' }),
    IsEndTimeGreaterThanStartTime({ message: 'End time must be greater than start time' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], RequestTimeOffDto.prototype, "endTime", void 0);


/***/ }),

/***/ "./apps/api/src/modules/request/dto/update_request.dto.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/modules/request/dto/update_request.dto.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateRequestDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateRequestDto {
}
exports.UpdateRequestDto = UpdateRequestDto;
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'ID must be a number' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'ID is required' }),
    __metadata("design:type", Number)
], UpdateRequestDto.prototype, "requestId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Title must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Title is required' }),
    __metadata("design:type", String)
], UpdateRequestDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Reason must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Reason is required' }),
    __metadata("design:type", String)
], UpdateRequestDto.prototype, "reason", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Start time must be a valid date string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Start time is required' }),
    __metadata("design:type", String)
], UpdateRequestDto.prototype, "startTime", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'End time must be a valid date string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'End time is required' }),
    __metadata("design:type", String)
], UpdateRequestDto.prototype, "endTime", void 0);


/***/ }),

/***/ "./apps/api/src/modules/request/request.controller.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/modules/request/request.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestController = void 0;
const controller_customer_decorator_1 = __webpack_require__(/*! @app/core/decorator/controller-customer.decorator */ "./libs/core/src/decorator/controller-customer.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_guard_1 = __webpack_require__(/*! ../user/auth.guard */ "./apps/api/src/modules/user/auth.guard.ts");
const handle_request_dto_1 = __webpack_require__(/*! ./dto/handle_request.dto */ "./apps/api/src/modules/request/dto/handle_request.dto.ts");
const request_on_leave_dto_1 = __webpack_require__(/*! ./dto/request_on_leave.dto */ "./apps/api/src/modules/request/dto/request_on_leave.dto.ts");
const request_timeoff_dto_1 = __webpack_require__(/*! ./dto/request_timeoff.dto */ "./apps/api/src/modules/request/dto/request_timeoff.dto.ts");
const update_request_dto_1 = __webpack_require__(/*! ./dto/update_request.dto */ "./apps/api/src/modules/request/dto/update_request.dto.ts");
const request_service_1 = __webpack_require__(/*! ./request.service */ "./apps/api/src/modules/request/request.service.ts");
const request_detail_query_1 = __webpack_require__(/*! ./dto/request_detail_query */ "./apps/api/src/modules/request/dto/request_detail_query.ts");
let RequestController = class RequestController {
    constructor(requestService) {
        this.requestService = requestService;
    }
    async createRequestTimeOff(requestTimeOffDto, req) {
        return this.requestService.createTimeOff(requestTimeOffDto, req.user);
    }
    async createRequestOnLeave(requestOnLeaveDto, req) {
        return this.requestService.createOnLeave(requestOnLeaveDto, req.user);
    }
    async detailRequest(detailQuery, req) {
        return this.requestService.getRequestDetail(detailQuery, req.user);
    }
    async updateRequest(body, req) {
        return this.requestService.updateRequest(body, req.user);
    }
    async getListRequest(req) {
        return this.requestService.getListRequest(req.user);
    }
    async getListReceivedRequest(req) {
        return this.requestService.getListReceivedRequest(req.user);
    }
    async handleRequest(body, req) {
        return this.requestService.handleRequest(body, req.user);
    }
};
exports.RequestController = RequestController;
__decorate([
    (0, common_1.Post)('create/time-off'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof request_timeoff_dto_1.RequestTimeOffDto !== "undefined" && request_timeoff_dto_1.RequestTimeOffDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "createRequestTimeOff", null);
__decorate([
    (0, common_1.Post)('create/on-leave'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof request_on_leave_dto_1.RequestOnLeaveDto !== "undefined" && request_on_leave_dto_1.RequestOnLeaveDto) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "createRequestOnLeave", null);
__decorate([
    (0, common_1.Get)('detail/:requestId'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof request_detail_query_1.RequestDetailQuery !== "undefined" && request_detail_query_1.RequestDetailQuery) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "detailRequest", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof update_request_dto_1.UpdateRequestDto !== "undefined" && update_request_dto_1.UpdateRequestDto) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "updateRequest", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "getListRequest", null);
__decorate([
    (0, common_1.Get)('received-request'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "getListReceivedRequest", null);
__decorate([
    (0, common_1.Put)('handle-request'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof handle_request_dto_1.HandleRequestDto !== "undefined" && handle_request_dto_1.HandleRequestDto) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "handleRequest", null);
exports.RequestController = RequestController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, controller_customer_decorator_1.ClientControllers)('request'),
    __metadata("design:paramtypes", [typeof (_a = typeof request_service_1.RequestService !== "undefined" && request_service_1.RequestService) === "function" ? _a : Object])
], RequestController);


/***/ }),

/***/ "./apps/api/src/modules/request/request.module.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/modules/request/request.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const request_1 = __webpack_require__(/*! ../../database/entities/request */ "./apps/api/src/database/entities/request.ts");
const timeoff_1 = __webpack_require__(/*! ../../database/entities/timeoff */ "./apps/api/src/database/entities/timeoff.ts");
const request_controller_1 = __webpack_require__(/*! ./request.controller */ "./apps/api/src/modules/request/request.controller.ts");
const request_service_1 = __webpack_require__(/*! ./request.service */ "./apps/api/src/modules/request/request.service.ts");
const user_1 = __importDefault(__webpack_require__(/*! ../../database/entities/user */ "./apps/api/src/database/entities/user.ts"));
const on_leave_1 = __webpack_require__(/*! ../../database/entities/on_leave */ "./apps/api/src/database/entities/on_leave.ts");
let RequestModule = class RequestModule {
};
exports.RequestModule = RequestModule;
exports.RequestModule = RequestModule = __decorate([
    (0, common_1.Module)({
        controllers: [request_controller_1.RequestController],
        providers: [request_service_1.RequestService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([request_1.Request, timeoff_1.TimeOff, user_1.default, on_leave_1.OnLeave]),
        ]
    })
], RequestModule);


/***/ }),

/***/ "./apps/api/src/modules/request/request.service.ts":
/*!*********************************************************!*\
  !*** ./apps/api/src/modules/request/request.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const enum_1 = __webpack_require__(/*! ../../constants/enum */ "./apps/api/src/constants/enum.ts");
const on_leave_1 = __webpack_require__(/*! ../../database/entities/on_leave */ "./apps/api/src/database/entities/on_leave.ts");
const request_1 = __webpack_require__(/*! ../../database/entities/request */ "./apps/api/src/database/entities/request.ts");
const timeoff_1 = __webpack_require__(/*! ../../database/entities/timeoff */ "./apps/api/src/database/entities/timeoff.ts");
const user_1 = __importDefault(__webpack_require__(/*! ../../database/entities/user */ "./apps/api/src/database/entities/user.ts"));
let RequestService = class RequestService {
    constructor(requestRepository, timeOffRepository, onLeaveRepository, userRepository) {
        this.requestRepository = requestRepository;
        this.timeOffRepository = timeOffRepository;
        this.onLeaveRepository = onLeaveRepository;
        this.userRepository = userRepository;
    }
    async createTimeOff(requestTimeOffDto, user) {
        return this.requestRepository.manager.transaction(async (transactionalEntityManager) => {
            try {
                const { receiverRequest, title, startTime, endTime, reason } = requestTimeOffDto;
                const userRes = await transactionalEntityManager.findOne(user_1.default, { where: { id: receiverRequest } });
                const userCreateRequest = await transactionalEntityManager.findOne(user_1.default, { where: { id: user.id } });
                const timeDifference = this.calculateTimeDifference(startTime, endTime);
                if (timeDifference <= user.timeFree && timeDifference > 10) {
                    if (userRes.role === enum_1.UserType.PM) {
                        const request = this.requestRepository.create({
                            user: userCreateRequest,
                            status: enum_1.RequestStatus.InProgress,
                            type: enum_1.RequestType.Request_TimeOff,
                            receiverRequest: userRes,
                        });
                        const savedRequest = await transactionalEntityManager.save(request_1.Request, request);
                        const timeoff = this.timeOffRepository.create({
                            title: title,
                            startTime: startTime.toString(),
                            endTime: endTime.toString(),
                            reason: reason,
                            requestId: savedRequest.id
                        });
                        await transactionalEntityManager.save(timeoff_1.TimeOff, timeoff);
                        userCreateRequest.timeFree -= timeDifference;
                        await transactionalEntityManager.save(user_1.default, userCreateRequest);
                        return {
                            success: true
                        };
                    }
                    else {
                        throw new Error(enum_1.MessageText.Recipent_Not_PM);
                    }
                }
                else {
                    throw new Error(enum_1.MessageText.TimeError);
                }
            }
            catch (error) {
                return {
                    success: false,
                    message: error.message
                };
            }
        });
    }
    async createOnLeave(createOnLeave, user) {
        return this.requestRepository.manager.transaction(async (transactionalEntityManager) => {
            try {
                const { receiverRequest, title, reason, hour } = createOnLeave;
                ;
                const userRes = await transactionalEntityManager.findOne(user_1.default, { where: { id: receiverRequest } });
                const userCreateRequest = await transactionalEntityManager.findOne(user_1.default, { where: { id: user.id } });
                if (hour < user.timeWallet) {
                    if (userRes.role === enum_1.UserType.PM) {
                        const request = this.requestRepository.create({
                            user: userCreateRequest,
                            status: enum_1.RequestStatus.InProgress,
                            type: enum_1.RequestType.Request_Onleave,
                            receiverRequest: userRes,
                        });
                        const savedRequest = await transactionalEntityManager.save(request_1.Request, request);
                        const onLeave = this.onLeaveRepository.create({
                            title: title,
                            reason: reason,
                            requestId: savedRequest.id,
                            hour: hour
                        });
                        await transactionalEntityManager.save(on_leave_1.OnLeave, onLeave);
                        userCreateRequest.timeWallet -= hour;
                        await transactionalEntityManager.save(user_1.default, userCreateRequest);
                        return {
                            success: true
                        };
                    }
                    else {
                        throw new Error(enum_1.MessageText.Recipent_Not_PM);
                    }
                }
                else {
                    throw new Error(enum_1.MessageText.Time_Not_Enough);
                }
            }
            catch (error) {
                return {
                    success: false,
                    message: error.message
                };
            }
        });
    }
    async getListRequest(user) {
        try {
            const requestRes = await this.requestRepository.createQueryBuilder("request")
                .leftJoinAndMapOne('request.timeOff', timeoff_1.TimeOff, 'timeOff', 'timeOff.requestId = request.id')
                .leftJoinAndMapOne('request.onLeave', on_leave_1.OnLeave, 'onLeave', 'onLeave.requestId = request.id')
                .select([
                "request.id",
                "request.type",
                "request.status",
                "request.createdAt",
                "timeOff.title",
                "timeOff.reason",
                "timeOff.startTime",
                "timeOff.endTime",
                "onLeave.title",
                "onLeave.reason",
                "onLeave.hour",
            ])
                .where('request.user = :id', { id: user.id })
                .getMany();
            return {
                success: true,
                data: requestRes
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async getListReceivedRequest(user) {
        try {
            const isCheckUser = await this.userRepository.findOne({ where: { id: user.id } });
            if (!isCheckUser) {
                throw new Error(enum_1.MessageText.User_Not_Found);
            }
            else {
                if (user.role == enum_1.UserType.PM) {
                    const requestRes = await this.requestRepository.createQueryBuilder("request")
                        .leftJoinAndMapOne('request.timeOff', timeoff_1.TimeOff, 'timeOff', 'timeOff.requestId = request.id')
                        .leftJoinAndMapOne('request.onLeave', on_leave_1.OnLeave, 'onLeave', 'onLeave.requestId = request.id')
                        .select([
                        "request.id",
                        "request.type",
                        "request.status",
                        "request.createdAt",
                        "timeOff.title",
                        "timeOff.reason",
                        "timeOff.startTime",
                        "timeOff.endTime",
                        "onLeave.title",
                        "onLeave.reason",
                        "onLeave.hour",
                    ])
                        .where('request.receiverRequest = :userId', { userId: user.id })
                        .getMany();
                    return {
                        success: true,
                        data: requestRes
                    };
                }
                else {
                    throw new Error(enum_1.MessageText.User_Not_PM);
                }
            }
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async getRequestDetail(requestDetailQuery, user) {
        try {
            const { requestId, type } = requestDetailQuery;
            if (type == enum_1.RequestType.Request_TimeOff) {
                const requestRes = await this.requestRepository.createQueryBuilder("request")
                    .leftJoinAndMapOne('request.timeOff', timeoff_1.TimeOff, 'timeOff', 'timeOff.requestId = request.id')
                    .select([
                    "request.id",
                    "request.type",
                    "request.status",
                    "request.createdAt",
                    "timeOff.title",
                    "timeOff.reason",
                    "timeOff.startTime",
                    "timeOff.endTime"
                ])
                    .where('(request.receiverRequest = :receiverRequest OR request.user = :userId)', { receiverRequest: user.id, userId: user.id })
                    .andWhere('request.id = :idRequest', { idRequest: requestId })
                    .getOne();
                return {
                    success: true,
                    data: requestRes
                };
            }
            else if (type == enum_1.RequestType.Request_Onleave) {
                const requestRes = await this.requestRepository.createQueryBuilder("request")
                    .leftJoinAndMapOne('request.onLeave', on_leave_1.OnLeave, 'onLeave', 'onLeave.requestId = request.id')
                    .select([
                    "request.id",
                    "request.type",
                    "request.status",
                    "request.createdAt",
                    "onLeave.title",
                    "onLeave.reason",
                    "onLeave.hour",
                ])
                    .where('(request.receiverRequest = :receiverRequest OR request.user = :userId)', { receiverRequest: user.id, userId: user.id })
                    .andWhere('request.id = :idRequest', { idRequest: requestId })
                    .getOne();
                return {
                    success: true,
                    data: requestRes
                };
            }
            else {
                throw new Error("Khogn co type");
            }
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async handleRequest(handleRequestDto, user) {
        return this.requestRepository.manager.transaction(async (transactionalEntityManager) => {
            try {
                const { requestId, status } = handleRequestDto;
                const userRes = await transactionalEntityManager.findOne(user_1.default, { where: { id: user.id } });
                if (userRes.role !== enum_1.UserType.PM) {
                    throw new Error(enum_1.MessageText.User_Not_PM);
                }
                const request = await transactionalEntityManager.findOne(request_1.Request, {
                    where: { id: requestId },
                    relations: ['receiverRequest', 'user']
                });
                if (!request) {
                    throw new Error(enum_1.MessageText.Request_Not_Found);
                }
                if (request.receiverRequest.id !== user.id) {
                    throw new Error(enum_1.MessageText.User_Not_Receiver_Request);
                }
                if (request.status !== enum_1.RequestStatus.InProgress) {
                    throw new Error(enum_1.MessageText.Request_Not_Processing);
                }
                const userRequest = await transactionalEntityManager.findOne(user_1.default, { where: { id: request.user.id } });
                if (status === enum_1.RequestStatus.Rejected) {
                    if (request.type === enum_1.RequestType.Request_TimeOff) {
                        const timeOff = await transactionalEntityManager.findOne(timeoff_1.TimeOff, { where: { requestId: request.id } });
                        if (!timeOff) {
                            throw new Error(enum_1.MessageText.TimeOff_Not_Found);
                        }
                        const timeDifference = this.calculateTimeDifference(timeOff.startTime, timeOff.endTime);
                        userRequest.timeFree += timeDifference;
                        await transactionalEntityManager.save(user_1.default, userRequest);
                    }
                    if (request.type === enum_1.RequestType.Request_Onleave) {
                        const onLeave = await transactionalEntityManager.findOne(on_leave_1.OnLeave, { where: { requestId: request.id } });
                        if (!onLeave) {
                            throw new Error(enum_1.MessageText.TimeOff_Not_Found);
                        }
                        userRequest.timeWallet += onLeave.hour;
                        await transactionalEntityManager.save(user_1.default, userRequest);
                    }
                }
                await transactionalEntityManager.update(request_1.Request, { id: requestId }, { status: status });
                return {
                    success: true
                };
            }
            catch (error) {
                return {
                    success: false,
                    message: error.message
                };
            }
        });
    }
    async updateRequest(updateRequestDto, user) {
        return this.requestRepository.manager.transaction(async (transactionalEntityManager) => {
            try {
                const { requestId, title, reason, startTime, endTime } = updateRequestDto;
                const request = await transactionalEntityManager.findOne(request_1.Request, {
                    where: { id: requestId },
                    relations: ['user']
                });
                if (!request) {
                    throw new Error(enum_1.MessageText.Request_Not_Found);
                }
                if (request.status !== enum_1.RequestStatus.InProgress) {
                    throw new Error(enum_1.MessageText.Request_Not_Processing);
                }
                if (request.user.id !== user.id) {
                    throw new Error(enum_1.MessageText.Require_Permission_Update);
                }
                await transactionalEntityManager.update(timeoff_1.TimeOff, { requestId: request.id }, {
                    title,
                    reason,
                    startTime,
                    endTime,
                });
                return {
                    success: true
                };
            }
            catch (error) {
                return {
                    success: false,
                    message: error.message
                };
            }
        });
    }
    calculateTimeDifference(startTime, endTime) {
        const start = new Date(startTime).getTime();
        const end = new Date(endTime).getTime();
        return (end - start) / (1000 * 60);
    }
    findAll() {
        return `This action returns all request`;
    }
};
exports.RequestService = RequestService;
exports.RequestService = RequestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(request_1.Request)),
    __param(1, (0, typeorm_1.InjectRepository)(timeoff_1.TimeOff)),
    __param(2, (0, typeorm_1.InjectRepository)(on_leave_1.OnLeave)),
    __param(3, (0, typeorm_1.InjectRepository)(user_1.default)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object])
], RequestService);


/***/ }),

/***/ "./apps/api/src/modules/user/auth.guard.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/modules/user/auth.guard.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const constants_1 = __webpack_require__(/*! ./constants */ "./apps/api/src/modules/user/constants.ts");
let AuthGuard = class AuthGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.ForbiddenException('Token not provided');
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, { secret: constants_1.jwtConstants.secret });
            request['user'] = payload;
            return true;
        }
        catch (error) {
            throw new common_1.ForbiddenException('Invalid token');
        }
    }
    extractTokenFromHeader(request) {
        var _a, _b;
        const [type, token] = (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthGuard);


/***/ }),

/***/ "./apps/api/src/modules/user/constants.ts":
/*!************************************************!*\
  !*** ./apps/api/src/modules/user/constants.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: 'KEY_SECRET',
};


/***/ }),

/***/ "./apps/api/src/modules/user/dto/login.dto.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/modules/user/dto/login.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ }),

/***/ "./apps/api/src/modules/user/dto/user_register.dto.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/modules/user/dto/user_register.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRegisterDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UserRegisterDto {
}
exports.UserRegisterDto = UserRegisterDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], UserRegisterDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email format' }),
    __metadata("design:type", String)
], UserRegisterDto.prototype, "email", void 0);


/***/ }),

/***/ "./apps/api/src/modules/user/use.module.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/modules/user/use.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const user_1 = __importDefault(__webpack_require__(/*! ../../database/entities/user */ "./apps/api/src/database/entities/user.ts"));
const constants_1 = __webpack_require__(/*! ./constants */ "./apps/api/src/modules/user/constants.ts");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./apps/api/src/modules/user/user.controller.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/api/src/modules/user/user.service.ts");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '6000s' },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_1.default]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UserModule);


/***/ }),

/***/ "./apps/api/src/modules/user/user.controller.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/modules/user/user.controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const controller_customer_decorator_1 = __webpack_require__(/*! @app/core/decorator/controller-customer.decorator */ "./libs/core/src/decorator/controller-customer.decorator.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_guard_1 = __webpack_require__(/*! ./auth.guard */ "./apps/api/src/modules/user/auth.guard.ts");
const login_dto_1 = __webpack_require__(/*! ./dto/login.dto */ "./apps/api/src/modules/user/dto/login.dto.ts");
const user_register_dto_1 = __webpack_require__(/*! ./dto/user_register.dto */ "./apps/api/src/modules/user/dto/user_register.dto.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/api/src/modules/user/user.service.ts");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async login(loginDto) {
        return this.userService.login(loginDto);
    }
    async logout(req) {
        return this.userService.logout(req.user);
    }
    async getUserInfo(req) {
        return this.userService.getUserInfo(req.user);
    }
    async register(registerDto) {
        return this.userService.register(registerDto);
    }
    async refresh(refreshToken) {
        return this.userService.refresh(refreshToken);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserInfo", null);
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof user_register_dto_1.UserRegisterDto !== "undefined" && user_register_dto_1.UserRegisterDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_1.Body)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "refresh", null);
exports.UserController = UserController = __decorate([
    (0, controller_customer_decorator_1.ClientControllers)('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),

/***/ "./apps/api/src/modules/user/user.service.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/modules/user/user.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ "bcrypt"));
const crypto_1 = __webpack_require__(/*! crypto */ "crypto");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const enum_1 = __webpack_require__(/*! ../../constants/enum */ "./apps/api/src/constants/enum.ts");
const user_1 = __importDefault(__webpack_require__(/*! ../../database/entities/user */ "./apps/api/src/database/entities/user.ts"));
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        try {
            const { email, password } = loginDto;
            const userResponse = await this.userRepository.findOne({ where: { email } });
            if (!userResponse) {
                throw new Error(enum_1.MessageText.Email_Incorrect);
            }
            if (!this.isPasswordValid(password)) {
                throw new Error(enum_1.MessageText.Password_Requirement);
            }
            const isPasswordValid = await bcrypt_1.default.compare(password, userResponse.password);
            if (!isPasswordValid) {
                throw new Error(enum_1.MessageText.Password_Incorrect);
            }
            const payload = { id: userResponse.id, role: userResponse.role, timeFree: userResponse.timeFree, timeWallet: userResponse.timeWallet };
            const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '15m' });
            const refreshToken = await this.generateRefreshToken();
            await this.userRepository.update(userResponse.id, { refreshToken });
            return {
                success: true,
                token: accessToken,
            };
        }
        catch (error) {
            return {
                success: false,
                token: null,
                message: error.message
            };
        }
    }
    async register(userRegisterDto) {
        try {
            const { email, userName, password, role } = userRegisterDto;
            if (!this.isPasswordValid(password)) {
                throw new Error(enum_1.MessageText.Password_Invalid);
            }
            const existingUser = await this.userRepository.findOne({ where: { email: email } });
            if (existingUser) {
                throw new Error(enum_1.MessageText.Email_Already_Exists);
            }
            const hashedPassword = await bcrypt_1.default.hash(password, 10);
            const newUser = this.userRepository.create({
                email,
                userName,
                password: hashedPassword,
                role,
                timeFree: enum_1.TimeDefault.Time_Off,
                timeWallet: enum_1.TimeDefault.On_Leave
            });
            this.userRepository.save(newUser);
            return {
                success: true
            };
        }
        catch (error) {
            return { success: false, message: error.message };
        }
    }
    async logout(user) {
        try {
            const userRes = await this.userRepository.findOne({ where: { id: user.id } });
            if (!userRes) {
                throw new Error(enum_1.MessageText.User_Not_Found);
            }
            await this.userRepository.update(user.id, { refreshToken: null });
            return {
                success: true,
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async getUserInfo(user) {
        try {
            const userRes = await this.userRepository.findOne({ where: { id: user.id }, select: ['id', 'userName', 'email', 'role', 'timeFree', 'timeWallet'] });
            if (!userRes) {
                throw new Error(enum_1.MessageText.User_Not_Found);
            }
            return {
                success: true,
                data: userRes
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
    async refresh(refreshToken) {
        if (!refreshToken) {
            throw new common_1.ForbiddenException('Refresh token not provided');
        }
        const user = await this.userRepository.findOne({ where: { refreshToken } });
        if (!user) {
            throw new common_1.ForbiddenException('Invalid refresh token');
        }
        try {
            const payload = { id: user.id, role: user.role };
            const newAccessToken = await this.jwtService.signAsync(payload, { expiresIn: '15m' });
            return {
                success: true,
                token: newAccessToken,
            };
        }
        catch (error) {
            throw new common_1.ForbiddenException('Invalid refresh token');
        }
    }
    async generateRefreshToken() {
        return new Promise((resolve, reject) => {
            (0, crypto_1.randomBytes)(64, (err, buffer) => {
                if (err) {
                    reject(err);
                }
                else {
                    const refreshToken = buffer.toString('hex');
                    resolve(refreshToken);
                }
            });
        });
    }
    isPasswordValid(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_1.default)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], UserService);


/***/ }),

/***/ "./apps/api/src/utils/page_size.dto.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/utils/page_size.dto.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PageSizeDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class PageSizeDto {
}
exports.PageSizeDto = PageSizeDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1, { message: 'Page must be at least 1' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], PageSizeDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1, { message: 'PageSize must be at least 1' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], PageSizeDto.prototype, "pageSize", void 0);


/***/ }),

/***/ "./libs/constants/configuration-env.ts":
/*!*********************************************!*\
  !*** ./libs/constants/configuration-env.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
(__webpack_require__(/*! dotenv */ "dotenv").config)();
exports["default"] = () => ({
    nodeEnv: process.env.NODE_ENV,
    portClient: Number(process.env.SERVER_PORT_CLIENT) || 3000,
    portCms: Number(process.env.SERVER_PORT_CMS) || 3001,
    appName: String(process.env.APP_NAME),
    contact: {
        name: process.env.CONTACT_NAME,
        url: process.env.CONTACT_URL,
        email: process.env.CONTACT_EMAIL,
    },
    auth: {
        secretOrKey: process.env.JWT_SECRET_KEY,
        accessTokenExpiredIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN || '10d',
        refreshTokenExpiredIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN || '30d',
        saltRound: Number(process.env.BCRYPT_HASH_ROUNDS),
    },
});


/***/ }),

/***/ "./libs/constants/enum.ts":
/*!********************************!*\
  !*** ./libs/constants/enum.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenType = exports.ValuesImportant = exports.ErrorCustom = exports.Environment = exports.UserType = exports.UserStatus = exports.CommonStatus = exports.StartUrl = void 0;
var StartUrl;
(function (StartUrl) {
    StartUrl["CLIENT"] = "client";
    StartUrl["CMS"] = "cms";
})(StartUrl || (exports.StartUrl = StartUrl = {}));
var CommonStatus;
(function (CommonStatus) {
    CommonStatus[CommonStatus["IN_ACTIVE"] = 0] = "IN_ACTIVE";
    CommonStatus[CommonStatus["ACTIVE"] = 1] = "ACTIVE";
})(CommonStatus || (exports.CommonStatus = CommonStatus = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["IN_ACTIVE"] = 0] = "IN_ACTIVE";
    UserStatus[UserStatus["USE_FREE"] = 1] = "USE_FREE";
    UserStatus[UserStatus["PENDING"] = 2] = "PENDING";
    UserStatus[UserStatus["ACTIVE"] = 3] = "ACTIVE";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var UserType;
(function (UserType) {
    UserType[UserType["SUPER_ADMIN"] = 1] = "SUPER_ADMIN";
    UserType[UserType["CLIENT"] = 2] = "CLIENT";
})(UserType || (exports.UserType = UserType = {}));
var Environment;
(function (Environment) {
    Environment["Development"] = "development";
    Environment["Staging"] = "staging";
    Environment["Production"] = "production";
    Environment["Test"] = "test";
})(Environment || (exports.Environment = Environment = {}));
exports.ErrorCustom = {
    Test: {
        ErrorCode: 'Test',
        ErrorMessage: '{x}',
    },
    Unauthorized: {
        ErrorCode: 'Unauthorized',
        ErrorMessage: 'Unauthorized',
    },
    Invalid_Input: {
        ErrorCode: 'Invalid_Input',
        ErrorMessage: 'Invalid_Input',
    },
    Not_Found: {
        ErrorCode: 'Not_Found',
        ErrorMessage: 'Not_Found',
    },
    Unknown_Error: {
        ErrorCode: 'Unknown_Error',
        ErrorMessage: 'Unknown_Error',
    },
    The_Allowed_Number_Of_Calls_Has_Been_Exceeded: {
        ErrorCode: 'The_Allowed_Number_Of_Calls_Has_Been_Exceeded',
        ErrorMessage: 'The_Allowed_Number_Of_Calls_Has_Been_Exceeded',
    },
    Forbidden_Resource: {
        ErrorCode: 'Forbidden_Resource',
        ErrorMessage: 'Forbidden_Resource',
    },
};
exports.ValuesImportant = ['password', 'refreshToken', 'oldPassword', 'newPassword'];
var TokenType;
(function (TokenType) {
    TokenType["ACCESS_TOKEN"] = "ACCESS_TOKEN";
    TokenType["REFRESH_TOKEN"] = "REFRESH_TOKEN";
})(TokenType || (exports.TokenType = TokenType = {}));


/***/ }),

/***/ "./libs/constants/libary-server.ts":
/*!*****************************************!*\
  !*** ./libs/constants/libary-server.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PROVIDERS_MODULE_COMMON = exports.IMPORT_MODULE_COMMON = void 0;
const helper_1 = __webpack_require__(/*! @app/helper */ "./libs/helper/src/index.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const configuration_env_1 = __importDefault(__webpack_require__(/*! ./configuration-env */ "./libs/constants/configuration-env.ts"));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const http_exeption_filter_1 = __webpack_require__(/*! @app/core/filters/http-exeption.filter */ "./libs/core/src/filters/http-exeption.filter.ts");
const transform_res_interceptor_1 = __webpack_require__(/*! @app/core/interceptors/transform-res.interceptor */ "./libs/core/src/interceptors/transform-res.interceptor.ts");
const jwt_authentication_1 = __webpack_require__(/*! @app/jwt-authentication */ "./libs/jwt-authentication/src/index.ts");
exports.IMPORT_MODULE_COMMON = [
    config_1.ConfigModule.forRoot({
        isGlobal: true,
        load: [configuration_env_1.default],
        cache: true,
    }),
    helper_1.HelperModule,
    jwt_authentication_1.JwtAuthenticationModule.registerAsync({
        imports: [config_1.ConfigModule],
        useFactory: (configService) => (Object.assign({}, configService.get('auth'))),
        inject: [config_1.ConfigService],
    }),
];
exports.PROVIDERS_MODULE_COMMON = [
    {
        provide: core_1.APP_GUARD,
        useClass: throttler_1.ThrottlerGuard,
    },
    {
        provide: core_1.APP_FILTER,
        useClass: http_exeption_filter_1.AllExceptionsFilter,
    },
    {
        provide: core_1.APP_INTERCEPTOR,
        useClass: transform_res_interceptor_1.TransformResponseInterceptor,
    },
];


/***/ }),

/***/ "./libs/constants/schema.ts":
/*!**********************************!*\
  !*** ./libs/constants/schema.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.responseRefreshToken = exports.responseCheckServer = exports.responseSuccessBasic = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.responseSuccessBasic = {
    status: common_1.HttpStatus.OK,
    description: 'Response example',
    schema: {
        example: {
            data: true,
        },
    },
};
exports.responseCheckServer = {
    status: common_1.HttpStatus.OK,
    description: 'Response check server example',
    schema: {
        example: {
            data: '222.252.27.11',
        },
    },
};
exports.responseRefreshToken = {
    status: common_1.HttpStatus.OK,
    description: 'Response check refresh token api',
    schema: {
        example: {
            data: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZUlkIjoxLCJ1c2VyVHlwZSI6IlNVUEVSX0FETUlOIiwiaWF0IjoxNjcwNDY1MTE1LCJleHAiOjE2NzMwNTcxMTV9.dwSE0lmdCSiK5OLIU3FxsKBmiPvKpXiKnbUZpQ4uKLc',
        },
    },
};


/***/ }),

/***/ "./libs/constants/setup-server.ts":
/*!****************************************!*\
  !*** ./libs/constants/setup-server.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetupServerCommon = void 0;
const helmet_1 = __importDefault(__webpack_require__(/*! helmet */ "helmet"));
const express_1 = __webpack_require__(/*! express */ "express");
const config_system_service_1 = __webpack_require__(/*! @app/helper/config-system/config-system.service */ "./libs/helper/src/config-system/config-system.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
async function SetupServerCommon(app, port, startUrl) {
    const configService = app.get(config_1.ConfigService);
    const configSystemService = app.get(config_system_service_1.ConfigSystemService);
    const appName = configService.get('appName', '');
    const contact = configService.get('contact') || { name: '', email: '', url: '' };
    const logger = new common_1.Logger(`${appName}:${startUrl}`);
    configSystemService.setUpLoggerLog4js();
    configSystemService.setupSwagger(app, appName, '1.0', contact, startUrl);
    app.useLogger(new config_system_service_1.LoggingService());
    app.set('trust proxy', 1);
    app.use((0, helmet_1.default)());
    app.use((0, express_1.json)({ limit: '150mb' }));
    await app.listen(port, () => {
        logger.log(`=== app ${appName} service ${startUrl} running on port: ${port}. pid: ${process.pid} ===`);
    });
}
exports.SetupServerCommon = SetupServerCommon;


/***/ }),

/***/ "./libs/core/src/decorator/controller-customer.decorator.ts":
/*!******************************************************************!*\
  !*** ./libs/core/src/decorator/controller-customer.decorator.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientControllers = exports.CmsControllers = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const enum_1 = __webpack_require__(/*! libs/constants/enum */ "./libs/constants/enum.ts");
const CmsControllers = (controllerName) => (target) => {
    const url = `${enum_1.StartUrl.CMS}/${controllerName || ''}`;
    (0, swagger_1.ApiTags)(url)(target);
    (0, common_1.Controller)(url)(target);
};
exports.CmsControllers = CmsControllers;
const ClientControllers = (controllerName) => (target) => {
    const url = `${enum_1.StartUrl.CLIENT}/${controllerName || ''}`;
    (0, swagger_1.ApiTags)(url)(target);
    (0, common_1.Controller)(url)(target);
};
exports.ClientControllers = ClientControllers;


/***/ }),

/***/ "./libs/core/src/decorator/public-api.decorator.ts":
/*!*********************************************************!*\
  !*** ./libs/core/src/decorator/public-api.decorator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),

/***/ "./libs/core/src/exception/index.ts":
/*!******************************************!*\
  !*** ./libs/core/src/exception/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnprocessableEntity = exports.Unauthorized = exports.Forbidden = exports.Exception = exports.CustomExceptionFactory = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const enum_1 = __webpack_require__(/*! ../../../constants/enum */ "./libs/constants/enum.ts");
class CustomExceptionFactory extends common_1.HttpException {
    constructor(errorValue, devMessage, statusCode, payload) {
        const errorObject = {
            errorValue,
            statusCode: statusCode || common_1.HttpStatus.BAD_REQUEST,
            devMessage: undefined,
            payload: undefined,
        };
        if (devMessage)
            errorObject.devMessage = devMessage;
        if (payload)
            errorObject.payload = payload;
        super(errorObject, errorObject.statusCode);
    }
}
exports.CustomExceptionFactory = CustomExceptionFactory;
class Exception extends CustomExceptionFactory {
    constructor(errorValue, devMessage, payload, statusCode) {
        super(errorValue, devMessage, statusCode, payload);
    }
}
exports.Exception = Exception;
class Forbidden extends CustomExceptionFactory {
    constructor(devMessage, payload) {
        super(enum_1.ErrorCustom.Forbidden_Resource, devMessage, common_1.HttpStatus.FORBIDDEN, payload);
    }
}
exports.Forbidden = Forbidden;
class Unauthorized extends CustomExceptionFactory {
    constructor(devMessage, payload) {
        super(enum_1.ErrorCustom.Unauthorized, devMessage, common_1.HttpStatus.UNAUTHORIZED, payload);
    }
}
exports.Unauthorized = Unauthorized;
class UnprocessableEntity extends CustomExceptionFactory {
    constructor(devMessage, payload) {
        super(enum_1.ErrorCustom.Invalid_Input, devMessage, common_1.HttpStatus.UNPROCESSABLE_ENTITY, payload);
    }
}
exports.UnprocessableEntity = UnprocessableEntity;


/***/ }),

/***/ "./libs/core/src/filters/http-exeption.filter.ts":
/*!*******************************************************!*\
  !*** ./libs/core/src/filters/http-exeption.filter.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var AllExceptionsFilter_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllExceptionsFilter = void 0;
const utils_service_1 = __webpack_require__(/*! @app/helper/utils/utils.service */ "./libs/helper/src/utils/utils.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const enum_1 = __webpack_require__(/*! libs/constants/enum */ "./libs/constants/enum.ts");
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter {
    constructor(utilsService, configService) {
        this.utilsService = utilsService;
        this.configService = configService;
        this.logger = new common_1.Logger(AllExceptionsFilter_1.name);
        this.nodeEnv = this.configService.get('nodeEnv', enum_1.Environment.Development);
    }
    async catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();
        Object.assign(exception, {
            request: {
                method: request.method,
                url: request.url,
                body: this.utilsService.hideImportantInformation(request.body, enum_1.ValuesImportant),
                ip: request.ip,
                payload: request.payload,
            },
        });
        this.logger.error(Object.assign(exception, { env: this.nodeEnv }));
        const _a = await this.utilsService.formatErrorObject(exception), { statusCode } = _a, errorObject = __rest(_a, ["statusCode"]);
        response.status(statusCode).json(errorObject);
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [typeof (_a = typeof utils_service_1.UtilsService !== "undefined" && utils_service_1.UtilsService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], AllExceptionsFilter);


/***/ }),

/***/ "./libs/core/src/interceptors/transform-res.interceptor.ts":
/*!*****************************************************************!*\
  !*** ./libs/core/src/interceptors/transform-res.interceptor.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformResponseInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let TransformResponseInterceptor = class TransformResponseInterceptor {
    intercept(c, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            if (!(data === null || data === void 0 ? void 0 : data.paging))
                return { data: data || null };
            delete data.paging;
            return data;
        }));
    }
};
exports.TransformResponseInterceptor = TransformResponseInterceptor;
exports.TransformResponseInterceptor = TransformResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], TransformResponseInterceptor);


/***/ }),

/***/ "./libs/core/src/middlewares/logger.middleware.ts":
/*!********************************************************!*\
  !*** ./libs/core/src/middlewares/logger.middleware.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LoggerReqMiddleware_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerReqMiddleware = void 0;
const utils_service_1 = __webpack_require__(/*! @app/helper/utils/utils.service */ "./libs/helper/src/utils/utils.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const enum_1 = __webpack_require__(/*! libs/constants/enum */ "./libs/constants/enum.ts");
let LoggerReqMiddleware = LoggerReqMiddleware_1 = class LoggerReqMiddleware {
    constructor(utilsService) {
        this.utilsService = utilsService;
        this.logger = new common_1.Logger(LoggerReqMiddleware_1.name);
    }
    use(req, res, next) {
        const body = this.utilsService.hideImportantInformation(req.body, enum_1.ValuesImportant);
        (async () => {
            try {
                const str = JSON.stringify(body);
                if (str.length < 2000) {
                    this.logger.debug(`[${req.method}]-[${req.ip}]: ${req.originalUrl} \n body: ${str}`);
                }
                else {
                    this.logger.debug(`[${req.method}]-[${req.ip}]: ${req.originalUrl} \n body: Body too large`);
                }
            }
            catch (error) { }
        })();
        next();
    }
};
exports.LoggerReqMiddleware = LoggerReqMiddleware;
exports.LoggerReqMiddleware = LoggerReqMiddleware = LoggerReqMiddleware_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof utils_service_1.UtilsService !== "undefined" && utils_service_1.UtilsService) === "function" ? _a : Object])
], LoggerReqMiddleware);


/***/ }),

/***/ "./libs/helper/src/config-system/config-system.service.ts":
/*!****************************************************************!*\
  !*** ./libs/helper/src/config-system/config-system.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggingService = exports.ConfigSystemService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const log4js_1 = __webpack_require__(/*! log4js */ "log4js");
let ConfigSystemService = class ConfigSystemService {
    setupSwagger(app, appName, version, contact, startUrl) {
        const documentBuilder = new swagger_1.DocumentBuilder()
            .setTitle(`${appName} api documentation`)
            .setDescription('Develop by Dev grass')
            .setVersion(version)
            .setContact(contact.name, contact.url, contact.email)
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, documentBuilder);
        swagger_1.SwaggerModule.setup(`${startUrl}/api`, app, document);
    }
    setUpLoggerLog4js() {
        (0, log4js_1.configure)({
            appenders: {
                console: {
                    type: 'console',
                },
                errorFile: {
                    type: 'dateFile',
                    filename: 'logs/error.log',
                    keepFileExt: true,
                    numBackups: 10,
                },
                errors: {
                    type: 'logLevelFilter',
                    level: 'ERROR',
                    appender: 'errorFile',
                },
            },
            categories: {
                default: { appenders: ['console', 'errors'], level: 'debug' },
            },
        });
    }
};
exports.ConfigSystemService = ConfigSystemService;
exports.ConfigSystemService = ConfigSystemService = __decorate([
    (0, common_2.Injectable)()
], ConfigSystemService);
class LoggingService extends common_1.ConsoleLogger {
    error(message, stack, context) {
        (0, log4js_1.getLogger)(context).error(stack, message);
    }
}
exports.LoggingService = LoggingService;


/***/ }),

/***/ "./libs/helper/src/helper.module.ts":
/*!******************************************!*\
  !*** ./libs/helper/src/helper.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HelperModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_system_service_1 = __webpack_require__(/*! ./config-system/config-system.service */ "./libs/helper/src/config-system/config-system.service.ts");
const utils_service_1 = __webpack_require__(/*! ./utils/utils.service */ "./libs/helper/src/utils/utils.service.ts");
let HelperModule = class HelperModule {
};
exports.HelperModule = HelperModule;
exports.HelperModule = HelperModule = __decorate([
    (0, common_1.Module)({
        providers: [config_system_service_1.ConfigSystemService, utils_service_1.UtilsService],
        exports: [config_system_service_1.ConfigSystemService, utils_service_1.UtilsService],
    })
], HelperModule);


/***/ }),

/***/ "./libs/helper/src/index.ts":
/*!**********************************!*\
  !*** ./libs/helper/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./helper.module */ "./libs/helper/src/helper.module.ts"), exports);


/***/ }),

/***/ "./libs/helper/src/utils/utils.service.ts":
/*!************************************************!*\
  !*** ./libs/helper/src/utils/utils.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UtilsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const enum_1 = __webpack_require__(/*! libs/constants/enum */ "./libs/constants/enum.ts");
let UtilsService = class UtilsService {
    constructor(configService) {
        this.configService = configService;
    }
    format(template, ...args) {
        return template.replace(/{(.*?)}/g, (match, key) => {
            const value = args.find((arg) => typeof arg === 'object' && arg.hasOwnProperty(key));
            return value ? value[key] : '';
        });
    }
    hideImportantInformation(data, keys) {
        const result = JSON.parse(JSON.stringify(data));
        keys.forEach((key) => {
            if (result.hasOwnProperty(key)) {
                result[key] = '************************';
            }
        });
        return result;
    }
    deepClone(object) {
        if (typeof object !== 'object' || !object) {
            return object;
        }
        const clonedObject = Array.isArray(object) ? [] : {};
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                if (object[key] instanceof Date) {
                    clonedObject[key] = new Date(object[key]);
                }
                else {
                    clonedObject[key] = this.deepClone(object[key]);
                }
            }
        }
        return clonedObject;
    }
    omitObject(object, omits) {
        const objectCopy = this.deepClone(object);
        omits.forEach((key) => {
            delete objectCopy[key];
        });
        return objectCopy;
    }
    pickObject(object, picks) {
        const objectCopy = this.deepClone(object);
        picks.forEach((key) => {
            if (!picks.includes(key))
                delete objectCopy[key];
        });
        return objectCopy;
    }
    async formatErrorObject(exception) {
        var _a;
        const errorObj = {
            success: false,
            statusCode: exception.status || common_1.HttpStatus.BAD_REQUEST,
            errorValue: enum_1.ErrorCustom.Unknown_Error,
            devMessage: undefined,
            payload: undefined,
        };
        if (exception instanceof common_1.HttpException) {
            const data = exception instanceof common_1.HttpException ? exception.getResponse() : exception['error'];
            if ((data === null || data === void 0 ? void 0 : data.error) === 'Not Found') {
                return {
                    success: false,
                    statusCode: (data === null || data === void 0 ? void 0 : data.status) || common_1.HttpStatus.BAD_REQUEST,
                    errorCode: enum_1.ErrorCustom.Not_Found.ErrorCode,
                    errorMessage: (data === null || data === void 0 ? void 0 : data.message) || enum_1.ErrorCustom.Not_Found.ErrorMessage,
                };
            }
            if ((data === null || data === void 0 ? void 0 : data.error) === 'Bad Request') {
                return {
                    success: false,
                    statusCode: (data === null || data === void 0 ? void 0 : data.status) || common_1.HttpStatus.BAD_REQUEST,
                    errorCode: enum_1.ErrorCustom.Invalid_Input.ErrorCode,
                    errorMessage: (data === null || data === void 0 ? void 0 : data.message) || enum_1.ErrorCustom.Invalid_Input.ErrorMessage,
                };
            }
            const extraData = this.pickObject(data, ['errorValue', 'statusCode', 'devMessage', 'payload', 'errorMessage']);
            Object.assign(errorObj, extraData);
            if (data === 'ThrottlerException: Too Many Requests') {
                Object.assign(errorObj, {
                    errorValue: enum_1.ErrorCustom.The_Allowed_Number_Of_Calls_Has_Been_Exceeded,
                    devMessage: 'Too Many Requests',
                });
            }
        }
        const errorValue = errorObj.errorValue;
        const errorMessageFormat = {};
        errorObj.errorMessage = ((_a = errorMessageFormat[errorValue.ErrorCode]) === null || _a === void 0 ? void 0 : _a.message) || errorValue.ErrorMessage;
        errorObj.errorCode = errorValue.ErrorCode;
        const keyOmit = ['errorValue'];
        if (this.configService.get('nodeEnv', enum_1.Environment.Development) === enum_1.Environment.Production) {
            keyOmit.push('devMessage');
        }
        if (errorObj.errorMessage) {
            errorObj.errorMessage = this.format(errorObj.errorMessage, errorObj.payload);
        }
        if (errorObj.devMessage) {
            errorObj.devMessage = this.format(errorObj.devMessage, errorObj.payload);
        }
        return this.omitObject(errorObj, ['errorValue']);
    }
};
exports.UtilsService = UtilsService;
exports.UtilsService = UtilsService = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], UtilsService);


/***/ }),

/***/ "./libs/jwt-authentication/src/index.ts":
/*!**********************************************!*\
  !*** ./libs/jwt-authentication/src/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./jwt-authentication.module */ "./libs/jwt-authentication/src/jwt-authentication.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./jwt-authentication.service */ "./libs/jwt-authentication/src/jwt-authentication.service.ts"), exports);


/***/ }),

/***/ "./libs/jwt-authentication/src/jwt-authentication.interface.ts":
/*!*********************************************************************!*\
  !*** ./libs/jwt-authentication/src/jwt-authentication.interface.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/jwt-authentication/src/jwt-authentication.module-definition.ts":
/*!*****************************************************************************!*\
  !*** ./libs/jwt-authentication/src/jwt-authentication.module-definition.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MODULE_OPTIONS_TOKEN = exports.ConfigurableModuleClass = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
_a = new common_1.ConfigurableModuleBuilder().build(), exports.ConfigurableModuleClass = _a.ConfigurableModuleClass, exports.MODULE_OPTIONS_TOKEN = _a.MODULE_OPTIONS_TOKEN;


/***/ }),

/***/ "./libs/jwt-authentication/src/jwt-authentication.module.ts":
/*!******************************************************************!*\
  !*** ./libs/jwt-authentication/src/jwt-authentication.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthenticationModule = void 0;
const jwt_authentication_service_1 = __webpack_require__(/*! ./jwt-authentication.service */ "./libs/jwt-authentication/src/jwt-authentication.service.ts");
const jwt_authentication_module_definition_1 = __webpack_require__(/*! ./jwt-authentication.module-definition */ "./libs/jwt-authentication/src/jwt-authentication.module-definition.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let JwtAuthenticationModule = class JwtAuthenticationModule extends jwt_authentication_module_definition_1.ConfigurableModuleClass {
};
exports.JwtAuthenticationModule = JwtAuthenticationModule;
exports.JwtAuthenticationModule = JwtAuthenticationModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [config_1.ConfigModule, jwt_1.JwtModule],
        providers: [jwt_authentication_service_1.JwtAuthenticationService],
        exports: [jwt_authentication_service_1.JwtAuthenticationService],
    })
], JwtAuthenticationModule);


/***/ }),

/***/ "./libs/jwt-authentication/src/jwt-authentication.service.ts":
/*!*******************************************************************!*\
  !*** ./libs/jwt-authentication/src/jwt-authentication.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthenticationService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_authentication_module_definition_1 = __webpack_require__(/*! ./jwt-authentication.module-definition */ "./libs/jwt-authentication/src/jwt-authentication.module-definition.ts");
const jwt_authentication_interface_1 = __webpack_require__(/*! ./jwt-authentication.interface */ "./libs/jwt-authentication/src/jwt-authentication.interface.ts");
const enum_1 = __webpack_require__(/*! libs/constants/enum */ "./libs/constants/enum.ts");
const exception_1 = __webpack_require__(/*! @app/core/exception */ "./libs/core/src/exception/index.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let JwtAuthenticationService = class JwtAuthenticationService {
    constructor(jwtService, options) {
        this.jwtService = jwtService;
        this.options = options;
    }
    async validateRequest(request) {
        const token = this.extractFromAuthHeaderByBearerToken(request);
        try {
            const decoded = this.jwtService.verify(token, {
                secret: this.options.secretOrKey,
                algorithms: ['HS256'],
            });
            Object.assign(request, { payload: decoded });
            return true;
        }
        catch (error) {
            throw new exception_1.Unauthorized("Your authorization token isn't valid. Please login again!");
        }
    }
    extractFromAuthHeaderByBearerToken(req) {
        const token = req.headers.authorization || '';
        return token.trim().replace('Bearer ', '');
    }
    generateAccessToken(payload) {
        const timeStamp = new Date().getTime();
        return this.jwtService.sign(Object.assign(Object.assign({}, payload), { tokenType: enum_1.TokenType.ACCESS_TOKEN, timeStamp }), {
            secret: this.options.secretOrKey,
            expiresIn: this.options.accessTokenExpiredIn,
            algorithm: 'HS256',
        });
    }
    generateTokenForgotPassword(payload) {
        return this.jwtService.sign(payload, {
            secret: this.options.secretOrKey,
            expiresIn: this.options.accessTokenExpiredIn,
            algorithm: 'HS256',
        });
    }
    generateRefreshToken(payload) {
        const timeStamp = new Date().getTime();
        return this.jwtService.sign(Object.assign(Object.assign({}, payload), { tokenType: enum_1.TokenType.REFRESH_TOKEN, timeStamp }), {
            secret: this.options.secretOrKey,
            expiresIn: this.options.refreshTokenExpiredIn,
            algorithm: 'HS256',
        });
    }
    verifyAccessToken(accessToken) {
        try {
            const payload = this.jwtService.verify(accessToken, {
                secret: this.options.secretOrKey,
            });
            return payload;
        }
        catch (error) {
            return false;
        }
    }
    verifyRefreshToken(refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken, {
                secret: this.options.secretOrKey,
            });
            return payload;
        }
        catch (error) {
            return false;
        }
    }
};
exports.JwtAuthenticationService = JwtAuthenticationService;
exports.JwtAuthenticationService = JwtAuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(jwt_authentication_module_definition_1.MODULE_OPTIONS_TOKEN)),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof jwt_authentication_interface_1.JwtAuthenticationModuleOptions !== "undefined" && jwt_authentication_interface_1.JwtAuthenticationModuleOptions) === "function" ? _b : Object])
], JwtAuthenticationService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/throttler":
/*!************************************!*\
  !*** external "@nestjs/throttler" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "log4js":
/*!*************************!*\
  !*** external "log4js" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("log4js");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const enum_1 = __webpack_require__(/*! libs/constants/enum */ "./libs/constants/enum.ts");
const setup_server_1 = __webpack_require__(/*! libs/constants/setup-server */ "./libs/constants/setup-server.ts");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/api/src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['log', 'error', 'warn', 'debug', 'verbose'],
        cors: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await (0, setup_server_1.SetupServerCommon)(app, 3000, enum_1.StartUrl.CLIENT);
}
bootstrap();

})();

/******/ })()
;