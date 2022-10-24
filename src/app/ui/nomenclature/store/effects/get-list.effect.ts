import { getListAction, getListActionSuccess, getListActionFailure } from './../actions/get-list.action';

import { NomenclatureService } from './../../services/nomenclature.service';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class GetListEffect {
  constructor(
    private actions$: Actions,
    private nomenclatureService: NomenclatureService
  ) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getListAction),
      switchMap(() => {
        return this.nomenclatureService.getListNomenclatures().pipe(
          map((response: any ) => {
            return getListActionSuccess({ response: response });
          }),

          catchError((errorResponse: HttpErrorResponse) => of(
            getListActionFailure({error: errorResponse.error})
          ))
        )
      })
    )
  );
}
