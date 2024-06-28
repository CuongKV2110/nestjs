"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueName = exports.ReadNotification = exports.QueueProcessor = exports.NotificationRedirectType = exports.NotificationTargetType = exports.EmailType = exports.VerificationCodeStatus = exports.RequestCodeType = exports.Gender = exports.ResourceType = exports.RoleId = exports.Permissions = exports.CommonStatus = exports.TokenType = exports.UserType = exports.Environment = exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["Unknown_Error"] = "Unknown_Error";
    ErrorCode["Invalid_Input"] = "Invalid_Input";
    ErrorCode["Not_Found"] = "Not_Found";
    ErrorCode["Token_Not_Exist"] = "Token_Not_Exist";
    ErrorCode["Forbidden_Resource"] = "Forbidden_Resource";
    ErrorCode["Unauthorized"] = "Unauthorized";
    ErrorCode["Too_Many_Requests"] = "Too_Many_Requests";
    ErrorCode["Email_Already_Exist"] = "Email_Already_Exist";
    ErrorCode["Email_Or_Password_Not_valid"] = "Email_Or_Password_Not_valid";
    ErrorCode["Resource_Already_Exists"] = "Resource_Already_Exists";
    ErrorCode["Can_Not_Disable_Default_language"] = "Can_Not_Disable_Default_language";
    ErrorCode["The_Allowed_Number_Of_Calls_Has_Been_Exceeded"] = "The_Allowed_Number_Of_Calls_Has_Been_Exceeded";
    ErrorCode["Conversation_Not_Found"] = "Conversation_Not_Found";
    ErrorCode["Message_Not_Found"] = "Message_Not_Found";
    ErrorCode["You_Are_Not_Member_Of_This_Conversation"] = "You_Are_Not_Member_Of_This_Conversation";
    ErrorCode["You_Are_No_Longer_Active_In_This_Conversation"] = "You_Are_No_Longer_Active_In_This_Conversation";
    ErrorCode["Verify_Token_Fail"] = "Verify_Token_Fail";
    ErrorCode["Validate_fail"] = "Validate_fail";
    ErrorCode["User_In_Active"] = "User_In_Active";
    ErrorCode["Auth_Failed"] = "Auth_Failed";
    ErrorCode["Access_Denied"] = "Access_Denied";
    ErrorCode["Email_Already_Exists"] = "Email_Already_Exists";
    ErrorCode["Maximum_Retry_Verification_Code"] = "Maximum_Retry_Verification_Code";
    ErrorCode["Delay_Between_Retry_Required"] = "Delay_Between_Retry_Required";
    ErrorCode["Not_Found_User"] = "Not_Found_User";
    ErrorCode["User_Exist"] = "User_Exist";
    ErrorCode["Duplicate_Old_Password"] = "Duplicate_Old_Password";
    ErrorCode["Token_Expired"] = "Token_Expired";
    ErrorCode["Verification_Code_Invalid"] = "Verification_Code_Invalid";
    ErrorCode["User_Not_Found"] = "User_Not_Found";
    ErrorCode["Task_Duplicate"] = "Task_Duplicate";
    ErrorCode["Task_Not_Found"] = "Task_Not_Found";
    ErrorCode["Update_Task_Fail"] = "Update_Task_Fail";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
