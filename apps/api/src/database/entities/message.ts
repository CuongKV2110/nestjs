import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { GroupChat } from "./group_chat";
import User from "./user";

@Entity()
export class Message {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int',
        unsigned: true
    })
    id: number;

    @Column({
        name: 'message_content',
        type: 'nvarchar',
    })
    messageContent: string;

    @Column({
        name: 'status',
        type: 'tinyint',
    })
    status: number;

    @Column({
        name: 'sender_id',
        type: 'uuid'
    })
    senderId: string;

    @Column({
        name: 'group_chat_id',
        type: 'int'
    })
    groupChatId: number;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: string;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP'
    })
    updateAt: string;

    @ManyToOne(() => User, user => user.id)
    sender: User;

    @ManyToOne(() => GroupChat, groupChat => groupChat.id)
    groupChat: GroupChat;
}
