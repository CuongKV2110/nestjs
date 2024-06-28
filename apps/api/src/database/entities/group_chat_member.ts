import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { GroupChat } from "./group_chat";

@Entity()
export class GroupChatMember {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int',
        unsigned: true
    })
    id: number;

    @Column({
        name: 'user_id',
        type: 'uuid'
    })
    userId: string;

    @Column({
        name: 'group_chat_id',
        type: 'int',
        unsigned: true
    })
    groupChatId: number;

    @Column({
        name: 'joined_at',
        type: 'datetime'
    })
    joinedAt: string;

    @Column({
        name: 'created_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: string;

    @Column({
        name: 'updated_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt: string;

    @ManyToOne(() => GroupChat, groupChat => groupChat.members)
    @JoinColumn({ name: "group_chat_id" })
    groupChat: GroupChat;

}
