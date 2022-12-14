import { ORDER_FEATURE_KEY } from './order-reducers';

import { OrderStateInterface } from '../types/order-state.interface';

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const orderFeatureSelector = createFeatureSelector<OrderStateInterface>(ORDER_FEATURE_KEY);

export const selectAllOrders = createSelector(orderFeatureSelector, (state: any) => state.orders);

export const selectAllDurationTypes = createSelector(orderFeatureSelector, (state: any) => state.duration_types);

export const flagResponseTrue = createSelector(orderFeatureSelector, (state: any) => state.flag);
