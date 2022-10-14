import { ArticleModule } from './article.module';

import { TestBed } from '@angular/core/testing';

describe('ArticleModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ArticleModule).toBeTruthy();
  });
});
