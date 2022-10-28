import { HttpErrorResponse } from '@angular/common/http';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { getUsersAction, getUsersSuccessAction, getUsersFailureAction } from '@store/user/actions/get-users.action';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { Injectable } from '@angular/core';

import { UserService } from '../../services/user.service';

@Injectable()
export class GetUsersEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsersAction),
      switchMap(() => {
        return this.userService.getUsers().pipe(
          map((response: any ) => {
            if (response) {
              response.users.map((user: any, index: number) => {
                let arrStr = user.deptnames.map((name: any) => name.deptname).join(', ');

                response.users[index]['arr_deptnames'] = arrStr;
              });
            }

            return response;
          }),
          map((response: any ) => {
            return getUsersSuccessAction({response});
          }),

          catchError((errorResponse: HttpErrorResponse) => of(
            getUsersFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );

}
