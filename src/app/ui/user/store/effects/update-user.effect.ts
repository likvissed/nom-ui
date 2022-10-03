import { MessageService } from 'primeng/api';
import { getUsersAction } from './../actions/get-users.action';
import { updateUserAction, updateUserSuccessAction, updateUserFailureAction } from './../actions/update-user.action';
import { HttpErrorResponse } from '@angular/common/http';
import { switchMap, map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UpdateUserEffect {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private messageService: MessageService
  ) {}


  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserAction),
      exhaustMap((value) => {
        return this.userService.updateUser(value.data).pipe(
          tap((response: any ) => {
            this.messageService.add({ severity: 'success', summary: 'Успешно', detail: response.result });
          }),
          switchMap((response: any) => [
            updateUserSuccessAction({response}),
            getUsersAction()
          ]),

          catchError((errorResponse: HttpErrorResponse) => of(
            updateUserFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );

}
