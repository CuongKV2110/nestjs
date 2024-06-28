"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignLoadMore = exports.AssignPagingPipe = exports.CustomParseIntPipe = exports.TransformParamsSort = exports.IsParamsSort = exports.ArrayDistinct = exports.ArrayItemUnique = exports.IsLongerThan = exports.CustomValidateIsIsKatakana = exports.CustomValidateIsPassword = exports.CustomValidateIsIsPostCodeJv = exports.CustomValidateIsNotEmail = exports.CustomValidateIsDate = exports.CustomISOString = exports.CustomTextLength = void 0;
const exception_1 = require("@app/core/exception");
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const ISOStringRegex = new RegExp('^\\d\\d\\d\\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01])T(00|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9].[0-9][0-9][0-9])Z$');
let CustomTextLength = class CustomTextLength {
    validate(text, args) {
        return false;
    }
    defaultMessage(args) {
        return 'Text ($value) is too short or too long!';
    }
};
exports.CustomTextLength = CustomTextLength;
exports.CustomTextLength = CustomTextLength = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'customText', async: false })
], CustomTextLength);
let CustomISOString = class CustomISOString {
    validate(dateTimeString, args) {
        try {
            const isIOSString = ISOStringRegex.test(dateTimeString);
            const date = new Date(dateTimeString).toISOString();
            return isIOSString && date === dateTimeString;
        }
        catch (error) {
            return false;
        }
    }
    defaultMessage(args) {
        return `${args.property} must be ISOString `;
    }
};
exports.CustomISOString = CustomISOString;
exports.CustomISOString = CustomISOString = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'ISOString', async: false })
], CustomISOString);
let CustomValidateIsDate = class CustomValidateIsDate {
    validate(dateString, args) {
        const regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateString.match(regEx))
            return false;
        const d = new Date(dateString);
        const dNum = d.getTime();
        if (!dNum && dNum !== 0)
            return false;
        return d.toISOString().slice(0, 10) === dateString;
    }
    defaultMessage(args) {
        return 'Date is format yyyy-mm-dd';
    }
};
exports.CustomValidateIsDate = CustomValidateIsDate;
exports.CustomValidateIsDate = CustomValidateIsDate = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsDateCustom', async: false })
], CustomValidateIsDate);
let CustomValidateIsNotEmail = class CustomValidateIsNotEmail {
    validate(text, args) {
        const IsEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return !IsEmailRegex.test(text);
    }
    defaultMessage(args) {
        return `${args.property} is not email`;
    }
};
exports.CustomValidateIsNotEmail = CustomValidateIsNotEmail;
exports.CustomValidateIsNotEmail = CustomValidateIsNotEmail = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsNotEmail', async: false })
], CustomValidateIsNotEmail);
let CustomValidateIsIsPostCodeJv = class CustomValidateIsIsPostCodeJv {
    validate(text, args) {
        const IsPostCodeJv = /^\d{3}-\d{4}$/;
        return IsPostCodeJv.test(text);
    }
    defaultMessage(args) {
        return `${args.property} format postcode jv xxx-xxxxx`;
    }
};
exports.CustomValidateIsIsPostCodeJv = CustomValidateIsIsPostCodeJv;
exports.CustomValidateIsIsPostCodeJv = CustomValidateIsIsPostCodeJv = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsPostCodeJv', async: false })
], CustomValidateIsIsPostCodeJv);
let CustomValidateIsPassword = class CustomValidateIsPassword {
    validate(text, args) {
        const IsPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z_@./!#$%^*()&+-]{8,}$/;
        return IsPassword.test(text);
    }
    defaultMessage(args) {
        return `${args.property} minimum of eight characters, at least one uppercase letter, one lowercase letter, and one number`;
    }
};
exports.CustomValidateIsPassword = CustomValidateIsPassword;
exports.CustomValidateIsPassword = CustomValidateIsPassword = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsPassword', async: false })
], CustomValidateIsPassword);
let CustomValidateIsIsKatakana = class CustomValidateIsIsKatakana {
    validate(text, args) {
        const IsKatakana = /^[\u30A0-\u30FFー　 _]+$/;
        return IsKatakana.test(text);
    }
    defaultMessage(args) {
        return `${args.property} format katakana`;
    }
};
exports.CustomValidateIsIsKatakana = CustomValidateIsIsKatakana;
exports.CustomValidateIsIsKatakana = CustomValidateIsIsKatakana = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsKatakana', async: false })
], CustomValidateIsIsKatakana);
function IsLongerThan(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isLongerThan',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: CustomTextLength,
        });
    };
}
exports.IsLongerThan = IsLongerThan;
function ArrayItemUnique(property, validationOptions, metadata) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'ArrayItemUnique',
            target: object.constructor,
            propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value) {
                    if (Array.isArray(value)) {
                        const distinct = value.filter((item) => item[property] === metadata[property]);
                        return distinct.length === 1 || value.length === 0;
                    }
                    return false;
                },
                defaultMessage(args) {
                    return `${propertyName} there must be an item that has ${property} equal ${metadata[property]}`;
                },
            },
        });
    };
}
exports.ArrayItemUnique = ArrayItemUnique;
function ArrayDistinct(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'ArrayDistinct',
            target: object.constructor,
            propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value) {
                    if (Array.isArray(value)) {
                        const arrayNotId = value.filter((item) => item[property]);
                        const distinct = [...new Set(arrayNotId.map((v) => v[property]))];
                        return distinct.length === arrayNotId.length || distinct.length === 0;
                    }
                    return false;
                },
                defaultMessage(args) {
                    return `${args.property} must not contains duplicate entry for ${args.constraints[0]}`;
                },
            },
        });
    };
}
exports.ArrayDistinct = ArrayDistinct;
function IsParamsSort(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'IsParamsSort',
            target: object.constructor,
            propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, target) {
                    try {
                        return JSON.parse(value);
                    }
                    catch (error) {
                        return false;
                    }
                },
                defaultMessage(args) {
                    return `${args.property} Must be JSON`;
                },
            },
        });
    };
}
exports.IsParamsSort = IsParamsSort;
function TransformParamsSort(data, property) {
    if (data) {
        data = JSON.parse(data);
        const keys = Object.keys(data);
        const ascending = 'ASC';
        const decrease = 'DESC';
        return keys.reduce((acc, cur) => {
            if (property.includes(cur)) {
                acc.push({ key: cur, value: data[cur] ? ascending : decrease });
            }
            return acc;
        }, []);
    }
    return [];
}
exports.TransformParamsSort = TransformParamsSort;
let CustomParseIntPipe = class CustomParseIntPipe {
    transform(value, metadata) {
        const isNumeric = ['string', 'number'].includes(typeof value) && !isNaN(parseFloat(value)) && isFinite(value);
        if (!isNumeric) {
            throw new exception_1.UnprocessableEntity('Validation failed (numeric string is expected)');
        }
        return parseInt(value, 10);
    }
};
exports.CustomParseIntPipe = CustomParseIntPipe;
exports.CustomParseIntPipe = CustomParseIntPipe = __decorate([
    (0, common_1.Injectable)()
], CustomParseIntPipe);
let AssignPagingPipe = class AssignPagingPipe {
    transform(value) {
        const pageIndex = Number(value.pageIndex) || 1;
        const pageSize = Number(value.pageSize) || 10;
        value.pageIndex = pageIndex;
        value.pageSize = pageSize;
        value.skip = (pageIndex - 1) * pageSize;
        return value;
    }
};
exports.AssignPagingPipe = AssignPagingPipe;
exports.AssignPagingPipe = AssignPagingPipe = __decorate([
    (0, common_1.Injectable)()
], AssignPagingPipe);
let AssignLoadMore = class AssignLoadMore {
    transform(value) {
        const pageSize = Number(value.pageSize) || 10;
        value.pageSize = pageSize;
        return value;
    }
};
exports.AssignLoadMore = AssignLoadMore;
exports.AssignLoadMore = AssignLoadMore = __decorate([
    (0, common_1.Injectable)()
], AssignLoadMore);
//# sourceMappingURL=validation.pipe.js.map