import { addOrderAction, addOrderFailureAction, addOrderSuccessAction } from './actions/add-order.action';
import { getOrdersAction, getOrdersFailureAction, getOrdersSuccessAction } from './actions/get-orders.action';
import { deleteOrderAction, deleteOrderFailureAction, deleteOrderSuccessAction } from './actions/delete-order.action';

import { OrderStateInterface } from './../types/order-state.interface';

import { Action, createReducer, on } from '@ngrx/store';

export const ORDER_FEATURE_KEY = 'order';

const initialState: OrderStateInterface = {
  isSubmitting: false,
  response: null,
  orders: null,
  errors: null,
  duration_types: null,
  flag: false
}

const reducer = createReducer(
  initialState,

  on(getOrdersAction, (state): OrderStateInterface => ({
    ...state,
    isSubmitting: true,
    orders: null,
    duration_types: null
  })),
  on(getOrdersSuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    orders: action.response.orders,
    duration_types: action.response.data_filters.duration_types
  })),
  on(getOrdersFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    orders: null,
    duration_types: null,
    errors: action.error
  })),

  on(deleteOrderAction, (state): any => ({
    ...state
  })),
  on(deleteOrderSuccessAction, (state, action): any => ({
    ...state,
    response: action
  })),
  on(deleteOrderFailureAction, (state, action): any => ({
    ...state,
    errors: action.error,
  })),

  on(addOrderAction, (state): any => ({
    ...state,
    flag: false
  })),
  on(addOrderSuccessAction, (state, action): any => ({
    ...state,
    response: action,
    flag: true
  })),
  on(addOrderFailureAction, (state, action): any => ({
    ...state,
    errors: action.error,
    flag: false
  })),
)

export function orderReducer(state: OrderStateInterface, action: Action) {
  return reducer(state, action)
}
