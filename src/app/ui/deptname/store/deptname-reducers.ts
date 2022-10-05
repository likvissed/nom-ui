import { getDeptnamesAction, getDeptnamesSuccessAction, getDeptnamesFailureAction } from './actions/get-deptnames.action';
import { DeptnameStateInterface } from './deptname.stub';
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
  }))
)

export function deptnameReducer(state: DeptnameStateInterface, action: Action) {
  return reducer(state, action)
}
