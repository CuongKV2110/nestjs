import { LiteralObject } from '@nestjs/common';
export declare function returnPaging(data: LiteralObject[], totalItems: number, params: LiteralObject, metadata?: {}): {
    paging: boolean;
    hasMore: boolean;
    pageIndex: any;
    totalPages: number;
    totalItems: number;
    data: LiteralObject[];
};
export declare function returnLoadMore(data: LiteralObject[], params: LiteralObject, metadata?: {}): {
    paging: boolean;
    hasMore: boolean;
    data: LiteralObject[];
    pageSize: any;
};
export declare function assignLoadMore(params: LiteralObject): LiteralObject;
export declare function assignPaging(params: LiteralObject): LiteralObject;
type numberOrStringNumber = string | number;
export declare const isBetween: (num: numberOrStringNumber, min: numberOrStringNumber, max: numberOrStringNumber) => boolean;
export declare function reformatFileLanguage(data: Array<any>, params: {
    code?: string;
    env: string;
}): any;
export declare function convertToObject(data: Array<Object>, key: string): {
    [key: string]: Array<any>;
};
export declare function handleOutputPaging(data: any, totalItems: number, params: any, metadata?: {}): {
    data: any;
    totalItems: number;
    pageIndex: any;
    totalPages: number;
    hasMore: boolean;
};
export declare function handleInputPaging(params: any): any;
export declare function substrContent(content: string, index: number): string;
export {};
