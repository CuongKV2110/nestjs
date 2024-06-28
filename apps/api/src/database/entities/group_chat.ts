import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user";
import { GroupChatMember } from "./group_chat_member";

@Entity()

export class GroupChat {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int',
        unsigned: true
    })
    id: number;

    @Column({
        name: 'chat_name',
        type: 'varchar',
        length: 255
    })
    chatName: string;

    @OneToOne(() => User, user => user.id)
    @Column({
        name: 'created_by',
        type: 'uuid'
    })
    createdBy: string;

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


    @Column({
        name: 'description',
        type: 'varchar',
        length: 100
    })
    description: string;

    @Column({
        name: 'is_private',
        type: 'tinyint'
    })
    isPrivate: number;

    @Column({
        name: 'is_deleted',
        type: 'tinyint'
    })
    isDeleted: number;

    @OneToMany(() => GroupChatMember, groupChatMember => groupChatMember.groupChat)
    members: GroupChatMember[];
}
