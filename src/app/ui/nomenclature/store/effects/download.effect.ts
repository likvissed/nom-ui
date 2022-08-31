import { downloadNomenclatureAction, downloadNomenclatureActionSuccess, downloadNomenclatureActionFailure } from './../actions/download.action';
import { NomenclatureService } from './../../services/nomenclature.service';

import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class DownloadEffect {
  constructor(
    private actions$: Actions,
    private nomenclatureService: NomenclatureService
  ) {}

  download$ = createEffect(() =>
    this.actions$.pipe(
      ofType(downloadNomenclatureAction),
      switchMap((value) => {
        return this.nomenclatureService.downloadNomenclature(value.data).pipe(
          map((response: any ) => {
            alert(response.result);

            return downloadNomenclatureActionSuccess(response);
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            alert(errorResponse.error.error_description);

            return of(downloadNomenclatureActionFailure({error: errorResponse.error.error_description}))
          })
        )
      })
    )
  );
}
