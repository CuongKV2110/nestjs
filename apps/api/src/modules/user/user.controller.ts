import { ClientControllers } from '@app/core/decorator/controller-customer.decorator';
import { Body, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { LoginDto } from './dto/login.dto';
import { UserRegisterDto } from './dto/user_register.dto';
import { UserService } from './user.service';

@ClientControllers('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return this.userService.login(loginDto);
    }

    @UseGuards(AuthGuard)
    @Post('logout')
    async logout(@Req() req: any) {
        return this.userService.logout(req.user);
    }

    @UseGuards(AuthGuard)
    @Get('/:id')
    async getUserInfo(@Req() req: any) {
        return this.userService.getUserInfo(req.user);
    }

    @Post('register')
    async register(@Body() registerDto: UserRegisterDto) {
        return this.userService.register(registerDto);
    }

    @Post('refresh')
    async refresh(@Body('refreshToken') refreshToken: string) {
        return this.userService.refresh(refreshToken);
    }
}
