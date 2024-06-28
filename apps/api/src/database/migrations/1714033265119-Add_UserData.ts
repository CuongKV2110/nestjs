import { MigrationInterface, QueryRunner } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

export class AddUserData1714033265119 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        for (let i = 1; i <= 5; i++) {
            const userId = uuidv4(); // Tạo UUID cho user id
            const email = `user${i}@example.com`;
            const password = `password${i}`;
            const username = `User ${i}`;
            const role = 1; // Giả sử role 1 là vai trò người dùng thường

            // Tạo một ngày giả định
            const now = new Date();
            const createdAt = now.toISOString().slice(0, 19).replace('T', ' '); // Lấy ngày hiện tại
            const updatedAt = createdAt; // Cập nhật thời gian updatedAt với giá trị createdAt ban đầu

            await queryRunner.query(`
                INSERT INTO User (id, email, password, username, role, created_at, updated_at)
                VALUES ('${userId}', '${email}', '${password}', '${username}', ${role}, '${createdAt}', '${updatedAt}');
            `);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
