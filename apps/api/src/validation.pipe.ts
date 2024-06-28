import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { isNumber, isString, isEmpty } from 'class-validator';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const { id, username, email } = value;

        // Kiểm tra id
        if (!isNumber(id) || isEmpty(id)) {
            throw new BadRequestException('ID must be a non-empty number');
        }

        // Kiểm tra username
        if (!isString(username) || isEmpty(username)) {
            throw new BadRequestException('Username must be a non-empty string');
        }

        // Kiểm tra email
        if (!isString(email) || isEmpty(email)) {
            throw new BadRequestException('Email must be a non-empty string');
        }

        return value;
    }
}
