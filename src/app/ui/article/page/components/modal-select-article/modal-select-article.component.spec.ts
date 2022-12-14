import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { StoreModule } from '@ngrx/store';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSelectArticleComponent } from './modal-select-article.component';

import { articleReducer, ARTICLE_FEATURE_KEY } from '@store/article/article-reducers';

describe('ModalSelectArticleComponent', () => {
  let component: ModalSelectArticleComponent;
  let fixture: ComponentFixture<ModalSelectArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSelectArticleComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(ARTICLE_FEATURE_KEY, articleReducer)
      ],
      providers: [
        DynamicDialogRef,
        DynamicDialogConfig,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSelectArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
