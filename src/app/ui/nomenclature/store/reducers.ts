import { downloadNomenclatureAction, downloadNomenclatureActionSuccess, downloadNomenclatureActionFailure } from './actions/download.action';
import { getListAction, getListActionSuccess, getListActionFailure } from './actions/get-list.action';
import { sendToSsdAction, sendToSsdActionSuccess, sendToSsdActionFailure } from './actions/send-to-ssd.action';
import { NomenclatureStateInterface } from './../types/nomenclature-state.interface';
import { createTemplateAction, createTemplateSuccessAction, createTemplateFailureAction } from './actions/create-template.action';

import { Action, createReducer, on } from '@ngrx/store';

export const NOMENCLATURE_FEATURE_KEY = 'nomenclature';

const initialState: NomenclatureStateInterface = {
  isSubmitting: false,
  response: null,
  errors: null,
  nomenclatures: null,
  statuses: null
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
  })),

  on(getListAction, (state): NomenclatureStateInterface => ({
    ...state,
    isSubmitting: true,
    nomenclatures: null,
    statuses: null
  })),
  on(getListActionSuccess, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    nomenclatures: action.response.nomenclatures,
    statuses: action.response.data_filters.state_types
  })),
  on(getListActionFailure, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error,
    nomenclatures: null,
    statuses: null
  })),

  on(downloadNomenclatureAction, (state): NomenclatureStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(downloadNomenclatureActionSuccess, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response
  })),
  on(downloadNomenclatureActionFailure, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error
  }))

)

export function nomenclatureReducer(state: NomenclatureStateInterface, action: Action) {
  return reducer(state, action)
}
