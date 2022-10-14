import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { NomenclatureInterface } from './../../types/nomenclature.interface';
import { ActionTypes } from './../action-types';
import { createAction, props } from '@ngrx/store';

export const getCurrentAction = createAction(
  ActionTypes.GET_CURRENT,
  props<{ id: any }>()
);

export const getCurrentActionSuccess = createAction(
  ActionTypes.GET_CURRENT_SUCCESS,
  props<{ response: NomenclatureInterface }>()
);

export const getCurrentActionFailure = createAction(
  ActionTypes.GET_CURRENT_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
