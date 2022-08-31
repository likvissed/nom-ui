import { ActionTypes } from '../action-types';
import { createAction, props } from '@ngrx/store';

export const createBasedOnAction = createAction(
  ActionTypes.CREATE_BASED_ON,
  props<{ id: number }>()
);

export const createBasedOnActionSuccess = createAction(
  ActionTypes.CREATE_BASED_ON_SUCCESS,
  props<{ response: any }>()
);

export const createBasedOnActionFailure = createAction(
  ActionTypes.CREATE_BASED_ON_FAILURE,
  props<{ error: any }>()
);
