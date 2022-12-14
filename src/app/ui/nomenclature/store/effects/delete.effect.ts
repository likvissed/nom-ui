import { getListAction } from '@store/nomenclature/actions/get-list.action';
import { deleteNomenclatureAction, deleteNomenclatureActionFailure, deleteNomenclatureActionSuccess } from '@store/nomenclature/actions/delete.action';

import { NomenclatureService } from './../../services/nomenclature.service';

import { MessageService } from 'primeng/api';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class DeleteEffect {
  constructor(
    private actions$: Actions,
    private nomenclatureService: NomenclatureService,
    private messageService: MessageService
  ) {}

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteNomenclatureAction),
      switchMap((value) => {
        return this.nomenclatureService.deleteNomenclature(value.id).pipe(
          map((response: any) => {
            this.messageService.add({severity: 'success', summary: 'Успешно', detail: response.result });
          }),
          switchMap((response: any) => [
            deleteNomenclatureActionSuccess(response),
            getListAction()
          ]),

          catchError((errorResponse: HttpErrorResponse) => of(
            deleteNomenclatureActionFailure({error: errorResponse.error})
          ))
        )
      })
    )
  );
}
