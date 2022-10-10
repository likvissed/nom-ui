import { DeptnameActionTypes } from '../deptname-action-types';
import { createAction, props } from '@ngrx/store';

export const updateDeptnameAction = createAction(
  DeptnameActionTypes.UPDATE_DEPTNAME,
  props<{ data: any }>()
);

export const updateDeptnameSuccessAction = createAction(
  DeptnameActionTypes.UPDATE_DEPTNAME_SUCCESS,
  props<{ response: any }>()
);

export const updateDeptnameFailureAction = createAction(
  DeptnameActionTypes.UPDATE_DEPTNAME_FAILURE,
  props<{ error: any }>()
);
