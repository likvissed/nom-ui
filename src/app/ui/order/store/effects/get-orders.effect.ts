import { GetOrdersResponseInterface } from './../../types/get-orders-response.interface';

import { getOrdersAction, getOrdersSuccessAction, getOrdersFailureAction } from '@store/order/actions/get-orders.action';

import { OrderService } from '../../services/order.service';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class GetOrdersEffect {
  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOrdersAction),
      switchMap(() => {
        return this.orderService.getOrders().pipe(
          map((response: any ) => {
            if (response) {
              response.orders.map((el: any) => {
                let srt_date = el['date_order'].split('.').reverse().join('-');

                el['date'] = new Date(srt_date);
              });
            }

            return response;
          }),
          map((response: GetOrdersResponseInterface ) => {
            return getOrdersSuccessAction({response});
          }),

          catchError((errorResponse: HttpErrorResponse) => of(
            getOrdersFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );
}
