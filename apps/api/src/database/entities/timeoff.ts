import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Request } from "./request";

@Entity()

export class TimeOff {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int',
        unsigned: true
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    title: string;

    @Column({
        name: 'created_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: string;

    @Column({
        name: 'update_at',
        type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'
    })
    updateAt: string;

    @Column({
        name: 'start_time',
        type: 'datetime'
    })
    startTime: string;

    @Column({
        name: 'end_time',
        type: 'datetime'
    })
    endTime: string;

    @Column({ type: 'varchar' })
    reason: string;

    @Column({
        name: 'request_id',
        type: 'int',
        unsigned: true
    })
    requestId: number;
}
