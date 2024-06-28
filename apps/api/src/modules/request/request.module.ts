import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Request } from '../../database/entities/request';
import { TimeOff } from '../../database/entities/timeoff';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { Project } from '../../database/entities/project';
import User from '../../database/entities/user';
import { OnLeave } from '../../database/entities/on_leave';

@Module({
    controllers: [RequestController],
    providers: [RequestService],
    imports: [
        TypeOrmModule.forFeature([Request, TimeOff, User, OnLeave]),
    ]
})
export class RequestModule { }
