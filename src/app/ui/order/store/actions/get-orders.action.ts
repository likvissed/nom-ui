import { GetOrdersResponseInterface } from './../../types/get-orders-response.interface';
import { ActionTypes } from '../action-types';
import { createAction, props } from '@ngrx/store';

export const getOrdersAction = createAction(
  ActionTypes.GET_ORDERS
);

export const getOrdersSuccessAction = createAction(
  ActionTypes.GET_ORDERS_SUCCESS,
  props<{ response: GetOrdersResponseInterface }>()
);

export const getOrdersFailureAction = createAction(
  ActionTypes.GET_ORDERS_FAILURE,
  props<{ error: any }>()
);
