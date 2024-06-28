import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class CustomTextLength implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare class CustomISOString implements ValidatorConstraintInterface {
    validate(dateTimeString: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare class CustomValidateIsDate implements ValidatorConstraintInterface {
    validate(dateString: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare class CustomValidateIsNotEmail implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare class CustomValidateIsIsPostCodeJv implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare class CustomValidateIsPassword implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare class CustomValidateIsIsKatakana implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsLongerThan(property?: string, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare function ArrayItemUnique(property: string, validationOptions?: ValidationOptions, metadata?: any): Function;
export declare function ArrayDistinct(property: string, validationOptions?: ValidationOptions): Function;
export declare function IsParamsSort(property?: string[], validationOptions?: ValidationOptions): Function;
export declare function TransformParamsSort(data: string | any, property: string[]): {
    key: string;
    value: 'ASC' | 'DESC';
}[];
export declare class CustomParseIntPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): number;
}
export declare class AssignPagingPipe implements PipeTransform {
    transform(value: any): any;
}
export declare class AssignLoadMore implements PipeTransform {
    transform(value: any): any;
}
