import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Logwork } from './logwork';
import { Request } from './request';

@Entity('user')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'email', type: 'varchar', length: 100, unique: true })
    email: string;

    @Column({ name: 'password', type: 'varchar', length: 100, nullable: true })
    password: string;

    @Column({ name: 'username', type: 'varchar', length: 100, nullable: true })
    userName: string;

    @Column({ name: 'role', type: 'tinyint', unsigned: true })
    role: number;

    @Column({ name: 'refresh_token', type: 'varchar', length: 500, select: false, nullable: true })
    refreshToken: string;

    @Column({
        name: "time_wallet",
        type: 'float',
        default: 0
    })
    timeWallet: number;

    @Column({
        name: "time_free",
        type: 'float',
        default: 0
    })
    timeFree: number;

    @CreateDateColumn({ name: 'created_at', type: 'datetime', nullable: true })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at', type: 'datetime', nullable: true })
    updatedAt: string;

    @OneToMany(() => Request, request => request.user)
    requests: Request[];

    @OneToMany(() => Logwork, logwork => logwork.userId)
    logwork: Logwork[];

    @OneToMany(() => Request, request => request.receiverRequest)
    receivedRequests: Request[];
}
