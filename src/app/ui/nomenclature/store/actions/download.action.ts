import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { SuccessResponseInterface } from './../../../shared/types/success-response.interface';

import { ActionTypes } from './../action-types';

import { createAction, props } from '@ngrx/store';

export const downloadNomenclatureAction = createAction(
  ActionTypes.DOWNLOAD_NOMENCLATURE,
  props<{ id: number }>()
);

export const downloadNomenclatureActionSuccess = createAction(
  ActionTypes.DOWNLOAD_NOMENCLATURE_SUCCESS,
  props<{ response: SuccessResponseInterface }>()
);

export const downloadNomenclatureActionFailure = createAction(
  ActionTypes.DOWNLOAD_NOMENCLATURE_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
