import { DeptNames } from './dept-names.interface';
import { StateTypesInterface } from './state-types.interface';

export interface GetListFilterInterface {
  state_types: StateTypesInterface[],
  dept_names: DeptNames[]
}
