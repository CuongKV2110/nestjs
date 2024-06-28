import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class UserRegisterDto {
    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsInt()
    role: number;

    @IsEmail({}, { message: 'Invalid email format' })
    email: string;
}
