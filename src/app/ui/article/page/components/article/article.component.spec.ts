import { ArticleService } from './../../../service/article.service';
import { ARTICLES_STUB } from './../../../store/article.stub';
import { GetArticlesEffect } from './../../../store/effects/get-articles.effect';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArticleComponent } from './article.component';
import { articleReducer, ARTICLE_FEATURE_KEY } from '../../../store/reducers';
import { of, ReplaySubject, Observable, Subject } from 'rxjs';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let service: ArticleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(ARTICLE_FEATURE_KEY, articleReducer)
      ],
      providers: [
        ArticleService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should return articles', () => {
  // });
});
