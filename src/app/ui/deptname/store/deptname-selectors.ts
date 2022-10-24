import { DeptnameStateInterface } from '../types/deptname.state.interface';

import { DEPTNAME_FEATURE_KEY } from './deptname-reducers';

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const deptnameFeatureSelector = createFeatureSelector<DeptnameStateInterface>(DEPTNAME_FEATURE_KEY);

export const selectAllDeptnames = createSelector(deptnameFeatureSelector, (state: any) => state.deptnames);

export const flagResponse = createSelector(deptnameFeatureSelector, (state: any) => state.flag);
