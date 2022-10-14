import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { SuccessResponseInterface } from './../../../shared/types/success-response.interface';
import { ActionTypes } from './../action-types';
import { createAction, props } from '@ngrx/store';

export const deleteNomenclatureAction = createAction(
  ActionTypes.DELETE_NOMENCLATURE,
  props<{ id: number }>()
);

export const deleteNomenclatureActionSuccess = createAction(
  ActionTypes.DELETE_NOMENCLATURE_SUCCESS,
  props<{ response: SuccessResponseInterface }>()
);

export const deleteNomenclatureActionFailure = createAction(
  ActionTypes.DELETE_NOMENCLATURE_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
