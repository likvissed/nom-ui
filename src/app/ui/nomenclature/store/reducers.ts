import { sendToSsdAction, sendToSsdActionSuccess, sendToSsdActionFailure } from './actions/send-to-ssd.action';
import { NomenclatureStateInterface } from './../types/nomenclature-state.interface';
import { createTemplateAction, createTemplateSuccessAction, createTemplateFailureAction } from './actions/create-template.action';

import { Action, createReducer, on } from '@ngrx/store';

export const NOMENCLATURE_FEATURE_KEY = 'nomenclature';

const initialState: NomenclatureStateInterface = {
  isSubmitting: false,
  response: null,
  errors: null
}

const reducer = createReducer(
  initialState,

  on(createTemplateAction, (state): NomenclatureStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(createTemplateSuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response
  })),
  on(createTemplateFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error
  })),

  on(sendToSsdAction, (state): NomenclatureStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(sendToSsdActionSuccess, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response
  })),
  on(sendToSsdActionFailure, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error
  }))

)

export function nomenclatureReducer(state: NomenclatureStateInterface, action: Action) {
  return reducer(state, action)
}
