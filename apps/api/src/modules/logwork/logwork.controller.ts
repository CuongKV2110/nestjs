import { ClientControllers } from '@app/core/decorator/controller-customer.decorator';
import { Body, Get, Param, ParseIntPipe, Post, Put, Query, Req, UseGuards } from '@nestjs/common';
import { PageSizeDto } from '../../utils/page_size.dto';
import { AuthGuard } from '../user/auth.guard';
import { CreateLogworkDto } from './dto/create_logwork.dto';
import { HandleLogWorkDto } from './dto/handle_logwork.dto';
import { ReceivedLogWorkDto } from './dto/received_logwork.dto';
import { UpdateLogWorkDto } from './dto/update_logwork.dto';
import { LogworkService } from './logwork.service';

@UseGuards(AuthGuard)
@ClientControllers('logwork')
export class LogworkController {
    constructor(private readonly logworkService: LogworkService) { }

    @Post('create')
    createLogwork(
        @Body() createLogworkDto: CreateLogworkDto,
        @Req() req: any) {
        return this.logworkService.createLogWork(createLogworkDto, req.user);
    }

    @Get('detail/:id')
    logWorkDetail(@Param('id', ParseIntPipe) id: number) {
        return this.logworkService.logWorkDetail(id);
    }

    @Get()
    receivedLogwork(
        @Query() receivedLogwork: ReceivedLogWorkDto) {
        return this.logworkService.receivedLogwork(receivedLogwork);
    }

    @Put('handle-logwork')
    handleLogWork(@Body() body: HandleLogWorkDto) {
        return this.logworkService.handleLogWork(body);
    }

    @Put('update')
    updateLogWork(
        @Body() body: UpdateLogWorkDto,
        @Req() req: any) {
        return this.logworkService.updateLogWork(body, req.user);
    }
}
