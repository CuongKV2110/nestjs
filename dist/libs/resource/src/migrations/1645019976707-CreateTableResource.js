"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableResource1645019976707 = void 0;
class CreateTableResource1645019976707 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`resource\` (
          \`id\` int UNSIGNED NOT NULL AUTO_INCREMENT,
          \`name\` varchar(250) NOT NULL,
          \`value\` varchar(250) NULL,
          \`status\` tinyint NOT NULL DEFAULT '1',
          \`order\` smallint NOT NULL DEFAULT '0',
          \`type\` smallint NOT NULL COMMENT 'Các type đã chia sẽ được định nghĩa ở enum',
          \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
          \`created_by\` int UNSIGNED NOT NULL DEFAULT '1',
          PRIMARY KEY (\`id\`)
        ) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`resource\``);
    }
}
exports.CreateTableResource1645019976707 = CreateTableResource1645019976707;
//# sourceMappingURL=1645019976707-CreateTableResource.js.map