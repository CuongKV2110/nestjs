import { IsInt } from 'class-validator';

export class HandleLogWorkDto {
    @IsInt()
    logworkId: number;

    @IsInt()
    type: number;
}
