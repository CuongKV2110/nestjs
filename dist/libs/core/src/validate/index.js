"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.removeUnexpectedField = exports.AjvInstance = void 0;
const helpers_1 = require("@app/helpers");
const ajv_1 = __importDefault(require("ajv"));
const ajv_formats_1 = __importDefault(require("ajv-formats"));
const lodash_1 = require("lodash");
const exception_1 = require("../exception");
const ISOStringRegex = new RegExp('^\\d\\d\\d\\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])T(00|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9].[0-9][0-9][0-9])Z$');
exports.AjvInstance = new ajv_1.default();
(0, ajv_formats_1.default)(exports.AjvInstance);
exports.AjvInstance.addFormat('ISOString', {
    validate: (dateTimeString) => {
        try {
            const isMatchRegex = ISOStringRegex.test(dateTimeString);
            const isValidDate = new Date(dateTimeString);
            return !!isMatchRegex && !!isValidDate;
        }
        catch (error) {
            return false;
        }
    },
});
exports.AjvInstance.addFormat('latitude', {
    validate: (lat) => (0, helpers_1.isBetween)(lat, '-90', '90'),
});
exports.AjvInstance.addFormat('longitude', {
    validate: (lng) => (0, helpers_1.isBetween)(lng, '-180', '180'),
});
exports.AjvInstance.addFormat('integer', {
    validate: (num) => Number.isInteger(+num),
});
const unexpectedFields = ['description', 'example', 'examples'];
function removeUnexpectedField(schemaKeyRef) {
    schemaKeyRef = JSON.parse(JSON.stringify(schemaKeyRef));
    const keys = Object.keys(schemaKeyRef);
    unexpectedFields.forEach((item) => {
        delete schemaKeyRef[item];
    });
    keys.forEach((key) => {
        if (typeof schemaKeyRef[key] === 'object') {
            removeUnexpectedField(schemaKeyRef[key]);
        }
    });
}
exports.removeUnexpectedField = removeUnexpectedField;
function validate(schemaKeyRef, data) {
    var _a;
    removeUnexpectedField(schemaKeyRef);
    const validate = exports.AjvInstance.validate(schemaKeyRef, data);
    if (!validate) {
        if (((_a = exports.AjvInstance === null || exports.AjvInstance === void 0 ? void 0 : exports.AjvInstance.errors) === null || _a === void 0 ? void 0 : _a.length) === 1) {
            throw new exception_1.UnprocessableEntity((0, lodash_1.first)(exports.AjvInstance.errors));
        }
        else {
            throw new exception_1.UnprocessableEntity(exports.AjvInstance.errors);
        }
    }
    return true;
}
exports.validate = validate;
//# sourceMappingURL=index.js.map