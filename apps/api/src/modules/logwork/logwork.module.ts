import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logwork } from '../../database/entities/logwork';
import { ProjectUser } from '../../database/entities/project_user';
import { LogworkController } from './logwork.controller';
import { LogworkService } from './logwork.service';

@Module({
    controllers: [LogworkController],
    providers: [LogworkService],
    imports: [
        TypeOrmModule.forFeature([Logwork, ProjectUser])
    ]
})
export class LogworkModule { }
