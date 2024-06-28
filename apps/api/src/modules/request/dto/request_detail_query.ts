import { IsInt, Max, Min } from 'class-validator';

export class RequestDetailQuery {
    @IsInt()
    requestId: number;

    @IsInt()
    @Min(0)
    @Max(4)
    type: number;
}
