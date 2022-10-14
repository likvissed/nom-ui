import { GetArticlesResponseInterface } from './../../types/get-articles-response.interface';
import { ActionTypes } from '../action-types';
import { createAction, props } from '@ngrx/store';

export const getArticlesAction = createAction(
  ActionTypes.GET_ARTICLES
);

export const getArticlesSuccessAction = createAction(
  ActionTypes.GET_ARTICLES_SUCCESS,
  props<{ response: GetArticlesResponseInterface }>()
);

export const getArticlesFailureAction = createAction(
  ActionTypes.GET_ARTICLES_FAILURE,
  props<{ error: any }>()
);
