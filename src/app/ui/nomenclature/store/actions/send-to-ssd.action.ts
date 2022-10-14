import { NomenclatureInterface } from './../../types/nomenclature.interface';
import { SuccessResponseInterface } from './../../../shared/types/success-response.interface';
import { ErrorResponseInterface } from './../../../shared/types/error-response.interface';
import { ActionTypes } from '../action-types';
import { createAction, props } from '@ngrx/store';

export const sendToSsdAction = createAction(
  ActionTypes.SEND_TO_SSD,
  props<{ data: NomenclatureInterface }>()
);

export const sendToSsdActionSuccess = createAction(
  ActionTypes.SEND_TO_SSD_SUCCESS,
  props<{ response: SuccessResponseInterface }>()
);

export const sendToSsdActionFailure = createAction(
  ActionTypes.SEND_TO_SSD_FAILURE,
  props<{ error: ErrorResponseInterface }>()
);
