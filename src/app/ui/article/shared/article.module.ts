import { SharedModule } from './../../shared/shared.module';
import { PrimengModule } from './../../../primeng.module';
import { GetArticlesEffect } from './../store/effects/get-articles.effect';
import { ArticleServiceModule } from './../service/article.service.module';
import { ArticleComponent } from './../page/components/article/article.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { articleReducer, ARTICLE_FEATURE_KEY } from '../store/reducers';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ArticleServiceModule,

    StoreModule.forFeature(ARTICLE_FEATURE_KEY, articleReducer),
    EffectsModule.forFeature(
      [
        GetArticlesEffect
      ]
    ),

    PrimengModule,
    SharedModule
  ]
})
export class ArticleModule { }
