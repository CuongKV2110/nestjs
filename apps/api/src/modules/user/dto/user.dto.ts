import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
    @IsString()
    id: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsInt()
    role: number;

    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsString()
    refresh_token: string;
}
