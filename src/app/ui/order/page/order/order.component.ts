import { selectAllOrders } from './../../store/selectors';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Table } from 'primeng/table';
import { getOrdersAction } from '../../store/actions/get-orders.action';
import { deleteOrderAction } from '../../store/actions/delete-order.action';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [
    ConfirmationService
  ]
})
export class OrderComponent implements OnInit {
  @ViewChild('dtable') table!: Table;
  orders$!: Observable<any>;

  constructor(
    private store: Store,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getOrdersAction());
    this.onLoadOrders();
  }

  onLoadOrders() {
    this.orders$ = this.store.pipe(select(selectAllOrders));
  }

  onDeleteOrder(id: number, name: string) {
    this.confirmationService.confirm({
      message: `Вы действительно хотите удалить приказ «‎${name}»?`,
      header: 'Подтвердите выбор',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Да',
      rejectLabel: 'Нет',
      accept: () => {
        this.store.dispatch(deleteOrderAction({id: id}));
      }
    });
  }

}
