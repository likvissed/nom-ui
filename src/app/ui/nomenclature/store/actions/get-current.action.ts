import { ActionTypes } from './../action-types';
import { createAction, props } from '@ngrx/store';

export const getCurrentAction = createAction(
  ActionTypes.GET_CURRENT,
  props<{ id: any }>()
);

export const getCurrentActionSuccess = createAction(
  ActionTypes.GET_CURRENT_SUCCESS,
  props<{ response: any }>()
);

export const getCurrentActionFailure = createAction(
  ActionTypes.GET_CURRENT_FAILURE,
  props<{ error: any }>()
);
