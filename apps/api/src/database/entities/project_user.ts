import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./project";
import User from "./user";

@Entity()
export class ProjectUser {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int',
        unsigned: true
    })
    id: number;

    @ManyToOne(() => User, user => user.id)
    @Column({
        name: 'user_id',
        type: 'uuid'
    })
    userId: string;

    @Column({
        name: "total_work_hour",
        type: 'float',
        default: 0
    })
    totalWorkHour: number;

    @Column({
        name: 'project_id',
        type: 'int',
        unsigned: true
    })
    projectId: number;

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

    @ManyToOne(() => Project, project => project.projectUsers)
    @JoinColumn({ name: "project_id" })
    project: Project;
}
