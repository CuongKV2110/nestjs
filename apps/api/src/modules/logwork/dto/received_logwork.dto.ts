import { PageSizeDto } from 'apps/api/src/utils/page_size.dto';
import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class ReceivedLogWorkDto extends PageSizeDto {
    @IsInt()
    @Type(() => Number)
    projectId: number;

    @IsInt()
    @Type(() => Number)

    typeRequest: number;
}
