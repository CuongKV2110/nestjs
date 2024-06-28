import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { MessageText, RequestStatus, RequestType, UserType } from '../../constants/enum';
import { OnLeave } from '../../database/entities/on_leave';
import { Request } from '../../database/entities/request';
import { TimeOff } from '../../database/entities/timeoff';
import User from '../../database/entities/user';
import { HandleRequestDto } from './dto/handle_request.dto';
import { RequestDetailQuery } from './dto/request_detail_query';
import { RequestOnLeaveDto } from './dto/request_on_leave.dto';
import { RequestTimeOffDto } from './dto/request_timeoff.dto';
import { UpdateRequestDto } from './dto/update_request.dto';

@Injectable()
export class RequestService {
    constructor(
        @InjectRepository(Request)
        private readonly requestRepository: Repository<Request>,

        @InjectRepository(TimeOff)
        private readonly timeOffRepository: Repository<TimeOff>,

        @InjectRepository(OnLeave)
        private readonly onLeaveRepository: Repository<OnLeave>,

        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async createTimeOff(requestTimeOffDto: RequestTimeOffDto, user: any): Promise<{ success: boolean, message?: string }> {
        return this.requestRepository.manager.transaction(
            async (transactionalEntityManager: EntityManager) => {
                try {
                    const { receiverRequest, title, startTime, endTime, reason } = requestTimeOffDto;
                    const userRes = await transactionalEntityManager.findOne(User, { where: { id: receiverRequest } });
                    const userCreateRequest = await transactionalEntityManager.findOne(User, { where: { id: user.id } });
                    const timeDifference = this.calculateTimeDifference(startTime, endTime);
                    if (timeDifference <= user.timeFree && timeDifference > 10) {
                        if (userRes.role === UserType.PM) {
                            const request = this.requestRepository.create({
                                user: userCreateRequest,
                                status: RequestStatus.InProgress,
                                type: RequestType.Request_TimeOff,
                                receiverRequest: userRes,
                            });
                            const savedRequest = await transactionalEntityManager.save(Request, request);
                            const timeoff = this.timeOffRepository.create({
                                title: title,
                                startTime: startTime.toString(),
                                endTime: endTime.toString(),
                                reason: reason,
                                requestId: savedRequest.id
                            });
                            await transactionalEntityManager.save(TimeOff, timeoff);

                            userCreateRequest.timeFree -= timeDifference;
                            await transactionalEntityManager.save(User, userCreateRequest);

                            return {
                                success: true
                            }
                        }
                        else {
                            throw new Error(MessageText.Recipent_Not_PM)
                        }
                    } else {
                        throw new Error(MessageText.TimeError);
                    }
                } catch (error) {
                    return {
                        success: false,
                        message: error.message
                    }
                }
            }
        );

    }

    async createOnLeave(createOnLeave: RequestOnLeaveDto, user: any): Promise<{ success: boolean, message?: string }> {
        return this.requestRepository.manager.transaction(
            async (transactionalEntityManager: EntityManager) => {
                try {
                    const { receiverRequest, title, reason, hour } = createOnLeave;;
                    const userRes = await transactionalEntityManager.findOne(User, { where: { id: receiverRequest } });
                    const userCreateRequest = await transactionalEntityManager.findOne(User, { where: { id: user.id } });
                    if (hour < user.timeWallet) {
                        if (userRes.role === UserType.PM) {
                            const request = this.requestRepository.create({
                                user: userCreateRequest,
                                status: RequestStatus.InProgress,
                                type: RequestType.Request_Onleave,
                                receiverRequest: userRes,
                            });
                            const savedRequest = await transactionalEntityManager.save(Request, request);
                            const onLeave = this.onLeaveRepository.create({
                                title: title,
                                reason: reason,
                                requestId: savedRequest.id,
                                hour: hour
                            });
                            await transactionalEntityManager.save(OnLeave, onLeave);

                            userCreateRequest.timeWallet -= hour;
                            await transactionalEntityManager.save(User, userCreateRequest);
                            return {
                                success: true
                            }
                        }
                        else {
                            throw new Error(MessageText.Recipent_Not_PM)
                        }
                    }
                    else {
                        throw new Error(MessageText.Time_Not_Enough)
                    }
                } catch (error) {
                    return {
                        success: false,
                        message: error.message
                    }
                }
            }
        );
    }

    async getListRequest(user: any): Promise<{ success: boolean, data?: Request[], message?: string }> {
        try {
            const requestRes = await this.requestRepository.createQueryBuilder("request")
                .leftJoinAndMapOne('request.timeOff', TimeOff, 'timeOff', 'timeOff.requestId = request.id')
                .leftJoinAndMapOne('request.onLeave', OnLeave, 'onLeave', 'onLeave.requestId = request.id')
                .select([
                    "request.id",
                    "request.type",
                    "request.status",
                    "request.createdAt",
                    "timeOff.title",
                    "timeOff.reason",
                    "timeOff.startTime",
                    "timeOff.endTime",
                    "onLeave.title",
                    "onLeave.reason",
                    "onLeave.hour",
                ])
                .where('request.user = :id', { id: user.id })
                .getMany();
            return {
                success: true,
                data: requestRes
            };
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    async getListReceivedRequest(user: any): Promise<{ success: boolean, data?: Request[], message?: string }> {
        try {
            const isCheckUser = await this.userRepository.findOne({ where: { id: user.id } });
            if (!isCheckUser) {
                throw new Error(MessageText.User_Not_Found);
            }
            else {
                if (user.role == UserType.PM) {
                    const requestRes = await this.requestRepository.createQueryBuilder("request")
                        .leftJoinAndMapOne('request.timeOff', TimeOff, 'timeOff', 'timeOff.requestId = request.id')
                        .leftJoinAndMapOne('request.onLeave', OnLeave, 'onLeave', 'onLeave.requestId = request.id')
                        .select([
                            "request.id",
                            "request.type",
                            "request.status",
                            "request.createdAt",
                            "timeOff.title",
                            "timeOff.reason",
                            "timeOff.startTime",
                            "timeOff.endTime",
                            "onLeave.title",
                            "onLeave.reason",
                            "onLeave.hour",
                        ])
                        .where('request.receiverRequest = :userId', { userId: user.id })
                        .getMany();
                    return {
                        success: true,
                        data: requestRes
                    };
                }
                else {
                    throw new Error(MessageText.User_Not_PM);
                }
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    async getRequestDetail(requestDetailQuery: RequestDetailQuery, user: any): Promise<{ success: boolean, data?: Request, message?: string }> {
        try {
            const { requestId, type } = requestDetailQuery;
            if (type == RequestType.Request_TimeOff) {
                const requestRes = await this.requestRepository.createQueryBuilder("request")
                    .leftJoinAndMapOne('request.timeOff', TimeOff, 'timeOff', 'timeOff.requestId = request.id')
                    .select([
                        "request.id",
                        "request.type",
                        "request.status",
                        "request.createdAt",
                        "timeOff.title",
                        "timeOff.reason",
                        "timeOff.startTime",
                        "timeOff.endTime"
                    ])
                    .where('(request.receiverRequest = :receiverRequest OR request.user = :userId)', { receiverRequest: user.id, userId: user.id })
                    .andWhere('request.id = :idRequest', { idRequest: requestId })
                    .getOne();
                return {
                    success: true,
                    data: requestRes
                };
            }
            else if (type == RequestType.Request_Onleave) {
                const requestRes = await this.requestRepository.createQueryBuilder("request")
                    .leftJoinAndMapOne('request.onLeave', OnLeave, 'onLeave', 'onLeave.requestId = request.id')
                    .select([
                        "request.id",
                        "request.type",
                        "request.status",
                        "request.createdAt",
                        "onLeave.title",
                        "onLeave.reason",
                        "onLeave.hour",

                    ])
                    .where('(request.receiverRequest = :receiverRequest OR request.user = :userId)', { receiverRequest: user.id, userId: user.id })
                    .andWhere('request.id = :idRequest', { idRequest: requestId })
                    .getOne();
                return {
                    success: true,
                    data: requestRes
                };
            }
            else {
                throw new Error("Khogn co type")
            }
        } catch (error) {
            return {
                success: false,
                message: error.message
            }
        }
    }

    async handleRequest(handleRequestDto: HandleRequestDto, user: any): Promise<{ success: boolean, message?: string }> {
        return this.requestRepository.manager.transaction(
            async (transactionalEntityManager: EntityManager) => {
                try {
                    const { requestId, status } = handleRequestDto;
                    const userRes = await transactionalEntityManager.findOne(User, { where: { id: user.id } });

                    if (userRes.role !== UserType.PM) {
                        throw new Error(MessageText.User_Not_PM);
                    }

                    const request = await transactionalEntityManager.findOne(Request, {
                        where: { id: requestId },
                        relations: ['receiverRequest', 'user']
                    });

                    if (!request) {
                        throw new Error(MessageText.Request_Not_Found);
                    }

                    if (request.receiverRequest.id !== user.id) {
                        throw new Error(MessageText.User_Not_Receiver_Request);
                    }

                    if (request.status !== RequestStatus.InProgress) {
                        throw new Error(MessageText.Request_Not_Processing);
                    }

                    const userRequest = await transactionalEntityManager.findOne(User, { where: { id: request.user.id } });

                    if (status === RequestStatus.Rejected) {
                        if (request.type === RequestType.Request_TimeOff) {
                            const timeOff = await transactionalEntityManager.findOne(TimeOff, { where: { requestId: request.id } });

                            if (!timeOff) {
                                throw new Error(MessageText.TimeOff_Not_Found);
                            }

                            const timeDifference = this.calculateTimeDifference(timeOff.startTime, timeOff.endTime);
                            userRequest.timeFree += timeDifference;
                            await transactionalEntityManager.save(User, userRequest);
                        }
                        if (request.type === RequestType.Request_Onleave) {
                            const onLeave = await transactionalEntityManager.findOne(OnLeave, { where: { requestId: request.id } });

                            if (!onLeave) {
                                throw new Error(MessageText.TimeOff_Not_Found);
                            }

                            userRequest.timeWallet += onLeave.hour;
                            await transactionalEntityManager.save(User, userRequest);
                        }

                    }

                    await transactionalEntityManager.update(Request, { id: requestId }, { status: status });

                    return {
                        success: true
                    };
                } catch (error) {
                    return {
                        success: false,
                        message: error.message
                    };
                }
            }
        );
    }

    async updateRequest(updateRequestDto: UpdateRequestDto, user: any): Promise<{ success: boolean, message?: string }> {
        return this.requestRepository.manager.transaction(async (transactionalEntityManager: EntityManager) => {
            try {
                const { requestId, title, reason, startTime, endTime } = updateRequestDto;
                const request = await transactionalEntityManager.findOne(Request, {
                    where: { id: requestId },
                    relations: ['user']
                });
                if (!request) {
                    throw new Error(MessageText.Request_Not_Found);
                }
                if (request.status !== RequestStatus.InProgress) {
                    throw new Error(MessageText.Request_Not_Processing);
                }
                if (request.user.id !== user.id) {
                    throw new Error(MessageText.Require_Permission_Update);
                }
                await transactionalEntityManager.update(TimeOff, { requestId: request.id }, {
                    title,
                    reason,
                    startTime,
                    endTime,
                });
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

    private calculateTimeDifference(startTime: string | Date, endTime: string | Date): number {
        const start = new Date(startTime).getTime();
        const end = new Date(endTime).getTime();
        return (end - start) / (1000 * 60);
    }

    findAll() {
        return `This action returns all request`;
    }
}
