import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDataUser1713841352846 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO user (email, password, username, role, refresh_token, created_at, updated_at)
            VALUES ('example1@example.com', '123456', 'kvc1', 1, '', NOW(), NOW())
        `);
        await queryRunner.query(`
            INSERT INTO user (email, password, username, role, refresh_token, created_at, updated_at)
            VALUES ('example2@example.com', '123456', 'kvc2', 2, '', NOW(), NOW())
        `);
        await queryRunner.query(`
            INSERT INTO user (email, password, username, role, refresh_token, created_at, updated_at)
            VALUES ('example3@example.com', '123456', 'kvc3', 3, '', NOW(), NOW())
        `);
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