var Environment;
(function (Environment) {
    Environment["Development"] = "development";
    Environment["Staging"] = "staging";
    Environment["Production"] = "production";
    Environment["Test"] = "test";
})(Environment || (exports.Environment = Environment = {}));
var UserType;
(function (UserType) {
    UserType["CLIENT"] = "CLIENT";
    UserType["ADMIN"] = "ADMIN";
    UserType["SUPER_ADMIN"] = "SUPER_ADMIN";
})(UserType || (exports.UserType = UserType = {}));
var TokenType;
(function (TokenType) {
    TokenType["ACCESS_TOKEN"] = "ACCESS_TOKEN";
    TokenType["REFRESH_TOKEN"] = "REFRESH_TOKEN";
})(TokenType || (exports.TokenType = TokenType = {}));
var CommonStatus;
(function (CommonStatus) {
    CommonStatus[CommonStatus["INACTIVE"] = 0] = "INACTIVE";
    CommonStatus[CommonStatus["ACTIVE"] = 1] = "ACTIVE";
    CommonStatus[CommonStatus["NOT_VERIFY"] = 2] = "NOT_VERIFY";
    CommonStatus[CommonStatus["REJECT"] = 3] = "REJECT";
})(CommonStatus || (exports.CommonStatus = CommonStatus = {}));
var Permissions;
(function (Permissions) {
    Permissions[Permissions["PERMISSION_MANAGEMENT"] = 1] = "PERMISSION_MANAGEMENT";
    Permissions[Permissions["CONFIG_MANAGEMENT"] = 2] = "CONFIG_MANAGEMENT";
    Permissions[Permissions["RESOURCE_MANAGEMENT"] = 3] = "RESOURCE_MANAGEMENT";
    Permissions[Permissions["LANGUAGE_MANAGEMENT"] = 4] = "LANGUAGE_MANAGEMENT";
})(Permissions || (exports.Permissions = Permissions = {}));
var RoleId;
(function (RoleId) {
    RoleId[RoleId["ADMIN"] = 1] = "ADMIN";
    RoleId[RoleId["USER"] = 2] = "USER";
})(RoleId || (exports.RoleId = RoleId = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["TERM"] = 1] = "TERM";
    ResourceType[ResourceType["POLICY"] = 2] = "POLICY";
    ResourceType[ResourceType["HELP"] = 3] = "HELP";
})(ResourceType || (exports.ResourceType = ResourceType = {}));
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 1] = "MALE";
    Gender[Gender["FEMALE"] = 2] = "FEMALE";
    Gender[Gender["ALL"] = 3] = "ALL";
})(Gender || (exports.Gender = Gender = {}));
var RequestCodeType;
(function (RequestCodeType) {
    RequestCodeType[RequestCodeType["REGISTER"] = 1] = "REGISTER";
    RequestCodeType[RequestCodeType["CHANGE_PASSWORD"] = 2] = "CHANGE_PASSWORD";
})(RequestCodeType || (exports.RequestCodeType = RequestCodeType = {}));
var VerificationCodeStatus;
(function (VerificationCodeStatus) {
    VerificationCodeStatus[VerificationCodeStatus["INACTIVE"] = 0] = "INACTIVE";
    VerificationCodeStatus[VerificationCodeStatus["ACTIVE"] = 1] = "ACTIVE";
    VerificationCodeStatus[VerificationCodeStatus["USE"] = 2] = "USE";
})(VerificationCodeStatus || (exports.VerificationCodeStatus = VerificationCodeStatus = {}));
var EmailType;
(function (EmailType) {
    EmailType[EmailType["TEST"] = 0] = "TEST";
})(EmailType || (exports.EmailType = EmailType = {}));
var NotificationTargetType;
(function (NotificationTargetType) {
    NotificationTargetType[NotificationTargetType["COMMON"] = 1] = "COMMON";
    NotificationTargetType[NotificationTargetType["ALL"] = 2] = "ALL";
})(NotificationTargetType || (exports.NotificationTargetType = NotificationTargetType = {}));
var NotificationRedirectType;
(function (NotificationRedirectType) {
    NotificationRedirectType[NotificationRedirectType["TEST"] = 1] = "TEST";
})(NotificationRedirectType || (exports.NotificationRedirectType = NotificationRedirectType = {}));
var QueueProcessor;
(function (QueueProcessor) {
    QueueProcessor["PUSH_NOTIFICATION"] = "PUSH_NOTIFICATION";
    QueueProcessor["SEND_MAIL"] = "SEND_MAIL";
})(QueueProcessor || (exports.QueueProcessor = QueueProcessor = {}));
var ReadNotification;
(function (ReadNotification) {
    ReadNotification[ReadNotification["UNREAD"] = 0] = "UNREAD";
    ReadNotification[ReadNotification["READ"] = 1] = "READ";
})(ReadNotification || (exports.ReadNotification = ReadNotification = {}));
var QueueName;
(function (QueueName) {
    QueueName["SEND_MAIL"] = "SEND_MAIL";
    QueueName["PUSH_NOTIFICATION"] = "PUSH_NOTIFICATION";
    QueueName["ADMIN_PUSH_NOTIFICATION_ALL_MEMBERS"] = "ADMIN_PUSH_NOTIFICATION_ALL_MEMBERS";
    QueueName["PUSH_NOTIFICATION_WITH_PLAYER_ID"] = "PUSH_NOTIFICATION_WITH_PLAYER_ID";
})(QueueName || (exports.QueueName = QueueName = {}));
//# sourceMappingURL=enum.js.map