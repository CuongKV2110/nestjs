import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class SendMessageDto {
    @IsString()
    @IsNotEmpty()
    content: string;

    @IsInt()
    groupChatId: number;
}
