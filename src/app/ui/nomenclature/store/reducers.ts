import { getCurrentAction, getCurrentActionSuccess, getCurrentActionFailure } from './actions/get-current.action';
import { createBasedOnAction, createBasedOnActionSuccess, createBasedOnActionFailure } from './actions/create-based-on.action';
import { downloadNomenclatureAction, downloadNomenclatureActionSuccess, downloadNomenclatureActionFailure } from './actions/download.action';
import { getListAction, getListActionSuccess, getListActionFailure } from './actions/get-list.action';
import { sendToSsdAction, sendToSsdActionSuccess, sendToSsdActionFailure } from './actions/send-to-ssd.action';
import { NomenclatureStateInterface } from './../types/nomenclature-state.interface';
import { createTemplateAction, createTemplateSuccessAction, createTemplateFailureAction } from './actions/create-template.action';

import { Action, createReducer, on } from '@ngrx/store';
import { deleteNomenclatureAction, deleteNomenclatureActionFailure, deleteNomenclatureActionSuccess } from './actions/delete.action';

export const NOMENCLATURE_FEATURE_KEY = 'nomenclature';

const initialState: NomenclatureStateInterface = {
  isSubmitting: false,
  response: null,
  errors: null,
  nomenclatures: null,
  filters: null
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
    filters: null
  })),
  on(getListActionSuccess, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    nomenclatures: action.response.nomenclatures,
    filters: action.response.data_filters
  })),
  on(getListActionFailure, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error,
    nomenclatures: null,
    filters: null
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
  })),

  on(deleteNomenclatureAction, (state): NomenclatureStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(deleteNomenclatureActionSuccess, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response
  })),
  on(deleteNomenclatureActionFailure, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error
  })),

  on(createBasedOnAction, (state): NomenclatureStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(createBasedOnActionSuccess, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response
  })),
  on(createBasedOnActionFailure, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error
  })),

  on(getCurrentAction, (state): NomenclatureStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(getCurrentActionSuccess, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response
  })),
  on(getCurrentActionFailure, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error
  }))

)

export function nomenclatureReducer(state: NomenclatureStateInterface, action: Action) {
  return reducer(state, action)
}
