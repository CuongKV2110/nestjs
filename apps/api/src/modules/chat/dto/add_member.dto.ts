import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class AddMemberDto {
    @IsInt()
    @IsNotEmpty()
    groupId: number;

    @IsString()
    @IsNotEmpty()
    memberId: string;
}
