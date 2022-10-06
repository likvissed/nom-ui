import { getDeptnamesAction } from './../actions/get-deptnames.action';
import { DeptnameService } from './../../services/deptname.service';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { switchMap, map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { deleteDeptnameAction, deleteDeptnameFailureAction, deleteDeptnameSuccessAction } from '../actions/delete-deptname.action';

@Injectable()
export class DeleteDeptnameEffect {
  constructor(
    private actions$: Actions,
    private deptnameService: DeptnameService,
    private messageService: MessageService
  ) {}

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteDeptnameAction),
      exhaustMap((value) => {
        return this.deptnameService.deleteDeptname(value.id).pipe(
          tap((response: any ) => {
            this.messageService.add({ severity: 'success', summary: 'Успешно', detail: response.result });
          }),
          switchMap((response: any) => [
            deleteDeptnameSuccessAction(response),
            getDeptnamesAction()
          ]),

          catchError((errorResponse: HttpErrorResponse) => of(
            deleteDeptnameFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );

}
