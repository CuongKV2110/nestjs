import { GroupChat } from "./group_chat"
import { GroupChatMember } from "./group_chat_member"
import { Logwork } from "./logwork"
import { Message } from "./message"
import { OnLeave } from "./on_leave"
import { Project } from "./project"
import { ProjectUser } from "./project_user"
import { Request } from "./request"
import { TimeOff } from "./timeoff"
import User from "./user"

export const DefaultEntities = [User, Logwork, Project, Request, Message, TimeOff, GroupChat, GroupChatMember, ProjectUser, OnLeave]
export default DefaultEntities
