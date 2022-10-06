import { UserDeptInterface } from './user-dept.interface';

export interface DeptnameInterface {
  id: number
  deptname: string
  info: string
  users: UserDeptInterface[]
}
