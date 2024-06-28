import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTypeData1713847272769 implements MigrationInterface {
    name = 'UpdateTypeData1713847272769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`number\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP FOREIGN KEY \`FK_69e295a6a0bc92b1ce88ddaca3d\``);
        await queryRunner.query(`ALTER TABLE \`project\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`project_name\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`project_name\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`description\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`update_at\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`update_at\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`title\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`status\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`work_content\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`work_content\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` CHANGE \`projectIdId\` \`projectIdId\` int UNSIGNED NULL`);
        await queryRunner.query(`ALTER TABLE \`request\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`request\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`request\` ADD \`type\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`group_chat\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`group_chat\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`group_chat\` ADD \`description\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`group_chat_member\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`message\` CHANGE \`id\` \`id\` bigint UNSIGNED NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`message\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`message\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`message\` ADD \`id\` int UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`time_off\` CHANGE \`id\` \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`time_off\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`time_off\` ADD \`type\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`time_off\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`time_off\` ADD \`status\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD CONSTRAINT \`FK_69e295a6a0bc92b1ce88ddaca3d\` FOREIGN KEY (\`projectIdId\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP FOREIGN KEY \`FK_69e295a6a0bc92b1ce88ddaca3d\``);
        await queryRunner.query(`ALTER TABLE \`time_off\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`time_off\` ADD \`status\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`time_off\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`time_off\` ADD \`type\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`time_off\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`message\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`message\` ADD \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`message\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`message\` CHANGE \`id\` \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`group_chat_member\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`group_chat\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`group_chat\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`group_chat\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`request\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`request\` ADD \`type\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`request\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`logwork\` CHANGE \`projectIdId\` \`projectIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`work_content\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`work_content\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`status\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`logwork\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`update_at\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`update_at\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`project_name\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`project_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD CONSTRAINT \`FK_69e295a6a0bc92b1ce88ddaca3d\` FOREIGN KEY (\`projectIdId\`) REFERENCES \`project\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`logwork\` DROP COLUMN \`number\``);
        await queryRunner.query(`ALTER TABLE \`logwork\` ADD \`type\` int NOT NULL`);
    }

}
