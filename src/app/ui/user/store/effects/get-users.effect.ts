import { HttpErrorResponse } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { getUsersAction, getUsersSuccessAction, getUsersFailureAction } from './../actions/get-users.action';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

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
