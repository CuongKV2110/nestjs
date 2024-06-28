import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class PageSizeDto {
    @IsInt()
    @Min(1, { message: 'Page must be at least 1' })
    @Type(() => Number)
    page: number;

    @IsInt()
    @Min(1, { message: 'PageSize must be at least 1' })
    @Type(() => Number)
    pageSize: number;
}
