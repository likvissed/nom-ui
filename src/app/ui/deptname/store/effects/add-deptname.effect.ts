import { getDeptnamesAction } from './../actions/get-deptnames.action';
import { addDeptnameAction, addDeptnameSuccessAction, addDeptnameFailureAction } from './../actions/add-deptname.action';
import { DeptnameService } from './../../services/deptname.service';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { switchMap, map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AddDeptnameEffect {
  constructor(
    private actions$: Actions,
    private deptnameService: DeptnameService,
    private messageService: MessageService
  ) {}

  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addDeptnameAction),
      exhaustMap((value) => {
        return this.deptnameService.addDeptname(value.data).pipe(
          tap((response: any ) => {
            this.messageService.add({ severity: 'success', summary: 'Успешно', detail: response.result });
          }),
          switchMap((response: any) => [
            addDeptnameSuccessAction(response),
            getDeptnamesAction()
          ]),

          catchError((errorResponse: HttpErrorResponse) => of(
            addDeptnameFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );

}
