import { getUsersAction, getUsersFailureAction, getUsersSuccessAction } from './actions/get-users.action';
import { UserStateInterface } from './../types/user-state.interface';
import { Action, createReducer, on } from '@ngrx/store';

export const USER_FEATURE_KEY = 'user';

const initialState: UserStateInterface = {
  isSubmitting: false,
  response: null,
  errors: null,
  users: null,
  filters: null
}

const reducer = createReducer(
  initialState,

  on(getUsersAction, (state): UserStateInterface => ({
    ...state,
    isSubmitting: true,
    response: null,
    errors: null,
    users: null,
    filters: null
  })),
  on(getUsersSuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    users: action.response.users,
    filters: action.response.filters
  })),
  on(getUsersFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    users: null,
    errors: action.error,
    filters: null
  }))
)

export function userReducer(state: UserStateInterface, action: Action) {
  return reducer(state, action)
}
