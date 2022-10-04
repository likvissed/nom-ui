import { UserStateInterface } from './../types/user-state.interface';
import { USER_FEATURE_KEY } from './user-reducers';

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const userFeatureSelector = createFeatureSelector<UserStateInterface>(USER_FEATURE_KEY);

export const selectAllUsers = createSelector(userFeatureSelector, (state: any) => state.users);

export const selectUserFilters = createSelector(userFeatureSelector, (state: any) => state.filters);

export const flagResponse = createSelector(userFeatureSelector, (state: any) => state.flag);
