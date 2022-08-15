import { addOrderAction, addOrderSuccessAction, addOrderFailureAction } from './../actions/add-order.action';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { OrderService } from '../../services/order.service';
import { getOrdersAction } from '../actions/get-orders.action';

@Injectable()
export class AddOrderEffect {
  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}

  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addOrderAction),
      exhaustMap((value) => {
        return this.orderService.addOrder(value.data).pipe(
          tap((response: any ) => {
            alert(response.result);
          }),
          switchMap((response: any) => [
            addOrderSuccessAction(response),
            // TODO: Перенести getOrdersAction в OrderComponent.onSaveOrder()
            getOrdersAction(),
          ]),

          catchError((errorResponse: HttpErrorResponse) => {
            alert(errorResponse.error.error_description);

            return of(addOrderFailureAction({error: errorResponse.error.error_description}))
          })
        )
      })
    )
  );
}
