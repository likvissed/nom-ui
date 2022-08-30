import { NomenclatureStateInterface } from './../types/nomenclature-state.interface';
import { NOMENCLATURE_FEATURE_KEY } from './reducers';

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const nomenclatureFeatureSelector = createFeatureSelector<NomenclatureStateInterface>(NOMENCLATURE_FEATURE_KEY);

export const isSubmittingSelector = createSelector(nomenclatureFeatureSelector, (state: any) => state.isSubmitting);

export const selectFileTemplate = createSelector(nomenclatureFeatureSelector, (state: any) => state.response);