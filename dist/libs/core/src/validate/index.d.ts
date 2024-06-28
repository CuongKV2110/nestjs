import Ajv from 'ajv';
export declare const AjvInstance: Ajv;
export declare function removeUnexpectedField(schemaKeyRef: AjvSchema | any): void;
export declare function validate(schemaKeyRef: AjvSchema | any, data: any): boolean;
