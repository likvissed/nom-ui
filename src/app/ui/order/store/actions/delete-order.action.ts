import { SuccessResponseInterface } from './../../../shared/types/success-response.interface';
import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';

import { ActionTypes } from '../action-types';
import { createAction, props } from '@ngrx/store';

export const deleteOrderAction = createAction(
  ActionTypes.DELETE_ORDER,
  props<{id: number }>()
);

export const deleteOrderSuccessAction = createAction(
  ActionTypes.DELETE_ORDER_SUCCESS,
  props<{ response: SuccessResponseInterface }>()
);

export const deleteOrderFailureAction = createAction(
  ActionTypes.DELETE_ORDER_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
