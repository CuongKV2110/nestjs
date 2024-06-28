import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./project";
import User from "./user";

@Entity()

export class Logwork {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int',
        unsigned: true
    })
    id: number;

    @Column({
        name: 'title',
        type: 'varchar',
        length: 100
    })
    title: string;

    @Column({
        name: 'type',
        type: 'tinyint'
    })
    type: number;

    @ManyToOne(() => User, user => user.logwork)
    @Column({
        name: 'user_id',
        type: 'uuid'
    })
    userId: string;

    @Column({
        name: 'status',
        type: 'tinyint'
    })
    status: number;

    @Column({
        name: 'work_content',
        type: 'varchar',
        length: 100
    })
    workContent: string;

    @ManyToOne(() => Project, project => project.id)
    @Column({
        name: 'project_id',
        type: 'int'
    })
    projectId: number;

    @Column({
        name: 'work_date',
        type: 'timestamp',
    })
    workDate: string;

    @Column({
        name: 'working_hours',
        type: 'float'
    })
    workingHours: number;

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
}
