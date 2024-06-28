import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectUser } from "./project_user";
import User from "./user";

@Entity()
export class Project {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int',
        unsigned: true
    })
    id: number;

    @Column({
        name: 'project_name',
        type: 'varchar',
        length: 255
    })
    projectName: string;

    @OneToOne(() => User, user => user.id)
    @Column({
        name: 'project_manager_id',
        type: 'uuid'
    })
    projectManagerId: string;

    @Column({ type: 'timestamp' })
    startDate: string;

    @Column({ type: 'timestamp' })
    endDate: string;

    @Column({
        name: 'description',
        type: 'varchar',
        length: 255
    })
    description: string;

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

    // @OneToMany(() => Logwork, logwork => logwork.id)
    // logwork: Logwork[];

    @OneToMany(() => ProjectUser, projectUser => projectUser.project)
    projectUsers: ProjectUser[];

}
