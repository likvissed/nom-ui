import { uploadFileAction, uploadFileSuccessAction, uploadFileFailureAction } from '@store/nomenclature/actions/upload-file.action';
import { NomenclatureStateInterface } from '../types/nomenclature-state.interface';

import { getListAction, getListActionSuccess, getListActionFailure } from './actions/get-list.action';
import { createBasedOnAction, createBasedOnActionSuccess, createBasedOnActionFailure } from './actions/create-based-on.action';
import { downloadNomenclatureAction, downloadNomenclatureActionSuccess, downloadNomenclatureActionFailure } from './actions/download.action';
import { getCurrentAction, getCurrentActionSuccess, getCurrentActionFailure } from './actions/get-current.action';
import { sendToSsdAction, sendToSsdActionSuccess, sendToSsdActionFailure } from './actions/send-to-ssd.action';
import { createTemplateAction, createTemplateSuccessAction, createTemplateFailureAction } from './actions/create-template.action';
import { deleteNomenclatureAction, deleteNomenclatureActionFailure, deleteNomenclatureActionSuccess } from './actions/delete.action';

import { Action, createReducer, on } from '@ngrx/store';

export const NOMENCLATURE_FEATURE_KEY = 'nomenclature';

const initialState: NomenclatureStateInterface = {
  isSubmitting: false,
  response: null,
  errors: null,
  nomenclatures: null,
  filters: null,
  file: null,
  send_ssd: false,
  fileUpload: false
}

const reducer = createReducer(
  initialState,

  on(createTemplateAction, (state): NomenclatureStateInterface => ({
    ...state,
    isSubmitting: true,
    file: null
  })),
  on(createTemplateSuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    file: action.response
  })),
  on(createTemplateFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error,
    file: null
  })),

  on(sendToSsdAction, (state): NomenclatureStateInterface => ({
    ...state,
    isSubmitting: true,
    send_ssd: false
  })),
  on(sendToSsdActionSuccess, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    send_ssd: true
  })),
  on(sendToSsdActionFailure, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error,
    send_ssd: false
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
  })),

  on(uploadFileAction, (state): NomenclatureStateInterface => ({
    ...state,
    isSubmitting: true,
    fileUpload: false
  })),
  on(uploadFileSuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    fileUpload: true
  })),
  on(uploadFileFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error,
    fileUpload: false
  }))
)

export function nomenclatureReducer(state: NomenclatureStateInterface, action: Action) {
  return reducer(state, action)
}
