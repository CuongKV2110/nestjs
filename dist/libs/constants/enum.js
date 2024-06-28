"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=enum.js.map