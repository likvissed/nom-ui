import { GetArticlesResponseInterface } from './../../types/get-articles-response.interface';
import { getArticlesAction, getArticlesSuccessAction, getArticlesFailureAction } from '@store/article/actions/get-articles.action';
import { ArticleService } from './../../service/article.service';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class GetArticlesEffect {
  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticlesAction),
      switchMap(() => {
        return this.articleService.getArticles().pipe(
          map((response: GetArticlesResponseInterface) => {
            return getArticlesSuccessAction({response});
          }),

          catchError((errorResponse: HttpErrorResponse) => of(
            getArticlesFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );
}
