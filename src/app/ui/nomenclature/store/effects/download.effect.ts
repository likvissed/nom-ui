import { MessageService } from 'primeng/api';
import { downloadNomenclatureAction, downloadNomenclatureActionSuccess, downloadNomenclatureActionFailure } from './../actions/download.action';
import { NomenclatureService } from './../../services/nomenclature.service';

import { catchError, exhaustMap, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class DownloadEffect {
  constructor(
    private actions$: Actions,
    private nomenclatureService: NomenclatureService,
    private messageService: MessageService
  ) {}

  download$ = createEffect(() =>
    this.actions$.pipe(
      ofType(downloadNomenclatureAction),
      switchMap((value) => {
        return this.nomenclatureService.downloadNomenclature(value.data).pipe(
          map((response: any ) => {
            let file = new Blob([response], { type: response.type });
            let fileURL = URL.createObjectURL(file);

            let fileLink = document.createElement('a');
            fileLink.href = fileURL;

            let nameFile = 'Номенклатура_дел';
            fileLink.download = `${nameFile}`;

            fileLink.click();

            this.messageService.add({severity: 'success', summary: 'Загрузка файла...' });

            return downloadNomenclatureActionSuccess({ response: response });
          }),

          catchError((errorResponse: HttpErrorResponse) => of(
            downloadNomenclatureActionFailure({error: errorResponse.error})
          ))
        )
      })
    ), { dispatch: false }
  );
}
