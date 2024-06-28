import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IsNumberNotNull implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (value === null) {
            throw new BadRequestException(`${metadata.data} should not be null`);
        }
        if (typeof value === 'string' && value.trim().length === 0) {
            throw new BadRequestException(`${metadata.data} should not be empty`);
        }
        if (Array.isArray(value) && value.length === 0) {
            throw new BadRequestException(`${metadata.data} should not be an empty array`);
        }
        if (isNaN(value)) {
            throw new BadRequestException(`${metadata.data} should be a number`);
        }
        return value;
    }
}
