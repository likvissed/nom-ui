import { SharedStateInterface } from '../types/shared-state.interface';

import { SHARED_FEATURE_KEY } from './reducers';

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const sharedFeatureSelector = createFeatureSelector<SharedStateInterface>(SHARED_FEATURE_KEY);

export const searchUsers = createSelector(sharedFeatureSelector, (state: any) => state.peoples);
