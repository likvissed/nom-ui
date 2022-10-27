import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { SuccessResponseInterface } from './../../../shared/types/success-response.interface';

import { ActionTypes } from '../action-types';

import { createAction, props } from '@ngrx/store';

export const uploadFileAction = createAction(
  ActionTypes.UPLOAD_FILE_NOMENCLATURE,
  props<{ data: any }>()
);

export const uploadFileSuccessAction = createAction(
  ActionTypes.UPLOAD_FILE_NOMENCLATURE_SUCCESS,
  props<{ response: SuccessResponseInterface }>()
);

export const uploadFileFailureAction = createAction(
  ActionTypes.UPLOAD_FILE_NOMENCLATURE_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
