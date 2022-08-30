import { ActionTypes } from '../action-types';
import { createAction, props } from '@ngrx/store';

export const sendToSsdAction = createAction(
  ActionTypes.SEND_TO_SSD,
  props<{ data: any }>()
);

export const sendToSsdActionSuccess = createAction(
  ActionTypes.SEND_TO_SSD_SUCCESS,
  props<{ response: any }>()
);

export const sendToSsdActionFailure = createAction(
  ActionTypes.SEND_TO_SSD_FAILURE,
  props<{ error: any }>()
);
