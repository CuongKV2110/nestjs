import { IsInt, Max, Min } from 'class-validator';

export class HandleRequestDto {
    @IsInt()
    requestId: number;

    @IsInt()
    @Min(0)
    @Max(4)
    status: number;
}
