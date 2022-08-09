import { getOrdersAction, getOrdersFailureAction, getOrdersSuccessAction } from './actions/get-orders.action';
import { OrderStateInterface } from './../types/order-state.interface';
import { Action, createReducer, on } from '@ngrx/store';

export const ORDER_FEATURE_KEY = 'order';

const initialState: OrderStateInterface = {
  isSubmitting: false,
  response: null,
  orders: null
}

const reducer = createReducer(
  initialState,

  on(getOrdersAction, (state): OrderStateInterface => ({
    ...state,
    isSubmitting: true,
    orders: null
  })),
  on(getOrdersSuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    orders: action.response.orders
  })),
  on(getOrdersFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false
  }))
)

export function orderReducer(state: OrderStateInterface, action: Action) {
  return reducer(state, action)
}
