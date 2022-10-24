import { SignsInfoInterface } from './signs-info.interface';
import { TableInterface } from './table.interface';
import { SignMainInterface } from './sign-main.interface';

export interface NomenclatureInterface {
  deptname: string
  head_dept: string
  year: number
  sign_main: SignMainInterface
  table: TableInterface[]
  signs_info: SignsInfoInterface[]
}
