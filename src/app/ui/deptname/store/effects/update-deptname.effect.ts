import { updateDeptnameAction, updateDeptnameSuccessAction, updateDeptnameFailureAction } from '@store/deptname/actions/update-deptname.action';
import { getDeptnamesAction } from '@store/deptname/actions/get-deptnames.action';

import { DeptnameService } from './../../services/deptname.service';

import { MessageService } from 'primeng/api';

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { switchMap, map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";

@Injectable()
export class UpdateDeptnameEffect {
  constructor(
    private actions$: Actions,
    private deptnameService: DeptnameService,
    private messageService: MessageService
  ) {}

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateDeptnameAction),
      exhaustMap((value) => {
        return this.deptnameService.updateDeptname(value.data).pipe(
          tap((response: any ) => {
            this.messageService.add({ severity: 'success', summary: 'Успешно', detail: response.result });
          }),
          switchMap((response: any) => [
            updateDeptnameSuccessAction(response),
            getDeptnamesAction()
          ]),

          catchError((errorResponse: HttpErrorResponse) => of(
            updateDeptnameFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );

}
