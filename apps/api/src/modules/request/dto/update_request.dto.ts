import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateRequestDto {
    @IsNumber({}, { message: 'ID must be a number' })
    @IsNotEmpty({ message: 'ID is required' })
    requestId: number;

    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

    @IsString({ message: 'Reason must be a string' })
    @IsNotEmpty({ message: 'Reason is required' })
    reason: string;

    @IsDateString({}, { message: 'Start time must be a valid date string' })
    @IsNotEmpty({ message: 'Start time is required' })
    startTime: string;

    @IsDateString({}, { message: 'End time must be a valid date string' })
    @IsNotEmpty({ message: 'End time is required' })
    endTime: string;
}
