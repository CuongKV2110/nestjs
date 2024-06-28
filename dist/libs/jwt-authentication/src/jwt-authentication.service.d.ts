import { PlainLiteralObject } from '@nestjs/common';
import { JwtAuthenticationModuleOptions } from './jwt-authentication.interface';
import { Request } from 'express';
import { IDataTokenForgotPassword } from 'libs/constants/interface';
import { JwtService } from '@nestjs/jwt';
export declare class JwtAuthenticationService {
    private readonly jwtService;
    options: JwtAuthenticationModuleOptions;
    constructor(jwtService: JwtService, options: JwtAuthenticationModuleOptions);
    validateRequest(request: Request): Promise<boolean>;
    extractFromAuthHeaderByBearerToken(req: Request): string;
    generateAccessToken(payload: PlainLiteralObject): string;
    generateTokenForgotPassword(payload: PlainLiteralObject): string;
    generateRefreshToken(payload: PlainLiteralObject): string;
    verifyAccessToken(accessToken: string): IDataTokenForgotPassword | false;
    verifyRefreshToken(refreshToken: string): any;
}
