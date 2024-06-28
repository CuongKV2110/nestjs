import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../../database/entities/user';
import { jwtConstants } from './constants';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '6000s' },
        }),
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [UserController],
    providers: [UserService],

})
export class UserModule { }
