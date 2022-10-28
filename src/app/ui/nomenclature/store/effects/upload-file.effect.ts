import { getListAction } from '@store/nomenclature/actions/get-list.action';
import { uploadFileAction, uploadFileSuccessAction, uploadFileFailureAction } from '@store/nomenclature/actions/upload-file.action';
import { MessageService } from 'primeng/api';


import { NomenclatureService } from './../../services/nomenclature.service';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class UploadFileEffect {
  constructor(
    private actions$: Actions,
    private nomenclatureService: NomenclatureService,
    private messageService: MessageService
  ) {}

  upload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(uploadFileAction),
      switchMap((value) => {
        return this.nomenclatureService.uploadScan(value.data).pipe(
          map((response: any) => {
            this.messageService.add({severity: 'success', summary: 'Успешно', detail: response.result });
          }),
          switchMap((response: any) => [
            uploadFileSuccessAction(response),
            getListAction()
          ]),

          catchError((errorResponse: HttpErrorResponse) => of(
            uploadFileFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );
}
