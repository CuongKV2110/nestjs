export declare class PageSizeDto {
    pageIndex: number;
    pageSize: number;
    skip?: number;
    keyword?: string;
}
export declare class LoadMoreDto {
    takeAfter: string;
    pageSize: number;
    keyword?: string;
}
