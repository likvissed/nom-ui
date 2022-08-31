import { ActionTypes } from './../action-types';
import { createAction, props } from '@ngrx/store';

export const downloadNomenclatureAction = createAction(
  ActionTypes.DOWNLOAD_NOMENCLATURE,
  props<{ data: any }>()
);

export const downloadNomenclatureActionSuccess = createAction(
  ActionTypes.DOWNLOAD_NOMENCLATURE_SUCCESS,
  props<{ response: any }>()
);

export const downloadNomenclatureActionFailure = createAction(
  ActionTypes.DOWNLOAD_NOMENCLATURE_FAILURE,
  props<{ error: any }>()
);
