import { GetUsersResponseInterface } from './../../types/get-users-response.interface';
import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';

import { createAction, props } from '@ngrx/store';

import { UserActionTypes } from '../user-action-types';

export const getUsersAction = createAction(
  UserActionTypes.GET_USERS
);

export const getUsersSuccessAction = createAction(
  UserActionTypes.GET_USERS_SUCCESS,
  props<{ response: GetUsersResponseInterface }>()
);

export const getUsersFailureAction = createAction(
  UserActionTypes.GET_USERS_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
