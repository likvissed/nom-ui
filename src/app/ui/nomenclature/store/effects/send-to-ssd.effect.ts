import { MessageService } from 'primeng/api';

import { sendToSsdAction, sendToSsdActionSuccess, sendToSsdActionFailure } from './../actions/send-to-ssd.action';

import { NomenclatureService } from './../../services/nomenclature.service';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class SendToSsdEffect {
  constructor(
    private actions$: Actions,
    private nomenclatureService: NomenclatureService,
    private messageService: MessageService
  ) {}

  send$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sendToSsdAction),
      switchMap((value) => {
        return this.nomenclatureService.sendDocumentToSsd(value.data).pipe(
          map((response: any ) => {
            this.messageService.add({severity: 'success', summary: 'Успешно', detail: response.result });

            return sendToSsdActionSuccess(response);
          }),

          catchError((errorResponse: HttpErrorResponse) => of(
            sendToSsdActionFailure({error: errorResponse.error})
          ))
        )
      })
    )
  );
}
