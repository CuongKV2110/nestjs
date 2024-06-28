import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface Response<T> {
    data: T;
}
export declare class TransformResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(c: ExecutionContext, next: CallHandler): Observable<Response<T>>;
}
