import { ArrayNotEmpty, IsArray, IsDateString, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateProjectDto {
    @IsString()
    @IsNotEmpty({ message: 'ProjectName is required' })
    projectName: string;

    @IsUUID()
    projectManagerId: string;

    @IsDateString()
    @IsNotEmpty({ message: 'startDate is required' })
    startDate: string;

    @IsDateString()
    @IsNotEmpty({ message: 'endDate is required' })
    endDate: string;

    @IsString()
    description: string;

    @IsArray({ message: 'Members must be an array' })
    @ArrayNotEmpty({ message: 'Members array must not be empty' })
    @IsUUID('4', { each: true, message: 'Each member ID must be a valid UUID' })
    members: string[];
}
