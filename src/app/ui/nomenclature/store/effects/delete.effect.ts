import { deleteNomenclatureAction, deleteNomenclatureActionFailure, deleteNomenclatureActionSuccess } from '../actions/delete.action';
import { NomenclatureService } from './../../services/nomenclature.service';

import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class DeleteEffect {
  constructor(
    private actions$: Actions,
    private nomenclatureService: NomenclatureService
  ) {}

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteNomenclatureAction),
      switchMap((value) => {
        return this.nomenclatureService.deleteNomenclature(value.id).pipe(
          map((response: any ) => {
            alert(response.result);

            return deleteNomenclatureActionSuccess(response);
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            alert(errorResponse.error.error_description);

            return of(deleteNomenclatureActionFailure({error: errorResponse.error.error_description}))
          })
        )
      })
    )
  );
}
