import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { MessageText, RequestHandle, RequestStatus } from '../../constants/enum';
import { Logwork } from '../../database/entities/logwork';
import { ProjectUser } from '../../database/entities/project_user';
import { getPagination } from '../../helper/pagination';
import { CreateLogworkDto } from './dto/create_logwork.dto';
import { HandleLogWorkDto } from './dto/handle_logwork.dto';
import { LogworkDetailDto } from './dto/logwork_detail.dto';
import { ReceivedLogWorkDto } from './dto/received_logwork.dto';
import { UpdateLogWorkDto } from './dto/update_logwork.dto';

@Injectable()
export class LogworkService {
    constructor(
        @InjectRepository(Logwork)
        private readonly logworkRepository: Repository<Logwork>,

        @InjectRepository(ProjectUser)
        private readonly projectUserRepository: Repository<ProjectUser>,
    ) { }

    async createLogWork(createLogworkDto: CreateLogworkDto, user: any): Promise<{ success: boolean, message?: string }> {
        try {
            const { title, type, projectId, workContent, workingHours, workDate } = createLogworkDto;
            const isCheckUser = await this.projectUserRepository.findOne({
                where: {
                    projectId: projectId,
                    userId: user.id
                }
            });
            if (!isCheckUser) {
                throw new Error(MessageText.User_Not_Join_Project);
            }
            else {
                const newLogwork = this.logworkRepository.create({
                    title: title,
                    type: type,
                    userId: user.id,
                    status: RequestStatus.InProgress,
                    workContent: workContent,
                    projectId: projectId,
                    workDate: workDate,
                    workingHours: workingHours
                });
                await this.logworkRepository.save(newLogwork);
                return {
                    success: true
                }
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    async logWorkDetail(id: number): Promise<{ success: boolean, data?: LogworkDetailDto, message?: string }> {
        try {
            const logworkDetail = await this.logworkRepository
                .createQueryBuilder('logwork')
                .select([
                    'logwork.title AS title',
                    'logwork.status AS status',
                    'logwork.type AS type',
                    'logwork.workContent AS workContent',
                    'logwork.workDate AS workDate',
                    'logwork.createdAt AS createdAt',
                    'logwork.workingHours AS workingHours',
                ])
                .where('logwork.id = :id', { id })
                .getRawOne();

            if (!logworkDetail) {
                throw new Error(MessageText.Logwork_Not_Found);
            }
            return {
                success: true,
                data: logworkDetail
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    async handleLogWork(handleLogWork: HandleLogWorkDto): Promise<{ success: boolean, message?: string }> {
        return this.logworkRepository.manager.transaction(async (transactionalEntityManager: EntityManager) => {
            try {
                const { logworkId, type } = handleLogWork;
                const logworkResponse = await transactionalEntityManager.findOne(Logwork, { where: { id: logworkId } });

                if (!logworkResponse) {
                    throw new Error(MessageText.Logwork_Not_Found);
                }
                if (type === RequestHandle.Approve) {
                    logworkResponse.status = RequestStatus.Approved;
                    const projectUser = await transactionalEntityManager.findOne(ProjectUser, {
                        where: {
                            projectId: logworkResponse.projectId,
                            userId: logworkResponse.userId
                        },
                    });
                    if (!projectUser) {
                        throw new Error(MessageText.ProjectMember_Not_Found);
                    }

                    projectUser.totalWorkHour = (projectUser.totalWorkHour || 0) + logworkResponse.workingHours;

                    await transactionalEntityManager.save(Logwork, logworkResponse);
                    await transactionalEntityManager.save(ProjectUser, projectUser);

                    return {
                        success: true
                    }
                } else if (type === RequestHandle.Reject) {
                    logworkResponse.status = RequestStatus.Rejected;
                    await transactionalEntityManager.save(Logwork, logworkResponse);
                    return {
                        success: true
                    }
                } else {
                    throw new Error(MessageText.Handle_Logwork_Fail)
                }
            } catch (error) {
                return {
                    success: false,
                    message: error.message
                }
            }
        });
    }

    async receivedLogwork(receivedLogwork: ReceivedLogWorkDto): Promise<{ success: boolean, data?: Logwork[], message?: string }> {
        try {
            const { projectId, typeRequest, page, pageSize, } = receivedLogwork;
            const { skip, take } = getPagination({
                page: page,
                pageSize: pageSize
            });
            let logworkResponse: Logwork[];
            if (typeRequest != RequestStatus.All) {
                logworkResponse = await this.logworkRepository.find({
                    where: { projectId, status: typeRequest },
                    skip: skip,
                    take: take
                });
            }
            else {
                logworkResponse = await this.logworkRepository.find({
                    where: { projectId },
                    skip: skip,
                    take: take
                });
            }
            return {
                success: true,
                data: logworkResponse,
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    async updateLogWork(updateLogWork: UpdateLogWorkDto, user: any): Promise<{ success: boolean, message?: string }> {
        try {
            const { logworkId, title, workContent, workingHour } = updateLogWork;
            const logworkResponse = await this.logworkRepository.findOne({ where: { id: logworkId, userId: user.id, status: RequestStatus.InProgress } });
            if (!logworkResponse) {
                throw new Error(MessageText.Logwork_Not_Found);
            }
            else {
                const projectUser = await this.projectUserRepository.findOne({
                    where: {
                        projectId: logworkResponse.projectId,
                        userId: user.id,
                    },
                });
                if (!projectUser) {
                    throw new Error(MessageText.User_Not_Found);
                }
                else {
                    logworkResponse.title = title;
                    logworkResponse.workContent = workContent;
                    logworkResponse.workingHours = workingHour;

                    const projectUser = await this.projectUserRepository.findOne({
                        where: {
                            projectId: logworkResponse.projectId,
                            userId: logworkResponse.userId
                        },
                    });
                    if (!projectUser) {
                        throw new Error(MessageText.ProjectMember_Not_Found);
                    }
                    projectUser.totalWorkHour = projectUser.totalWorkHour + workingHour;
                    await this.logworkRepository.manager.transaction(async (transactionalEntityManager: EntityManager) => {
                        await transactionalEntityManager.save(Logwork, logworkResponse);
                        await transactionalEntityManager.save(ProjectUser, projectUser);
                    });
                    return {
                        success: true
                    }
                }
            }
        }
        catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }
}
