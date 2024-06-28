import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';
import { PageSizeDto } from 'apps/api/src/utils/page_size.dto';

export class ViewChatQuery extends PageSizeDto {
    @IsInt()
    @Min(1, { message: 'GroupChatId must be a positive integer' })
    @Type(() => Number)
    groupChatId: number;
}
