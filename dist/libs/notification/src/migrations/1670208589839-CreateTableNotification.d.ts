import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateTableNotification1670208589839 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
