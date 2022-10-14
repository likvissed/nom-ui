import { SuccessResponseInterface } from './../../../shared/types/success-response.interface';
import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';

import { DeptnameActionTypes } from '../deptname-action-types';

import { createAction, props } from '@ngrx/store';

export const deleteDeptnameAction = createAction(
  DeptnameActionTypes.DELETE_DEPTNAME,
  props<{ id: number }>()
);

export const deleteDeptnameSuccessAction = createAction(
  DeptnameActionTypes.DELETEE_DEPTNAME_SUCCESS,
  props<{ response: SuccessResponseInterface}>()
);

export const deleteDeptnameFailureAction = createAction(
  DeptnameActionTypes.DELETE_DEPTNAME_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
