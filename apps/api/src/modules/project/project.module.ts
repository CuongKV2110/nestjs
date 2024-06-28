import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from '../../database/entities/project';
import { ProjectUser } from '../../database/entities/project_user';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
    controllers: [ProjectController],
    providers: [ProjectService],
    imports: [
        TypeOrmModule.forFeature([Project, ProjectUser])
    ]
})
export class ProjectModule { }
