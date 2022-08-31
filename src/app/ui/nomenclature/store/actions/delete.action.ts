import { ActionTypes } from './../action-types';
import { createAction, props } from '@ngrx/store';

export const deleteNomenclatureAction = createAction(
  ActionTypes.DOWNLOAD_NOMENCLATURE,
  props<{ id: any }>()
);

export const deleteNomenclatureActionSuccess = createAction(
  ActionTypes.DOWNLOAD_NOMENCLATURE_SUCCESS,
  props<{ response: any }>()
);

export const deleteNomenclatureActionFailure = createAction(
  ActionTypes.DOWNLOAD_NOMENCLATURE_FAILURE,
  props<{ error: any }>()
);
