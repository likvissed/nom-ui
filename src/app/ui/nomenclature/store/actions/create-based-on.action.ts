import { NomenclatureInterface } from './../../types/nomenclature.interface';
import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';

import { ActionTypes } from '../action-types';

import { createAction, props } from '@ngrx/store';

export const createBasedOnAction = createAction(
  ActionTypes.CREATE_BASED_ON,
  props<{ id: number }>()
);

export const createBasedOnActionSuccess = createAction(
  ActionTypes.CREATE_BASED_ON_SUCCESS,
  props<{ response: NomenclatureInterface }>()
);

export const createBasedOnActionFailure = createAction(
  ActionTypes.CREATE_BASED_ON_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
