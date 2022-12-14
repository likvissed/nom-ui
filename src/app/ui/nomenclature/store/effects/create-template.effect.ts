import { NomenclatureService } from './../../services/nomenclature.service';

import { createTemplateAction, createTemplateSuccessAction, createTemplateFailureAction } from '@store/nomenclature/actions/create-template.action';

import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class CreateTemplateEffect {
  constructor(
    private actions$: Actions,
    private nomenclatureService: NomenclatureService
  ) {}

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTemplateAction),
      switchMap((value) => {
        return this.nomenclatureService.createTemplateDocument(value.data).pipe(
          map((response: any ) => {
            return createTemplateSuccessAction({ response: response });
          }),

          catchError((errorResponse: HttpErrorResponse) => of(
            createTemplateFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );
}
