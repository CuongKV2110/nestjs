import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLogworkDto {
    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

    @IsNumber({}, { message: 'Type must be a number' })
    @IsNotEmpty({ message: 'Type is required' })
    type: number;

    @IsString({ message: 'Work content must be a string' })
    @IsNotEmpty({ message: 'Work content is required' })
    workContent: string;

    @IsNumber({}, { message: 'Project ID must be a number' })
    @IsNotEmpty({ message: 'Project ID is required' })
    projectId: number;

    @IsString({ message: 'Work date must be a string' })
    @IsNotEmpty({ message: 'Work date is required' })
    workDate: string;

    @IsNumber({}, { message: 'Working hours must be a number' })
    @IsNotEmpty({ message: 'Working hours is required' })
    workingHours: number;
}
