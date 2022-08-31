import { createBasedOnAction, createBasedOnActionSuccess, createBasedOnActionFailure } from './../actions/create-based-on.action';
import { NomenclatureService } from './../../services/nomenclature.service';

import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class CreateBasedOnEffect {
  constructor(
    private actions$: Actions,
    private nomenclatureService: NomenclatureService
  ) {}

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createBasedOnAction),
      switchMap((value) => {
        return this.nomenclatureService.createBasedOn(value.id).pipe(
          map((response: any ) => {
            return createBasedOnActionSuccess({ response: response });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            alert(errorResponse.error.error_description);

            return of(createBasedOnActionFailure({error: errorResponse.error.error_description}))
          })
        )
      })
    )
  );
}
