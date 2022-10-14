import { MessageService } from 'primeng/api';

import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { deleteOrderAction, deleteOrderFailureAction, deleteOrderSuccessAction } from '../actions/delete-order.action';
import { getOrdersAction } from '../actions/get-orders.action';

import { OrderService } from '../../services/order.service';

@Injectable()
export class DeleteOrderEffect {
  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private messageService: MessageService
  ) {}

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteOrderAction),
      exhaustMap((value) => {
        return this.orderService.deleteOrder(value.id).pipe(
          tap((response: any ) => {
            this.messageService.add({severity: 'success', summary: 'Успешно', detail: response.result });
          }),
          switchMap((response: any) => [
            deleteOrderSuccessAction(response),
            // TODO: Перенести getOrdersAction в OrderComponent.onDeleteOrder()
            getOrdersAction(),
          ]),

          catchError((errorResponse: HttpErrorResponse) => of(
            deleteOrderFailureAction({error: errorResponse.error})
          ))
        )
      })
    )
  );
}
