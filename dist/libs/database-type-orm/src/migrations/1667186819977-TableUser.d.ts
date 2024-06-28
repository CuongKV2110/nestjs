import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class TableUser1667186819977 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
    private createSuperAdmin;
}
