import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IsStringNotNull implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (value === null) {
            throw new BadRequestException(`Value should not be null`);
        }
        if (typeof value !== 'string') {
            throw new BadRequestException(`Value should be a string`);
        }
        if (!value.trim()) {
            throw new BadRequestException(`Value should not be empty`);
        }
        return value;
    }
}
