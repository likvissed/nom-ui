import { getDeptnamesAction, getDeptnamesSuccessAction, getDeptnamesFailureAction } from '@store/deptname/actions/get-deptnames.action';

import { DeptnameService } from './../../services/deptname.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";

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
            if (response) {
              response.deptnames.map((deptname: any, index: number) => {
                let arrStr = deptname.users.map((user: any) => user.fio).join(', ');

                response.deptnames[index]['fio_users'] = arrStr;
              });
            }

            return response;
          }),
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
