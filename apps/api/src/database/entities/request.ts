import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user";
import { TimeOff } from "./timeoff";

@Entity()
export class Request {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int',
        unsigned: true
    })
    id: number;

    @ManyToOne(() => User, user => user.requests)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({
        name: 'type',
        type: 'tinyint'
    })
    type: number;

    @Column({
        name: 'status',
        type: 'tinyint'
    })
    status: number;

    @ManyToOne(() => User, user => user.receivedRequests)
    @JoinColumn({ name: 'receiver_request' })
    receiverRequest: User;

    @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: string;

    @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: string;
}
