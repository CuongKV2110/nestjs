import { ProjectMemberDto } from "./project_member.dto";

export class ProjectDetailDto {
    id: number;
    projectName: string;
    projectManagerId: string;
    startDate: string;
    endDate: string;
    description: string;
    totalWorkHour: number;
    member: ProjectMemberDto[]
}
