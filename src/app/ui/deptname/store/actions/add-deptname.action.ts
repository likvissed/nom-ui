import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { SuccessResponseInterface } from './../../../shared/types/success-response.interface';
import { AddDeptnameRequestInterface } from './../../types/add-deptname-request.interface';

import { DeptnameActionTypes } from '../deptname-action-types';

import { createAction, props } from '@ngrx/store';

export const addDeptnameAction = createAction(
  DeptnameActionTypes.ADD_DEPTNAME,
  props<{ data: AddDeptnameRequestInterface }>()
);

export const addDeptnameSuccessAction = createAction(
  DeptnameActionTypes.ADD_DEPTNAME_SUCCESS,
  props<{ response: SuccessResponseInterface }>()
);

export const addDeptnameFailureAction = createAction(
  DeptnameActionTypes.ADD_DEPTNAME_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
