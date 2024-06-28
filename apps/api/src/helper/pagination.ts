export function getPagination(params: { page: number, pageSize: number }): { skip: number, take: number } {
    if (params.page <= 0 || params.pageSize <= 0) {
        throw new Error("Invalid page or pageSize value.");
    }

    const skip = (params.page - 1) * params.pageSize;
    const take = params.pageSize;

    return { skip, take };
}
