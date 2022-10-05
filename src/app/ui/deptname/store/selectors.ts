import { DeptnameStateInterface } from './deptname.stub';
import { DEPTNAME_FEATURE_KEY } from './deptname-reducers';

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const deptnameFeatureSelector = createFeatureSelector<DeptnameStateInterface>(DEPTNAME_FEATURE_KEY);

export const selectAllDeptnames = createSelector(deptnameFeatureSelector, (state: any) => state.deptnames);
