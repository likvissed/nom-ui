import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { SuccessResponseInterface } from './../../../shared/types/success-response.interface';
import { AddUserRequestInterface } from './../../types/add-user-request.interface';
import { createAction, props } from '@ngrx/store';
import { UserActionTypes } from '../user-action-types';

export const addUserAction = createAction(
  UserActionTypes.ADD_USER,
  props<{ data: AddUserRequestInterface }>()
);

export const addUserSuccessAction = createAction(
  UserActionTypes.ADD_USER_SUCCESS,
  props<{ response: SuccessResponseInterface }>()
);

export const addUserFailureAction = createAction(
  UserActionTypes.ADD_USER_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
