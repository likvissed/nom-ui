import { MessageService } from 'primeng/api';

import { getUsersAction } from './../actions/get-users.action';
import { deleteUserAction, deleteUserFailureAction, deleteUserSuccessAction } from '../actions/delete-user.action';

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { switchMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { UserService } from '../../services/user.service';

@Injectable()
export class DeleteUserEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private messageService: MessageService
  ) {}


  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUserAction),
      exhaustMap((value) => {
        return this.userService.deleteUser(value.id).pipe(
          tap((response: any ) => {
            this.messageService.add({ severity: 'success', summary: 'Успешно', detail: response.result });
          }),
          switchMap((response: any) => [
            deleteUserSuccessAction({response}),
            getUsersAction()
          ]),

          catchError((errorResponse: HttpErrorResponse) => of(
            deleteUserFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );

}
