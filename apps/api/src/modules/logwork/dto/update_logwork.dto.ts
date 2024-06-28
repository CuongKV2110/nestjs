import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class UpdateLogWorkDto {
    @IsInt()
    logworkId: number;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    workContent: string;

    @IsInt()
    @Min(0)
    workingHour: number;
}
