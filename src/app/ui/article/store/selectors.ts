import { ArticleStateInterface } from './../types/article-state.interface';

import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ARTICLE_FEATURE_KEY } from "./reducers";

export const articleFeatureSelector = createFeatureSelector<ArticleStateInterface>(ARTICLE_FEATURE_KEY);

export const selectAllArticles = createSelector(articleFeatureSelector, (state: any) => state.articles);
