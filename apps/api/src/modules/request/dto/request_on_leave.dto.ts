import { IsInt, IsNotEmpty, IsPositive, IsString, Max, Min } from "class-validator";

export class RequestOnLeaveDto {
    @IsString({ message: 'Receiver request must be a string' })
    @IsNotEmpty({ message: 'Receiver request is required' })
    receiverRequest: string;

    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

    @IsString({ message: 'Reason must be a string' })
    @IsNotEmpty({ message: 'Reason is required' })
    reason: string;

    @IsInt({ message: 'Hour must be an integer' })
    @IsPositive({ message: 'Hour must be a positive number' })
    @Min(2)
    @Max(8)
    hour: number;
}
