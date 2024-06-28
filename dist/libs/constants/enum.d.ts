export declare enum StartUrl {
    CLIENT = "client",
    CMS = "cms"
}
export declare enum CommonStatus {
    IN_ACTIVE = 0,
    ACTIVE = 1
}
export declare enum UserStatus {
    IN_ACTIVE = 0,
    USE_FREE = 1,
    PENDING = 2,
    ACTIVE = 3
}
export declare enum UserType {
    SUPER_ADMIN = 1,
    CLIENT = 2
}
export declare enum Environment {
    Development = "development",
    Staging = "staging",
    Production = "production",
    Test = "test"
}
export declare const ErrorCustom: {
    Test: {
        ErrorCode: string;
        ErrorMessage: string;
    };
    Unauthorized: {
        ErrorCode: string;
        ErrorMessage: string;
    };
    Invalid_Input: {
        ErrorCode: string;
        ErrorMessage: string;
    };
    Not_Found: {
        ErrorCode: string;
        ErrorMessage: string;
    };
    Unknown_Error: {
        ErrorCode: string;
        ErrorMessage: string;
    };
    The_Allowed_Number_Of_Calls_Has_Been_Exceeded: {
        ErrorCode: string;
        ErrorMessage: string;
    };
    Forbidden_Resource: {
        ErrorCode: string;
        ErrorMessage: string;
    };
};
export type ErrorValues = (typeof ErrorCustom)[keyof typeof ErrorCustom];
export declare const ValuesImportant: string[];
export declare enum TokenType {
    ACCESS_TOKEN = "ACCESS_TOKEN",
    REFRESH_TOKEN = "REFRESH_TOKEN"
}
