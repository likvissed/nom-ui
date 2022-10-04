import { MessageService } from 'primeng/api';
import { getUsersAction } from './../actions/get-users.action';
import { HttpErrorResponse } from '@angular/common/http';
import { switchMap, map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';
import { deleteUserAction, deleteUserFailureAction, deleteUserSuccessAction } from '../actions/delete-user.action';

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
