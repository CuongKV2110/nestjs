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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.substrContent = exports.handleInputPaging = exports.handleOutputPaging = exports.convertToObject = exports.reformatFileLanguage = exports.isBetween = exports.assignPaging = exports.assignLoadMore = exports.returnLoadMore = exports.returnPaging = void 0;
const flatten = __importStar(require("flat"));
function returnPaging(data, totalItems, params, metadata = {}) {
    const totalPages = Math.ceil(totalItems / params.pageSize);
    return Object.assign({ paging: true, hasMore: params.pageIndex < totalPages, pageIndex: params.pageIndex, totalPages: Math.ceil(totalItems / params.pageSize), totalItems,
        data }, metadata);
}
exports.returnPaging = returnPaging;
function returnLoadMore(data, params, metadata = {}) {
    return Object.assign({ paging: true, hasMore: data.length === params.pageSize, data, pageSize: params.pageSize }, metadata);
}
exports.returnLoadMore = returnLoadMore;
function assignLoadMore(params) {
    params.pageSize = Number(params.pageSize) || 10;
    return params;
}
exports.assignLoadMore = assignLoadMore;
function assignPaging(params) {
    params.pageIndex = Number(params.pageIndex) || 1;
    params.pageSize = Number(params.pageSize) || 10;
    params.skip = (params.pageIndex - 1) * params.pageSize;
    return params;
}
exports.assignPaging = assignPaging;
const isBetween = (num, min, max) => {
    try {
        if (Number(min) > Number(max))
            return false;
        if (Number(num) > Number(max))
            return false;
        if (Number(num) < Number(min))
            return false;
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isBetween = isBetween;
function reformatFileLanguage(data, params) {
    const groupByLanguageCode = convertToObject(data, 'code');
    const languageObject = Object.keys(groupByLanguageCode).reduce((acc, cur) => {
        acc[cur] = groupByLanguageCode[cur].reduce((ac, cu) => {
            ac[cu.key] = cu.value;
            return ac;
        }, {});
        return acc;
    }, {});
    const result = flatten.unflatten(languageObject);
    if (params.code) {
        return result[params.code];
    }
    return result;
}
exports.reformatFileLanguage = reformatFileLanguage;
function convertToObject(data, key) {
    const result = {};
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const keyEl = element[key];
        if (!result[keyEl]) {
            result[keyEl] = [];
        }
        delete element[key];
        result[keyEl].push(element);
    }
    return result;
}
exports.convertToObject = convertToObject;
function handleOutputPaging(data, totalItems, params, metadata = {}) {
    return Object.assign({ data,
        totalItems, pageIndex: params.pageIndex, totalPages: Math.ceil(totalItems / params.take), hasMore: data ? (data.length < params.take ? false : true) : false }, metadata);
}
exports.handleOutputPaging = handleOutputPaging;
function handleInputPaging(params) {
    params.pageIndex = Number(params.pageIndex) || 1;
    params.take = Number(params.take) || 10;
    params.skip = (params.pageIndex - 1) * params.take;
    return params;
}
exports.handleInputPaging = handleInputPaging;
function substrContent(content, index) {
    return content.length > index ? content.substring(0, index) + '...' : content;
}
exports.substrContent = substrContent;
//# sourceMappingURL=utils.js.map