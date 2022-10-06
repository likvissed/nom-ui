import { DeptnameActionTypes } from '../deptname-action-types';
import { createAction, props } from '@ngrx/store';

export const addDeptnameAction = createAction(
  DeptnameActionTypes.ADD_DEPTNAME,
  props<{ data: any }>()
);

export const addDeptnameSuccessAction = createAction(
  DeptnameActionTypes.ADD_DEPTNAME_SUCCESS,
  props<{ response: any }>()
);

export const addDeptnameFailureAction = createAction(
  DeptnameActionTypes.ADD_DEPTNAME_FAILURE,
  props<{ error: any }>()
);
