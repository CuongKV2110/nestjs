import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  healthCheck(req: Request) {
    return req.ip;
  }
}
