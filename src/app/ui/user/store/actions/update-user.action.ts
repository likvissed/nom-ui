import { AddUserRequestInterface } from './../../types/add-user-request.interface';
import { SuccessResponseInterface } from './../../../shared/types/success-response.interface';
import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from '../user-action-types';

export const updateUserAction = createAction(
  UserActionTypes.UPDATE_USER,
  props<{ data: AddUserRequestInterface }>()
);

export const updateUserSuccessAction = createAction(
  UserActionTypes.UPDATE_USER_SUCCESS,
  props<{ response: SuccessResponseInterface }>()
);

export const updateUserFailureAction = createAction(
  UserActionTypes.UPDATE_USER_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
