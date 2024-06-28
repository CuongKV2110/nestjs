import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IsCheckUUID implements PipeTransform {
    private readonly uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

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
        if (typeof value !== 'string' || !this.uuidRegex.test(value)) {
            throw new BadRequestException(`${metadata.data} should be a valid UUID`);
        }
        return value;
    }
}

@Injectable()
export class VerifyUUIDArray implements PipeTransform {
    private readonly isUuidPipe = new IsCheckUUID();

    transform(value: any, metadata: ArgumentMetadata) {
        if (!Array.isArray(value)) {
            throw new BadRequestException(`${metadata.data} should be an array`);
        }

        const uniqueValues = new Set();

        value.forEach((item, index) => {
            if (uniqueValues.has(item)) {
                throw new BadRequestException(`Duplicate UUID found at index ${index + 1}`);
            }
            uniqueValues.add(item);
            try {
                this.isUuidPipe.transform(item, { ...metadata, data: `${metadata.data}[${index}]` });
            } catch (error) {
                throw new BadRequestException(`Element at index ${index + 1} is not a valid UUID`);
            }
        });

        return value;
    }
}
