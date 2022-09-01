import { getCurrentAction, getCurrentActionSuccess, getCurrentActionFailure } from './../actions/get-current.action';
import { NomenclatureService } from './../../services/nomenclature.service';

import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class GetCurrentEffect {
  constructor(
    private actions$: Actions,
    private nomenclatureService: NomenclatureService
  ) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentAction),
      switchMap(() => {
        return this.nomenclatureService.getCurrentNom().pipe(
          map((response: any ) => {
            return getCurrentActionSuccess({response: response});
          }),

          catchError((errorResponse: HttpErrorResponse) => of(
            getCurrentActionFailure({error: errorResponse.error})
          ))
        )
      })
    )
  );
}
