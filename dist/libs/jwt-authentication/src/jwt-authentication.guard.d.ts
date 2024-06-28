import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtAuthenticationService } from './jwt-authentication.service';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
export declare class JwtAuthenticationGuard implements CanActivate {
    private reflector;
    private readonly jwtAuthenticationService;
    constructor(reflector: Reflector, jwtAuthenticationService: JwtAuthenticationService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
