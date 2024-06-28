"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntity = exports.Unauthorized = exports.Forbidden = exports.Exception = exports.CustomExceptionFactory = void 0;
const common_1 = require("@nestjs/common");
const enum_1 = require("../../../constants/enum");
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
//# sourceMappingURL=index.js.map