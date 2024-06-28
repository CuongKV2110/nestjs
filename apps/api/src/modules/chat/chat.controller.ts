import { ClientControllers } from '@app/core/decorator/controller-customer.decorator';
import { Body, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { PageSizeDto } from '../../utils/page_size.dto';
import { AuthGuard } from '../user/auth.guard';
import { ChatService } from './chat.service';
import { AddMemberDto } from './dto/add_member.dto';
import { CreateGroupChatDto } from './dto/create_group_chat.dto';
import { SendMessageDto } from './dto/send_message.dto';
import { ViewChatQuery } from './dto/view_chat_query';

@UseGuards(AuthGuard)
@ClientControllers('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }


    @Post('create')
    createGroupChat(
        @Body() createGroupChatDto: CreateGroupChatDto, @Req() req: any) {
        return this.chatService.createGroupChat(createGroupChatDto, req.user);
    }

    @Get()
    getInfoGroupChat() {
        return this.chatService.getInfoGroupChat();
    }

    @Get('list-chat')
    getListChat(
        @Query() pageSizeDto: PageSizeDto,
        @Req() req: any) {
        return this.chatService.getListChat(pageSizeDto, req.user);
    }

    @Get('view-chat')
    viewChat(
        @Query() viewChatQuery: ViewChatQuery,
        @Req() req: any
    ) {
        return this.chatService.viewChat(viewChatQuery, req.user);
    }

    @Post('send-message')
    sendMessage(
        @Body() body: SendMessageDto,
        @Req() req: any,
    ) {
        return this.chatService.sendMessage(body, req.user);
    }

    @Post('add-member')
    addMember(@Body() body: AddMemberDto) {
        return this.chatService.addMember(body);
    }

    @Post()
    joinGroupChat() {
        return this.chatService.joinGroupChat();
    }
}
