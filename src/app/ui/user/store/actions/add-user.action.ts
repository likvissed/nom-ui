import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from '../user-action-types';

export const addUserAction = createAction(
  UserActionTypes.ADD_USER,
  props<{ data: any }>()
);

export const addUserSuccessAction = createAction(
  UserActionTypes.ADD_USER_SUCCESS,
  props<{ response: any }>()
);

export const addUserFailureAction = createAction(
  UserActionTypes.ADD_USER_FAILURE,
  props<{ error: any }>()
);
