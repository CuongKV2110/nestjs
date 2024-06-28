import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UserInfoDto {
    @IsString()
    id: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsInt()
    role: number;

    @IsEmail({}, { message: 'Invalid email format' })
    email: string;
}
