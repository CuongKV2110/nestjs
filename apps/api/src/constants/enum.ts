export enum UserType {
    EMPLOYEE = 1,
    PM = 2,
    ADMIN = 3
}

export enum RequestStatus {
    All = 0,
    InProgress = 1,
    Rejected = 2,
    Approved = 3,
    Cancelled = 4,
}

export enum MessageStatus {
    New = 1,
    Sending = 2,
    Sent = 3,
    Deleted = 4
}

export enum RequestHandle {
    Approve = 1,
    Reject = 2,
}

export enum RequestProjectType {
    Request_PM_Role = 1,
    Request_Member_Role = 2,
}

export enum RequestType {
    Request_TimeOff = 1,
    Request_Onleave = 2,
}

export enum TimeDefault {
    Time_Off = 120,
    On_Leave = 8
}

export enum Environment {
    Development = 'development',
    Staging = 'staging',
    Production = 'production',
    Test = 'test',
}

export enum PositionOfMember {
    Developer = 1,
    Comtor = 2,
    Tester = 3,
    BA = 4,
}

export enum GroupChatStatus {
    Active = 0,
    Deleted = 1,
}

export enum MessageText {
    Logout_Success = 'Logout success',
    Logout_Fail = 'Failed to logout',
    Email_Incorrect = 'Email is incorrect',
    Password_Incorrect = 'Password is incorrect',
    Password_Requirement = 'Password does not meet the required conditions',
    Password_Invalid = 'Password invalid',
    Email_Already_Exists = 'Email already exists',
    User_Not_Found = 'User not found',
    Recipent_Not_PM = 'The recipient of the request is not the PM',
    User_Not_PM = 'This account is not PM',
    User_Not_AD = 'This account is not ADMIN',
    Request_Not_Processing = 'This request is not in processing status',
    User_Not_Receiver_Request = 'This user is not the receiver of this request',
    Request_Not_Found = 'Request not found',
    Require_Permission_Update = 'You do not have permission to update this request',
    Require_Permission_Create_Project = 'You do not have permission to create project',
    Require_Permission_Add_Member = 'You do not have permission to add people to the project',
    Member_Already_Exists = 'All members are already part of the project',
    Project_Member_Error = 'Project Member Error',
    Member_Duplicate = 'ID members duplicated by user created',
    Member_Not_Exists = 'Some members do not exist',
    User_Not_Join_Project = 'User not join this Project',
    Logwork_Not_Found = 'Logwork not found',
    ProjectMember_Not_Found = 'Logwork not found',
    Handle_Logwork_Fail = 'An error occurred while processing the request',
    TimeError = "The time difference between startTime and endTime exceeds freeTime or is less than 10 minutes",
    Time_Not_Enough = "You do not have enough time for this request",
    TimeOff_Not_Found = "Time Off not found",
    OnLeave = "On Leave not found",
}
