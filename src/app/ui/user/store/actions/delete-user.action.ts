import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { SuccessResponseInterface } from './../../../shared/types/success-response.interface';
import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from '../user-action-types';

export const deleteUserAction = createAction(
  UserActionTypes.DELETE_USER,
  props<{ id: number }>()
);

export const deleteUserSuccessAction = createAction(
  UserActionTypes.DELETEE_USER_SUCCESS,
  props<{ response: SuccessResponseInterface }>()
);

export const deleteUserFailureAction = createAction(
  UserActionTypes.DELETE_USER_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
