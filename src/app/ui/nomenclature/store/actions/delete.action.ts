import { ActionTypes } from './../action-types';
import { createAction, props } from '@ngrx/store';

export const deleteNomenclatureAction = createAction(
  ActionTypes.DELETE_NOMENCLATURE,
  props<{ id: any }>()
);

export const deleteNomenclatureActionSuccess = createAction(
  ActionTypes.DELETE_NOMENCLATURE_SUCCESS,
  props<{ response: any }>()
);

export const deleteNomenclatureActionFailure = createAction(
  ActionTypes.DELETE_NOMENCLATURE_FAILURE,
  props<{ error: any }>()
);
