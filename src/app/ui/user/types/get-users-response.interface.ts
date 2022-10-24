import { RoleInterface } from './role.interface';
import { DeptnameInterface } from './../../deptname/types/deptname.interface';
import { UserInterface } from './user.interface';

export interface GetUsersResponseInterface {
  users: UserInterface[]
  filters: {
    roles: RoleInterface[]
    deptnames: DeptnameInterface[]
  }
}
