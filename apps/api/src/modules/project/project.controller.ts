import { ClientControllers } from '@app/core/decorator/controller-customer.decorator';
import { Body, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { IsNumberNotNull } from '../../helper/number.validation';
import { PageSizeDto } from '../../utils/page_size.dto';
import { AuthGuard } from '../user/auth.guard';
import { AddMemberDto } from './dto/add_member.dto';
import { CreateProjectDto } from './dto/create_project.dto';
import { ProjectService } from './project.service';

@UseGuards(AuthGuard)
@ClientControllers('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) { }

    @Post('create')
    createProject(
        @Body() createProjectDto: CreateProjectDto,
        @Req() req: any) {
        return this.projectService.createProject(createProjectDto, req.user);
    }

    @Post('add-member')
    addMemberToProject(
        @Body() addMemberDto: AddMemberDto,
        @Req() req: any) {
        return this.projectService.addMemberToProject(addMemberDto, req.user);
    }
    @Get('list-project')
    getProjectParticipated(
        @Query() pageSizeDto: PageSizeDto,
        @Req() req: any) {
        return this.projectService.getProjectParticipated(pageSizeDto, req.user);
    }

    @Get('list-project-manager')
    getListProjectManager(
        @Query() pageSizeDto: PageSizeDto,
        @Req() req: any) {
        return this.projectService.getListProjectManager(pageSizeDto, req.user);
    }

    @Get('detail/:id')
    getInfoProject(@Param('id', IsNumberNotNull) id: number) {
        return this.projectService.getInfoProject(id);
    }
}
