"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUser1667186819977 = void 0;
const bcrypt_1 = require("bcrypt");
class TableUser1667186819977 {
    constructor() {
        this.name = 'TableUser1667186819977';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (
        \`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
        \`email\` varchar(255) NOT NULL,
        \`password\` varchar(100) NULL,
        \`name\` varchar(100) NULL,
        \`status\` tinyint UNSIGNED NOT NULL DEFAULT '1',
        \`is_super_admin\` tinyint NOT NULL DEFAULT '0',
        \`role_id\` tinyint UNSIGNED NOT NULL DEFAULT '2',
        \`none_token\` varchar(100) NULL,
        \`refresh_token\` varchar(500) NULL,
        \`invited_by\` bigint UNSIGNED NULL,
        \`deleted_at\` datetime(6) NULL,
        \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
        \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), 
        UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await this.createSuperAdmin(queryRunner);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`user\``);
    }
    async createSuperAdmin(queryRunner) {
        const hashedPassword = await (0, bcrypt_1.hash)(String(process.env.SUPER_ADMIN_PASSWORD), Number(process.env.BCRYPT_HASH_ROUNDS));
        const isExist = await queryRunner.query(`SELECT COUNT(1) as total FROM \`${process.env.MYSQL_DB}\`.\`user\` WHERE \`email\`=? LIMIT 1`, [process.env.SUPER_ADMIN_EMAIL]);
        if (!Number(isExist.total)) {
            await queryRunner.query(`INSERT INTO
          \`${process.env.MYSQL_DB}\`.\`user\` (\`email\`,
          \`password\`,
          \`status\`,
           \`is_super_admin\`,
          \`role_id\`)
          VALUES('${process.env.SUPER_ADMIN_EMAIL}','${hashedPassword}',1,1,1)`);
        }
    }
}
exports.TableUser1667186819977 = TableUser1667186819977;
//# sourceMappingURL=1667186819977-TableUser.js.map