import { NomenclatureStateInterface } from '../types/nomenclature-state.interface';

import { NOMENCLATURE_FEATURE_KEY } from './nomenclature-reducers';

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const nomenclatureFeatureSelector = createFeatureSelector<NomenclatureStateInterface>(NOMENCLATURE_FEATURE_KEY);

export const isSubmittingSelector = createSelector(nomenclatureFeatureSelector, (state: any) => state.isSubmitting);

export const selectFileTemplate = createSelector(nomenclatureFeatureSelector, (state: any) => state.file);

export const selectAllNomenclatures = createSelector(nomenclatureFeatureSelector, (state: any) => state.nomenclatures);

export const selectFiltersNom = createSelector(nomenclatureFeatureSelector, (state: any) => state.filters);

export const getDataPresentNom = createSelector(nomenclatureFeatureSelector, (state: any) => state.response);

export const getCurrentNom = createSelector(nomenclatureFeatureSelector, (state: any) => state.response);

export const flagSendSsd = createSelector(nomenclatureFeatureSelector, (state: any) => state.send_ssd);

export const flagUploadFile = createSelector(nomenclatureFeatureSelector, (state: any) => state.fileUpload);