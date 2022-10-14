import { getArticlesAction, getArticlesFailureAction, getArticlesSuccessAction } from './actions/get-articles.action';
import { ArticleStateInterface } from './../types/article-state.interface';
import { Action, createReducer, on } from '@ngrx/store';

export const ARTICLE_FEATURE_KEY = 'article';

const initialState: ArticleStateInterface = {
  isSubmitting: false,
  response: null,
  articles: null,
  errors: null
}

const reducer = createReducer(
  initialState,

  on(getArticlesAction, (state): ArticleStateInterface => ({
    ...state,
    isSubmitting: true,
    articles: null
  })),
  on(getArticlesSuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    articles: action.response.articles
  })),
  on(getArticlesFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    errors: action.error
  }))
)

export function articleReducer(state: ArticleStateInterface, action: Action) {
  return reducer(state, action)
}
