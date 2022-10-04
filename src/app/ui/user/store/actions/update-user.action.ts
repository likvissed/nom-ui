import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from '../user-action-types';

export const updateUserAction = createAction(
  UserActionTypes.UPDATE_USER,
  props<{ data: any }>()
);

export const updateUserSuccessAction = createAction(
  UserActionTypes.UPDATE_USER_SUCCESS,
  props<{ response: any }>()
);

export const updateUserFailureAction = createAction(
  UserActionTypes.UPDATE_USER_FAILURE,
  props<{ error: any }>()
);
