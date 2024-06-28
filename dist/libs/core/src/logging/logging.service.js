"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const common_1 = require("@nestjs/common");
const log4js_1 = require("log4js");
class CustomLogger extends common_1.ConsoleLogger {
    error(message, stack, context) {
        (0, log4js_1.getLogger)(context).error(stack, message);
    }
}
exports.CustomLogger = CustomLogger;
//# sourceMappingURL=logging.service.js.map