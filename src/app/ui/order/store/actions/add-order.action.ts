import { ActionTypes } from '../action-types';
import { createAction, props } from '@ngrx/store';

export const addOrderAction = createAction(
  ActionTypes.ADD_ORDER,
  props<{ data: any }>()
);

export const addOrderSuccessAction = createAction(
  ActionTypes.ADD_ORDER_SUCCESS,
  props<{ response: any }>()
);

export const addOrderFailureAction = createAction(
  ActionTypes.ADD_ORDER_FAILURE,
  props<{ error: any }>()
);
