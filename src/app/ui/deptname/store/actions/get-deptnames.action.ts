import { GetDeptnamesResponseInterface } from './../../types/get-deptnames-response.interface';
import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';

import { DeptnameActionTypes } from '../deptname-action-types';

import { createAction, props } from '@ngrx/store';

export const getDeptnamesAction = createAction(
  DeptnameActionTypes.GET_DEPTNAMES
);

export const getDeptnamesSuccessAction = createAction(
  DeptnameActionTypes.GET_DEPTNAMES_SUCCESS,
  props<{ response: GetDeptnamesResponseInterface }>()
);

export const getDeptnamesFailureAction = createAction(
  DeptnameActionTypes.GET_DEPTNAMES_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
