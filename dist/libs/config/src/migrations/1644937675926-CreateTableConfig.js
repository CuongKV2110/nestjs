"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableConfig1644937675926 = void 0;
class CreateTableConfig1644937675926 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`config\` (
        \`key\` varchar(200) NOT NULL, 
        \`name\` varchar(255) NOT NULL, 
        \`value\` text NOT NULL, 
        \`type\` varchar(50) NULL, 
        \`order\` tinyint NULL, 
        \`is_system\` tinyint NULL, 
        \`created_by\` bigint UNSIGNED NULL, 
        \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`key\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`config\``);
    }
}
exports.CreateTableConfig1644937675926 = CreateTableConfig1644937675926;
//# sourceMappingURL=1644937675926-CreateTableConfig.js.map