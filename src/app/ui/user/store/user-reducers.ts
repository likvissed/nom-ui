import { updateUserAction, updateUserSuccessAction, updateUserFailureAction } from './actions/update-user.action';
import { addUserAction, addUserSuccessAction, addUserFailureAction } from './actions/add-user.action';
import { getUsersAction, getUsersFailureAction, getUsersSuccessAction } from './actions/get-users.action';
import { UserStateInterface } from './../types/user-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { deleteUserAction, deleteUserFailureAction, deleteUserSuccessAction } from './actions/delete-user.action';

export const USER_FEATURE_KEY = 'user';

const initialState: UserStateInterface = {
  isSubmitting: false,
  response: null,
  errors: null,
  users: null,
  filters: null,
  flag: false
}

const reducer = createReducer(
  initialState,

  on(getUsersAction, (state): UserStateInterface => ({
    ...state,
    isSubmitting: true
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
  })),

  on(addUserAction, (state): UserStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(addUserSuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    flag: true
  })),
  on(addUserFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error,
    flag: false
  })),

  on(updateUserAction, (state): UserStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(updateUserSuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    flag: true
  })),
  on(updateUserFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error,
    flag: false
  })),

  on(deleteUserAction, (state): UserStateInterface => ({
    ...state,
    isSubmitting: true
  })),
  on(deleteUserSuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response
  })),
  on(deleteUserFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error
  }))
)

export function userReducer(state: UserStateInterface, action: Action) {
  return reducer(state, action)
}
