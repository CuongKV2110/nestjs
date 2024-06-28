import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsString, IsUUID, Max, Min } from 'class-validator';

export class CreateGroupChatDto {
    @IsString({ message: 'Chat name must be a string' })
    @IsNotEmpty({ message: 'Chat name is required' })
    chatName: string;

    @IsString({ message: 'Description must be a string' })
    @IsNotEmpty({ message: 'Description is required' })
    description: string;

    @IsInt({ message: 'Is private must be an integer' })
    @Min(0, { message: 'Is private must be 0 or 1' })
    @Max(1, { message: 'Is private must be 0 or 1' })
    @IsNotEmpty({ message: 'Is private is required' })
    isPrivate: number;

    @IsArray({ message: 'Members must be an array' })
    @ArrayNotEmpty({ message: 'Members array must not be empty' })
    @IsUUID('4', { each: true, message: 'Each member ID must be a valid UUID' })
    members: string[];
}
