import { getDeptnamesAction, getDeptnamesSuccessAction, getDeptnamesFailureAction } from './../actions/get-deptnames.action';
import { DeptnameService } from './../../services/deptname.service';
import { HttpErrorResponse } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class GetDeptnamesffect {
  constructor(
    private actions$: Actions,
    private deptnameService: DeptnameService
  ) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDeptnamesAction),
      switchMap(() => {
        return this.deptnameService.getDeptnames().pipe(
          map((response: any ) => {
            return getDeptnamesSuccessAction({response});
          }),

          catchError((errorResponse: HttpErrorResponse) => of(
            getDeptnamesFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );

}
