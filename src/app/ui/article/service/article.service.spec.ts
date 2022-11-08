import { GetArticlesResponseInterface } from './../types/get-articles-response.interface';

import { environment } from 'src/environments/environment';

import { TestBed } from '@angular/core/testing';

import { ARTICLE_STUB } from './../store/article.stub';
import { ArticleService } from './article.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ArticleService', () => {
  let service: ArticleService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ArticleService
      ]
    });

    service = TestBed.inject(ArticleService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  let apiUrl = `${environment.apiUrl}`;

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('#getArticles', () => {
    const articlesUrl = `${apiUrl}/articles_list`
    const data = {
      articles: [
        ARTICLE_STUB,
        ARTICLE_STUB
      ]
    };

    it('should return data', () => {
      service.getArticles()
        .subscribe((response: GetArticlesResponseInterface) => {
          expect(response).toEqual(data);
        })

      const req = httpTestingController.expectOne({method: 'GET', url: articlesUrl});

      req.flush(data);
    });

    it('should call http with the expected url', () => {
      service.getArticles()
        .subscribe((response: GetArticlesResponseInterface) => {
          expect(response.articles.length).toEqual(data.articles.length);
          expect(response).toBe(data);
        })

        const req = httpTestingController.expectOne({method: 'GET', url: articlesUrl});

        expect(req.request.method).toEqual('GET');
        expect(req.request.responseType).toEqual('json');
        expect(req.request.url).toEqual(articlesUrl);

        req.flush(data);
    });
  });
});
