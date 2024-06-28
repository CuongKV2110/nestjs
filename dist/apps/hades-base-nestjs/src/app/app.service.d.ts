import { JwtAuthenticationService } from '@app/jwt-authentication';
export declare class AppService {
    private readonly jwtAuthenticationService;
    constructor(jwtAuthenticationService: JwtAuthenticationService);
    getHello(): string;
}
