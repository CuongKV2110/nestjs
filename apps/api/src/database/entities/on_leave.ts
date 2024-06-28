
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Request } from "./request";

@Entity()

export class OnLeave {
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
        name: 'hour',
        type: 'int',
    })
    hour: number;

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

    @Column({ type: 'varchar' })
    reason: string;

    @OneToOne(() => Request, request => request.id)
    @Column({
        name: 'request_id'
    })
    requestId: number;
}
