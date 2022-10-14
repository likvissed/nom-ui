import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { GetListResponseInterface } from './../../types/get-list-response.interface';

import { ActionTypes } from '../action-types';

import { createAction, props } from '@ngrx/store';

export const getListAction = createAction(
  ActionTypes.GET_LIST_NOMENCLATURE
);

export const getListActionSuccess = createAction(
  ActionTypes.GET_LIST_NOMENCLATURE_SUCCESS,
  props<{ response: GetListResponseInterface }>()
);

export const getListActionFailure = createAction(
  ActionTypes.CREATE_TEMPLATE_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
