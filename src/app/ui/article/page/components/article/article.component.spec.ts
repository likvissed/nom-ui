import { ArticleService } from './../../../service/article.service';

import { StoreModule } from '@ngrx/store';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';

import { articleReducer, ARTICLE_FEATURE_KEY } from '@store/article/article-reducers';

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
