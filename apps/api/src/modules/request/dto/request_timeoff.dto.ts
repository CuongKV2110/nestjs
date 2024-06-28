import { IsDateString, IsNotEmpty, IsString, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from 'class-validator';
import { RequestDto } from './request.dto';

// Custom validator to check if endTime is greater than startTime
@ValidatorConstraint({ name: 'isEndTimeGreaterThanStartTime', async: false })
export class IsEndTimeGreaterThanStartTimeConstraint implements ValidatorConstraintInterface {
    validate(endTime: any, args: ValidationArguments) {
        const request = args.object as RequestTimeOffDto;
        return new Date(request.startTime).getTime() < new Date(endTime).getTime();
    }

    defaultMessage(args: ValidationArguments) {
        return 'End time must be greater than start time';
    }
}

export function IsEndTimeGreaterThanStartTime(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEndTimeGreaterThanStartTimeConstraint,
        });
    };
}

export class RequestTimeOffDto extends RequestDto {
    @IsString({ message: 'Receiver request must be a string' })
    @IsNotEmpty({ message: 'Receiver request is required' })
    receiverRequest: string;

    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

    @IsString({ message: 'Reason must be a string' })
    @IsNotEmpty({ message: 'Reason is required' })
    reason: string;

    @IsDateString({}, { message: 'Start time must be a valid date string' })
    @IsNotEmpty({ message: 'Start time is required' })
    startTime: Date;

    @IsDateString({}, { message: 'End time must be a valid date string' })
    @IsNotEmpty({ message: 'End time is required' })
    @IsEndTimeGreaterThanStartTime({ message: 'End time must be greater than start time' })
    endTime: Date;
}
