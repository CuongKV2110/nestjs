export interface JwtAuthenticationModuleOptions {
    secretOrKey: string;
    accessTokenExpiredIn: string;
    refreshTokenExpiredIn: string;
}
