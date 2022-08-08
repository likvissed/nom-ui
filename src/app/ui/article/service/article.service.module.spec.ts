import { ArticleServiceModule } from './article.service.module';
import { TestBed } from '@angular/core/testing';

describe('ArticleServiceModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleServiceModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ArticleServiceModule).toBeTruthy();
  });
});
