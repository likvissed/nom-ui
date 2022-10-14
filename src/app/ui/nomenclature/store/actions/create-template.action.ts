import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { NomenclatureInterface } from './../../types/nomenclature.interface';
import { ActionTypes } from '../action-types';
import { createAction, props } from '@ngrx/store';

export const createTemplateAction = createAction(
  ActionTypes.CREATE_TEMPLATE,
  props<{ data: NomenclatureInterface }>()
);

export const createTemplateSuccessAction = createAction(
  ActionTypes.CREATE_TEMPLATE_SUCCESS,
  props<{ response: any }>()
);

export const createTemplateFailureAction = createAction(
  ActionTypes.CREATE_TEMPLATE_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
