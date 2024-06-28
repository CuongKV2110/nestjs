import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { MessageText, UserType } from '../../constants/enum';
import { Project } from '../../database/entities/project';
import { ProjectUser } from '../../database/entities/project_user';
import { getPagination } from '../../helper/pagination';
import { PageSizeDto } from '../../utils/page_size.dto';
import { AddMemberDto } from './dto/add_member.dto';
import { CreateProjectDto } from './dto/create_project.dto';
import { ProjectDetailDto } from './dto/prject_detail.dto';
import { ProjectMemberDto } from './dto/project_member.dto';
@Injectable()
export class ProjectService {

    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,

        @InjectRepository(ProjectUser)
        private readonly projectMemberRepository: Repository<ProjectUser>,
    ) { }

    async createProject(createProjectDto: CreateProjectDto, user: any): Promise<{ success: boolean, message?: string }> {
        if (user.role !== UserType.ADMIN) {
            throw new Error(MessageText.Require_Permission_Create_Project);
        }
        return await this.projectRepository.manager.transaction(async (transactionalEntityManager: EntityManager) => {
            try {
                const { projectName, startDate, endDate, projectManagerId, description, members } = createProjectDto;
                const newProject = this.projectRepository.create({
                    projectName,
                    startDate,
                    endDate,
                    projectManagerId,
                    description,
                });

                const savedProject = await transactionalEntityManager.save(Project, newProject);
                members.push(projectManagerId);
                const memberData = createProjectDto.members.map(memberId => ({
                    projectId: savedProject.id,
                    userId: memberId,
                    joinedAt: new Date().toISOString(),
                }));

                await transactionalEntityManager
                    .createQueryBuilder()
                    .insert()
                    .into(ProjectUser)
                    .values(memberData)
                    .execute();
                return {
                    success: true
                }
            } catch (error) {
                return {
                    success: false,
                    message: error.message
                }
            }
        });
    }

    async addMemberToProject(addMemberDto: AddMemberDto, user: any): Promise<{ success: boolean, message?: string }> {
        try {
            const { projectId, listMember } = addMemberDto;
            if (user.role == UserType.ADMIN || user.role == UserType.PM) {
                const projectMembers = await this.projectMemberRepository.find({ where: { projectId } });
                if (!projectMembers) {
                    throw new Error(MessageText.Project_Member_Error);
                }
                const existingMemberIds = projectMembers.map(member => member.userId);
                const newMembers = listMember.filter(memberId => !existingMemberIds.includes(memberId));
                if (newMembers.length === 0) {
                    throw new Error(MessageText.Member_Already_Exists);
                }
                const memberData = newMembers.map(memberId => ({
                    projectId,
                    userId: memberId,
                    joinedAt: new Date().toISOString()
                }));
                await this.projectMemberRepository
                    .createQueryBuilder()
                    .insert()
                    .into(ProjectUser)
                    .values(memberData)
                    .execute();
                return {
                    success: true
                }
            }
            else {
                throw new Error(MessageText.Require_Permission_Add_Member);
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }
    deleteMember() { }

    async getInfoProject(id: number): Promise<{ success: boolean, data?: ProjectDetailDto, message?: string }> {
        try {

            const project = await this.projectRepository.findOne({ where: { id } });

            const listMember = await this.projectMemberRepository.find({ where: { projectId: id } });

            let totalWorkHours = 0;
            const projectMembers: ProjectMemberDto[] = listMember.map(member => {
                const projectMember = new ProjectMemberDto();
                projectMember.id = member.userId;
                projectMember.joinedAt = member.joinedAt;
                projectMember.totalWorkHour = member.totalWorkHour || 0;
                totalWorkHours += projectMember.totalWorkHour;
                return projectMember;
            });
            const projectDetailDto = new ProjectDetailDto();
            projectDetailDto.id = project.id;
            projectDetailDto.projectName = project.projectName;
            projectDetailDto.projectManagerId = project.projectManagerId;
            projectDetailDto.startDate = project.startDate;
            projectDetailDto.endDate = project.endDate;
            projectDetailDto.description = project.description;
            projectDetailDto.member = projectMembers;
            projectDetailDto.totalWorkHour = totalWorkHours;
            return {
                success: true,
                data: projectDetailDto
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    async getProjectParticipated(pageSizeDto: PageSizeDto, user: any): Promise<{ success: boolean, data?: Project[], message?: string }> {
        try {
            const { page, pageSize } = pageSizeDto;
            const { skip, take } = getPagination({ page, pageSize });
            const projects = await this.projectRepository
                .createQueryBuilder("project")
                .innerJoin(ProjectUser, "projectUser", "project.id = projectUser.projectId")
                .select([
                    "project.id",
                    "project.projectName",
                    "project.projectManagerId",
                    "project.startDate",
                    "project.endDate",
                    "project.description"
                ])
                .where("projectUser.userId = :userId", { userId: user.id })
                .skip(skip)
                .take(take)
                .getMany();
            return {
                success: true,
                data: projects
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }

    async getListProjectManager(pageSizeDto: PageSizeDto, user: any): Promise<{ success: boolean, data?: Project[], message?: string }> {
        try {
            const { page, pageSize } = pageSizeDto;
            const { skip, take } = getPagination({ page, pageSize });
            const projects = await this.projectRepository.find({
                select: ['id', 'projectName', 'startDate', 'endDate', 'description'],
                where: { projectManagerId: user.id },
                skip,
                take
            })
            return {
                success: true,
                data: projects
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            };
        }
    }
}
