import { DeptnameActionTypes } from '../deptname-action-types';
import { createAction, props } from '@ngrx/store';

export const getDeptnamesAction = createAction(
  DeptnameActionTypes.GET_DEPTNAMES
);

export const getDeptnamesSuccessAction = createAction(
  DeptnameActionTypes.GET_DEPTNAMES_SUCCESS,
  props<{ response: any }>()
);

export const getDeptnamesFailureAction = createAction(
  DeptnameActionTypes.GET_DEPTNAMES_FAILURE,
  props<{ error: any }>()
);
