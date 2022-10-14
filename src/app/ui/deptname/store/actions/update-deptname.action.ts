import { SuccessResponseInterface } from './../../../shared/types/success-response.interface';
import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { AddDeptnameRequestInterface } from './../../types/add-deptname-request.interface';

import { DeptnameActionTypes } from '../deptname-action-types';

import { createAction, props } from '@ngrx/store';

export const updateDeptnameAction = createAction(
  DeptnameActionTypes.UPDATE_DEPTNAME,
  props<{ data: AddDeptnameRequestInterface }>()
);

export const updateDeptnameSuccessAction = createAction(
  DeptnameActionTypes.UPDATE_DEPTNAME_SUCCESS,
  props<{ response: SuccessResponseInterface }>()
);

export const updateDeptnameFailureAction = createAction(
  DeptnameActionTypes.UPDATE_DEPTNAME_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
