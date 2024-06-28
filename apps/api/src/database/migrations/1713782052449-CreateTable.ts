import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1713782052449 implements MigrationInterface {
    name = 'CreateTable1713782052449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`request\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`type\` int NOT NULL, \`receiver_request\` int NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`update_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \`useridId\` int UNSIGNED NULL, \`receiverRequesId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`email\` varchar(100) NOT NULL, \`password\` varchar(100) NULL, \`username\` varchar(100) NULL, \`role\` tinyint UNSIGNED NOT NULL, \`refresh_token\` varchar(500) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`logwork\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`type\` int NOT NULL, \`user_id\` int NOT NULL, \`status\` int NOT NULL, \`work_content\` varchar(255) NOT NULL, \`project_id\` int NOT NULL, \`work_date\` datetime NOT NULL, \`working_hours\` int NOT NULL, \`created_at\` datetime NOT NULL, \`update_at\` datetime NOT NULL, \`userIdId\` int UNSIGNED NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`message\` (\`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`message_content\` varchar(255) NOT NULL, \`timestamp\` datetime NOT NULL, \`status\` tinyint UNSIGNED NOT NULL, \`sender_id\` int NOT NULL, \`group_chat_id\` int NOT NULL, \`created_at\` datetime NOT NULL, \`update_at\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project\` (\`id\` int NOT NULL AUTO_INCREMENT, \`project_name\` varchar(255) NOT NULL, \`project_manager_id\` int NOT NULL, \`start_date\` datetime NOT NULL, \`end_date\` datetime NOT NULL, \`description\` varchar(255) NOT NULL, \`created_time\` datetime NOT NULL, \`created_at\` datetime NOT NULL, \`update_at\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`request\` ADD CONSTRAINT \`FK_408c7614db8968fa8edae0284d8\` FOREIGN KEY (\`useridId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`request\` ADD CONSTRAINT \`FK_67c4eee2d57327e5d4da6a15a6d\` FOREIGN KEY (\`receiverRequesId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD CONSTRAINT \`FK_61a09b7223a21bda354ae133f73\` FOREIGN KEY (\`userIdId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP FOREIGN KEY \`FK_61a09b7223a21bda354ae133f73\``);
        await queryRunner.query(`ALTER TABLE \`request\` DROP FOREIGN KEY \`FK_67c4eee2d57327e5d4da6a15a6d\``);
        await queryRunner.query(`ALTER TABLE \`request\` DROP FOREIGN KEY \`FK_408c7614db8968fa8edae0284d8\``);
        await queryRunner.query(`DROP TABLE \`project\``);
        await queryRunner.query(`DROP TABLE \`message\``);
        await queryRunner.query(`DROP TABLE \`logwork\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`request\``);
    }

}
