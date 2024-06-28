import { ArrayNotEmpty, IsArray, IsNumber, IsUUID } from 'class-validator';

export class AddMemberDto {
    @IsNumber(undefined, { message: 'ProjectId must be a number' })
    projectId: number;

    @IsArray({ message: 'Members must be an array' })
    @ArrayNotEmpty({ message: 'Members array must not be empty' })
    @IsUUID('4', { each: true, message: 'Each member ID must be a valid UUID' })
    listMember: string[];
}
