import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { SuccessResponseInterface } from './../../../shared/types/success-response.interface';
import { AddOrderRequestInterface } from './../../types/add-order-request.interface';

import { ActionTypes } from '../action-types';

import { createAction, props } from '@ngrx/store';

export const addOrderAction = createAction(
  ActionTypes.ADD_ORDER,
  props<{ data: AddOrderRequestInterface }>()
);

export const addOrderSuccessAction = createAction(
  ActionTypes.ADD_ORDER_SUCCESS,
  props<{ response: SuccessResponseInterface }>()
);

export const addOrderFailureAction = createAction(
  ActionTypes.ADD_ORDER_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
