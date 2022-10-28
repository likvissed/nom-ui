import { getUsersAction } from './../actions/get-users.action';
import { addUserAction, addUserSuccessAction, addUserFailureAction } from '@store/user/actions/add-user.action';

import { MessageService } from 'primeng/api';

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { switchMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { UserService } from '../../services/user.service';

@Injectable()
export class AddUserEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private messageService: MessageService
  ) {}

  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUserAction),
      exhaustMap((value) => {
        return this.userService.addUser(value.data).pipe(
          tap((response: any ) => {
            this.messageService.add({ severity: 'success', summary: 'Успешно', detail: response.result });
          }),
          switchMap((response: any) => [
            addUserSuccessAction(response),
            getUsersAction()
          ]),

          catchError((errorResponse: HttpErrorResponse) => of(
            addUserFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );

}
