import { DeleteOrderResponseInterface } from './../../types/delete-order-response.interface';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { deleteOrderAction, deleteOrderFailureAction, deleteOrderSuccessAction } from '../actions/delete-order.action';
import { OrderService } from '../../services/order.service';

@Injectable()
export class DeleteOrderEffect {
  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteOrderAction),
      switchMap((value) => {
        return this.orderService.deleteOrder(value.id).pipe(
          map((response: any ) => {
            alert(response.result);

            return deleteOrderSuccessAction(response.result);
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            alert(errorResponse.error.error_description);

            return of(deleteOrderFailureAction({error: errorResponse.error.error_description}))
          })
        )
      })
    )
  );
}
