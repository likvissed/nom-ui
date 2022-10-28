import { MessageService } from 'primeng/api';

import { addOrderAction, addOrderSuccessAction, addOrderFailureAction } from '@store/order/actions/add-order.action';
import { getOrdersAction } from '../actions/get-orders.action';

import { catchError, exhaustMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { OrderService } from '../../services/order.service';

@Injectable()
export class AddOrderEffect {
  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private messageService: MessageService
  ) {}

  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addOrderAction),
      exhaustMap((value) => {
        return this.orderService.addOrder(value.data).pipe(
          tap((response: any ) => {
            this.messageService.add({severity: 'success', summary: 'Успешно', detail: response.result });
          }),
          switchMap((response: any) => [
            addOrderSuccessAction(response),
            // TODO: Перенести getOrdersAction в OrderComponent.onSaveOrder()
            getOrdersAction(),
          ]),

          catchError((errorResponse: HttpErrorResponse) => of(
            addOrderFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );
}
