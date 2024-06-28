import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { Repository } from 'typeorm';
import { MessageText, TimeDefault } from '../../constants/enum';
import User from '../../database/entities/user';
import { LoginDto } from './dto/login.dto';
import { UserRegisterDto } from './dto/user_register.dto';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) { }

    async login(loginDto: LoginDto): Promise<{ success: boolean, token: string, message?: string }> {
        try {
            const { email, password } = loginDto;
            const userResponse = await this.userRepository.findOne({ where: { email } });
            if (!userResponse) {
                throw new Error(MessageText.Email_Incorrect);
            }

            if (!this.isPasswordValid(password)) {
                throw new Error(MessageText.Password_Requirement);
            }

            const isPasswordValid = await bcrypt.compare(password, userResponse.password);
            if (!isPasswordValid) {
                throw new Error(MessageText.Password_Incorrect);
            }
            const payload = { id: userResponse.id, role: userResponse.role, timeFree: userResponse.timeFree, timeWallet: userResponse.timeWallet };
            const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '15m' });
            const refreshToken = await this.generateRefreshToken();
            await this.userRepository.update(userResponse.id, { refreshToken });

            return {
                success: true,
                token: accessToken,
            };
        } catch (error) {
            return {
                success: false,
                token: null,
                message: error.message
            };
        }
    }

    async register(userRegisterDto: UserRegisterDto): Promise<{ success: boolean; message?: string }> {
        try {
            const { email, userName, password, role } = userRegisterDto;
            if (!this.isPasswordValid(password)) {
                throw new Error(MessageText.Password_Invalid);
            }
            const existingUser = await this.userRepository.findOne({ where: { email: email } });
            if (existingUser) {
                throw new Error(MessageText.Email_Already_Exists);
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = this.userRepository.create({
                email,
                userName,
                password: hashedPassword,
                role,
                timeFree: TimeDefault.Time_Off,
                timeWallet: TimeDefault.On_Leave
            });
            this.userRepository.save(newUser);
            return {
                success: true
            };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }

    async logout(user: any): Promise<{ success: boolean, message?: string }> {
        try {
            const userRes = await this.userRepository.findOne({ where: { id: user.id } });
            if (!userRes) {
                throw new Error(MessageText.User_Not_Found);
            }
            await this.userRepository.update(user.id, { refreshToken: null });
            return {
                success: true,
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    async getUserInfo(user: any): Promise<{ success: boolean, data?: User, message?: string }> {
        try {
            const userRes = await this.userRepository.findOne({ where: { id: user.id }, select: ['id', 'userName', 'email', 'role', 'timeFree', 'timeWallet'] });
            if (!userRes) {
                throw new Error(MessageText.User_Not_Found);
            }

            return {
                success: true,
                data: userRes
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    async refresh(refreshToken: string): Promise<{ success: boolean, token?: string }> {
        if (!refreshToken) {
            throw new ForbiddenException('Refresh token not provided');
        }

        const user = await this.userRepository.findOne({ where: { refreshToken } });

        if (!user) {
            throw new ForbiddenException('Invalid refresh token');
        }

        try {
            const payload = { id: user.id, role: user.role };
            const newAccessToken = await this.jwtService.signAsync(payload, { expiresIn: '15m' });

            return {
                success: true,
                token: newAccessToken,
            };
        } catch (error) {
            throw new ForbiddenException('Invalid refresh token');
        }
    }

    async generateRefreshToken(): Promise<string> {
        return new Promise((resolve, reject) => {
            // Sinh ra một chuỗi ngẫu nhiên có độ dài 64 bytes (512 bits)
            randomBytes(64, (err, buffer) => {
                if (err) {
                    reject(err);
                } else {
                    // Chuyển đổi buffer sang chuỗi hex để lưu trữ trong cơ sở dữ liệu
                    const refreshToken = buffer.toString('hex');
                    resolve(refreshToken);
                }
            });
        });
    }

    private isPasswordValid(password: string): boolean {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}

