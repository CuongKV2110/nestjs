import { MigrationInterface, QueryRunner } from "typeorm";

export class ImportData1713857905898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const x = 5;

        for (let i = 1; i <= x; i++) {
            const userId = i; // Giả sử userId sẽ tăng theo số thứ tự request
            const type = 1; // Giả sử type là 1
            const receiverRequestId = 1; // Giả sử receiverRequestId là 1
            // Tạo một ngày giả định
            const now = new Date();
            const createdAt = now.toISOString().slice(0, 19).replace('T', ' '); // Lấy ngày hiện tại
            const updateAt = createdAt; // Cập nhật thời gian updateAt với giá trị createdAt ban đầu

            await queryRunner.query(`
                INSERT INTO Request (user_id, type, receiver_request, created_at, update_at)
                VALUES(${userId}, ${type}, ${receiverRequestId}, '${createdAt}', '${updateAt}'); 
            `);
        }

        for (let i = 1; i <= x; i++) {
            const messageContent = `Nội dung tin nhắn ${i}`; // Tạo nội dung tin nhắn duy nhất cho mỗi bản ghi message
            const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' '); // Lấy ngày giờ hiện tại
            const status = 1; // Giả sử status là 1
            const senderId = 1; // Giả sử senderId là 1
            const groupChatId = 1; // Giả sử groupChatId là 1
            const createdAt = timestamp; // Cập nhật thời gian tạo là thời gian hiện tại
            const updateAt = timestamp; // Cập nhật thời gian cập nhật là thời gian hiện tại

            await queryRunner.query(`
                INSERT INTO Message (message_content, timestamp, status, sender_id, group_chat_id, created_at, update_at)
                VALUES('${messageContent}', '${timestamp}', ${status}, ${senderId}, ${groupChatId}, '${createdAt}', '${updateAt}'); 
            `);
        }

        for (let i = 1; i <= x; i++) {
            const projectName = `Dự án số ${i}`; // Tạo tên dự án duy nhất cho mỗi bản ghi project
            const projectManagerId = 1; // Giả sử projectManagerId là 1
            const startDate = '2024-04-23'; // Giả sử ngày bắt đầu là 2024-04-23
            const endDate = '2024-12-31'; // Giả sử ngày kết thúc là 2024-12-31
            const description = `Mô tả dự án số ${i}`; // Tạo mô tả dự án duy nhất cho mỗi bản ghi project
            const createdTime = new Date().toISOString().slice(0, 19).replace('T', ' '); // Lấy ngày giờ hiện tại
            const createdAt = createdTime; // Cập nhật thời gian tạo là thời gian hiện tại
            const updateAt = createdTime; // Cập nhật thời gian cập nhật là thời gian hiện tại

            await queryRunner.query(`
                INSERT INTO Project (project_name, project_manager_id, start_date, end_date, description, created_time, created_at, update_at)
                VALUES('${projectName}', ${projectManagerId}, '${startDate}', '${endDate}', '${description}', '${createdTime}', '${createdAt}', '${updateAt}'); 
            `);
        }

        for (let i = 1; i <= 5; i++) {
            const userId = i; // Giả sử userId tăng dần từ 1 đến numberOfMembers
            const groupChatId = 1; // Giả sử groupChatId của group chat cố định là 1
            const joinedAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // Lấy ngày giờ hiện tại
            const createdAt = joinedAt; // Cập nhật thời gian tạo là thời gian tham gia group chat
            const updateAt = joinedAt; // Cập nhật thời gian cập nhật là thời gian tham gia group chat

            await queryRunner.query(`
                INSERT INTO Group_Chat_Member (user_id, group_chat_id, joined_at, created_at, update_at)
                VALUES(${userId}, ${groupChatId}, '${joinedAt}', '${createdAt}', '${updateAt}'); 
            `);
        }

        for (let i = 1; i <= 5; i++) {
            const title = `Title ${i}`; // Tạo tiêu đề duy nhất cho mỗi bản ghi logwork
            const type = 1; // Giả sử type là 1
            const userId = 1; // Giả sử userId là 1
            const status = 1; // Giả sử status là 1
            const workContent = `Nội dung công việc ${i}`; // Tạo nội dung công việc duy nhất cho mỗi bản ghi logwork
            const projectId = 1; // Giả sử projectId là 1
            const workDate = '2024-04-23'; // Giả sử ngày làm việc là 2024-04-23
            const workingHours = 8; // Giả sử số giờ làm việc là 8
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // Lấy ngày giờ hiện tại
            const updateAt = createdAt; // Cập nhật thời gian cập nhật là thời gian tạo

            await queryRunner.query(`
                INSERT INTO Logwork (title, type, user_id, status, work_content, project_id, work_date, working_hours, created_at, update_at)
                VALUES('${title}', ${type}, ${userId}, ${status}, '${workContent}', ${projectId}, '${workDate}', ${workingHours}, '${createdAt}', '${updateAt}'); 
            `);
        }

        for (let i = 1; i <= x; i++) {
            const projectId = i; // Giả sử projectId tăng dần từ 1 đến numberOfProjectUsers
            const userId = i; // Giả sử userId tăng dần từ 1 đến numberOfProjectUsers
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // Lấy ngày giờ hiện tại
            const updateAt = createdAt; // Cập nhật thời gian cập nhật là thời gian tạo

            await queryRunner.query(`
                INSERT INTO Project_User (project_id, user_id, created_at, update_at)
                VALUES(${projectId}, ${userId}, '${createdAt}', '${updateAt}'); 
            `);
        }

        for (let i = 1; i <= x; i++) {
            const title = `Nghỉ phép ${i}`; // Tạo tiêu đề duy nhất cho mỗi bản ghi TimeOff
            const type = 1; // Giả sử type là 1
            const status = 1; // Giả sử status là 1
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // Lấy thời gian hiện tại
            const updateAt = createdAt; // Sử dụng thời gian hiện tại cho thời gian cập nhật
            const startTime = '2024-04-23'; // Giả sử thời gian bắt đầu là 2024-04-23
            const endTime = '2024-04-25'; // Giả sử thời gian kết thúc là 2024-04-25
            const reason = `Lý do nghỉ ${i}`; // Tạo lý do nghỉ duy nhất cho mỗi bản ghi TimeOff
            const requestId = i; // Giả sử requestId tăng dần từ 1 đến numberOfTimeOffs

            await queryRunner.query(`
                INSERT INTO Time_Off (title, type, status, created_at, update_at, start_time, end_time, reason, request_id)
                VALUES('${title}', ${type}, ${status}, '${createdAt}', '${updateAt}', '${startTime}', '${endTime}', '${reason}', ${requestId}); 
            `);
        }

        for (let i = 1; i <= x; i++) {
            const chatName = `Nhóm trò chuyện ${i}`; // Tạo tên nhóm trò chuyện duy nhất cho mỗi bản ghi GroupChat
            const createdBy = 1; // Giả sử createdBy là 1
            const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // Lấy thời gian hiện tại
            const updateAt = createdAt; // Sử dụng thời gian hiện tại cho thời gian cập nhật
            const description = `Mô tả nhóm trò chuyện ${i}`; // Tạo mô tả duy nhất cho mỗi bản ghi GroupChat
            const isPrivate = false; // Giả sử nhóm trò chuyện không riêng tư
            const isDeleted = false; // Giả sử nhóm trò chuyện chưa bị xóa

            await queryRunner.query(`
                INSERT INTO Group_Chat (chat_name, created_by, created_at, update_at, description, is_private, is_deleted)
                VALUES('${chatName}', ${createdBy}, '${createdAt}', '${updateAt}', '${description}', ${isPrivate ? 1 : 0}, ${isDeleted ? 1 : 0}); 
            `);
        }

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
