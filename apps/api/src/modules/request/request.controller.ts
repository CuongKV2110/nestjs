import { ClientControllers } from '@app/core/decorator/controller-customer.decorator';
import { Body, Get, Param, ParseIntPipe, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../user/auth.guard';
import { HandleRequestDto } from './dto/handle_request.dto';
import { RequestOnLeaveDto } from './dto/request_on_leave.dto';
import { RequestTimeOffDto } from './dto/request_timeoff.dto';
import { UpdateRequestDto } from './dto/update_request.dto';
import { RequestService } from './request.service';
import { RequestDetailQuery } from './dto/request_detail_query';

@UseGuards(AuthGuard)
@ClientControllers('request')
export class RequestController {
    constructor(private readonly requestService: RequestService) { }

    @Post('create/time-off')
    async createRequestTimeOff(@Body() requestTimeOffDto: RequestTimeOffDto, @Req() req: any) {
        return this.requestService.createTimeOff(requestTimeOffDto, req.user);
    }

    @Post('create/on-leave')
    async createRequestOnLeave(@Body() requestOnLeaveDto: RequestOnLeaveDto, @Req() req: any) {
        return this.requestService.createOnLeave(requestOnLeaveDto, req.user);
    }

    @Get('detail/:requestId')
    async detailRequest(@Query() detailQuery: RequestDetailQuery, @Req() req: any) {
        return this.requestService.getRequestDetail(detailQuery, req.user);
    }

    @Post('update')
    async updateRequest(
        @Body() body: UpdateRequestDto, @Req() req: any) {
        return this.requestService.updateRequest(body, req.user);
    }

    @Get()
    async getListRequest(@Req() req: any) {
        return this.requestService.getListRequest(req.user);
    }

    @Get('received-request')
    async getListReceivedRequest(@Req() req: any) {
        return this.requestService.getListReceivedRequest(req.user);
    }

    @Put('handle-request')
    async handleRequest(@Body() body: HandleRequestDto, @Req() req: any) {
        return this.requestService.handleRequest(body, req.user);
    }
}

