import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupChat } from '../../database/entities/group_chat';
import { GroupChatMember } from '../../database/entities/group_chat_member';
import { Message } from '../../database/entities/message';
import User from '../../database/entities/user';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
    controllers: [ChatController],
    providers: [ChatService],
    imports: [
        TypeOrmModule.forFeature([GroupChat, GroupChatMember, Message, User]),
    ]
})
export class ChatModule { }
