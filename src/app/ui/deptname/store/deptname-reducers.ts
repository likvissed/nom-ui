import { DeptnameStateInterface } from './../types/deptname.state.interface';

import { updateDeptnameAction, updateDeptnameSuccessAction, updateDeptnameFailureAction } from '@store/deptname/actions/update-deptname.action';
import { addDeptnameAction, addDeptnameSuccessAction, addDeptnameFailureAction } from '@store/deptname/actions/add-deptname.action';
import { getDeptnamesAction, getDeptnamesSuccessAction, getDeptnamesFailureAction } from '@store/deptname/actions/get-deptnames.action';
import { deleteDeptnameAction, deleteDeptnameFailureAction, deleteDeptnameSuccessAction } from '@store/deptname/actions/delete-deptname.action';

import { Action, createReducer, on } from '@ngrx/store';

export const DEPTNAME_FEATURE_KEY = 'deptname';

const initialState: DeptnameStateInterface = {
  isSubmitting: false,
  response: null,
  errors: null,
  deptnames: null,
  filters: null,
  flag: false
}

const reducer = createReducer(
  initialState,

  on(getDeptnamesAction, (state): DeptnameStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(getDeptnamesSuccessAction, (state, action): DeptnameStateInterface => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    deptnames: action.response.deptnames
  })),
  on(getDeptnamesFailureAction, (state, action): DeptnameStateInterface => ({
    ...state,
    isSubmitting: false,
    deptnames: null,
    errors: action.error
  })),

  on(addDeptnameAction, (state): DeptnameStateInterface => ({
    ...state,
    isSubmitting: true,
    flag: false
  })),
  on(addDeptnameSuccessAction, (state, action): DeptnameStateInterface => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    flag: true
  })),
  on(addDeptnameFailureAction, (state, action): DeptnameStateInterface => ({
    ...state,
    isSubmitting: false,
    errors: action.error,
    flag: false
  })),

  on(updateDeptnameAction, (state): DeptnameStateInterface => ({
    ...state,
    isSubmitting: true,
    flag: false
  })),
  on(updateDeptnameSuccessAction, (state, action): DeptnameStateInterface => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    flag: true
  })),
  on(updateDeptnameFailureAction, (state, action): DeptnameStateInterface => ({
    ...state,
    isSubmitting: false,
    errors: action.error,
    flag: false
  })),

  on(deleteDeptnameAction, (state): DeptnameStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(deleteDeptnameSuccessAction, (state, action): DeptnameStateInterface => ({
    ...state,
    isSubmitting: false,
    response: action.response
  })),
  on(deleteDeptnameFailureAction, (state, action): DeptnameStateInterface => ({
    ...state,
    isSubmitting: false,
    errors: action.error
  }))
)

export function deptnameReducer(state: DeptnameStateInterface, action: Action) {
  return reducer(state, action)
}
