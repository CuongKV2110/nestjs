import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { GroupChatStatus, MessageStatus, MessageText } from '../../constants/enum';
import { GroupChat } from '../../database/entities/group_chat';
import { GroupChatMember } from '../../database/entities/group_chat_member';
import { Message } from '../../database/entities/message';
import User from '../../database/entities/user';
import { getPagination } from '../../helper/pagination';
import { PageSizeDto } from '../../utils/page_size.dto';
import { AddMemberDto } from './dto/add_member.dto';
import { CreateGroupChatDto } from './dto/create_group_chat.dto';
import { GroupChatDto } from './dto/group_chat.dto';
import { MessageDto } from './dto/message.dto';
import { SendMessageDto } from './dto/send_message.dto';
import { ViewChatQuery } from './dto/view_chat_query';

@Injectable()
export class ChatService {
    constructor(
        @InjectRepository(GroupChat)
        private readonly groupChatRepository: Repository<GroupChat>,

        @InjectRepository(GroupChatMember)
        private readonly groupChatMemberRepository: Repository<GroupChatMember>,

        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
    ) { }


    async createGroupChat(createGroupChatDto: CreateGroupChatDto, user: any): Promise<{ success: boolean; message?: string }> {
        return this.groupChatRepository.manager.transaction(async (transactionalEntityManager: EntityManager) => {
            try {
                const { chatName, isPrivate, description, members } = createGroupChatDto;

                const userRepository = transactionalEntityManager.getRepository(User);
                const validUsers = await userRepository.findByIds(members);

                if (validUsers.length !== members.length) {
                    throw new Error(MessageText.Member_Not_Exists);
                }

                if (members.includes(user.id)) {
                    throw new Error(MessageText.Member_Duplicate);
                }
                const newGroupChat = transactionalEntityManager.create(GroupChat, {
                    chatName,
                    isPrivate,
                    isDeleted: GroupChatStatus.Active,
                    description,
                    createdBy: user.id,
                });

                const savedGroupChat = await transactionalEntityManager.save(GroupChat, newGroupChat);

                members.push(user.id);
                const groupChatMembers = createGroupChatDto.members.map(memberId => ({
                    groupChatId: savedGroupChat.id,
                    userId: memberId,
                    joinedAt: new Date().toISOString(),
                }));

                await transactionalEntityManager.insert(GroupChatMember, groupChatMembers);

                return {
                    success: true,
                }
            } catch (error) {
                return {
                    success: false,
                    message: error.message
                };
            }
        });
    }

    async addMember(addMemberDto: AddMemberDto): Promise<{ success: boolean, message?: string }> {
        try {
            const { groupId, memberId } = addMemberDto;
            const groupChatMembers = await this.groupChatMemberRepository.find({
                where: {
                    groupChatId: addMemberDto.groupId
                }
            });
            const memberIds: string[] = [];
            groupChatMembers.forEach(member => {
                memberIds.push(member.userId);
            });

            if (memberIds.includes(memberId)) {
                throw new Error('member was joined');
            }
            else {
                const newGroupChatMember = this.groupChatMemberRepository.create({
                    groupChatId: groupId,
                    userId: memberId,
                    joinedAt: new Date().toString()
                });
                await this.groupChatMemberRepository.save(newGroupChatMember);
                return {
                    success: true,
                };
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }


    async getListChat(pageSizeDto: PageSizeDto, user: any): Promise<{ success: boolean, data?: GroupChatDto[], message?: string }> {
        try {
            const { skip, take } = getPagination(pageSizeDto);
            const groupChats = await this.groupChatRepository
                .createQueryBuilder("groupChat")
                .innerJoin(GroupChatMember, "groupChatMember", "groupChat.id = groupChatMember.groupChatId")
                .where("groupChatMember.userId = :userId", { userId: user.id })
                .select([
                    "groupChat.id",
                    "groupChat.chatName",
                    "groupChat.description",
                    "groupChat.isPrivate",
                    "groupChat.isDeleted",
                    "groupChat.createdBy"
                ])
                .skip(skip)
                .take(take)
                .getMany();
            return {
                success: true,
                data: groupChats
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    async sendMessage(sendMessage: SendMessageDto, user: any): Promise<{ success: boolean; message?: string }> {
        try {
            const { groupChatId, content } = sendMessage;
            const joinedChat = await this.groupChatMemberRepository.findOne({ where: { groupChatId: groupChatId, userId: user.id } });
            if (!!joinedChat) {
                const newMessage = this.messageRepository.create({
                    groupChatId,
                    senderId: user.id,
                    messageContent: content,
                    status: MessageStatus.New
                });
                await this.messageRepository.save(newMessage);
                return {
                    success: true,
                }
            }
            else {
                throw Error("You are not in this chat group");
            }

        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    async viewChat(viewChatQuery: ViewChatQuery, user: any): Promise<{ success: boolean, data?: MessageDto[], message?: string }> {
        try {
            const { groupChatId, page, pageSize } = viewChatQuery;
            const { skip, take } = getPagination({
                page: page,
                pageSize: pageSize
            });
            const joinedChat = await this.groupChatMemberRepository.findOne({ where: { groupChatId: groupChatId, userId: user.id } });
            if (!!joinedChat) {
                const chatResponse = await this.messageRepository.find({
                    select: ["id", "messageContent", "senderId", "createdAt"],
                    where: { groupChatId },
                    skip: skip,
                    take: take,
                    order: { createdAt: 'DESC' }
                });
                return {
                    success: true,
                    data: chatResponse
                };
            }
            else {
                throw Error("You are not in this chat group");
            }

        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    joinGroupChat() { }
    getInfoGroupChat() { }
}
