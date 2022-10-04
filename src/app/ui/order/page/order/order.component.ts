import { DurationTypeInterface } from './../../types/duration-type.interface';
import { NewOrderComponent } from './../components/new-order/new-order.component';
import { selectAllOrders, selectAllDurationTypes } from './../../store/selectors';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Table } from 'primeng/table';
import { getOrdersAction } from '../../store/actions/get-orders.action';
import { deleteOrderAction } from '../../store/actions/delete-order.action';

import { ConfirmationService } from 'primeng/api';

import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [
    ConfirmationService, DialogService
  ]
})
export class OrderComponent implements OnInit {
  @ViewChild('dtable') table!: Table;
  orders$!: Observable<any>;
  durationTypes = [];

  constructor(
    private store: Store,
    private confirmationService: ConfirmationService,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.onInitializeValues();
  }

  onInitializeValues() {
    this.store.dispatch(getOrdersAction());

    this.onLoadOrders();
    this.onLoadDurationTypes();
  }

  onLoadOrders() {
    this.orders$ = this.store.pipe(select(selectAllOrders));
  }

  onLoadDurationTypes() {
    this.store.pipe(select(selectAllDurationTypes))
      .subscribe((durationValues: any) => {
        if (durationValues) {
          this.durationTypes = durationValues;
        }
      });
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

  onNewOrder() {
    const ref = this.dialogService.open(NewOrderComponent, {
      header: 'Добавление приказа',
      width: '50%',
      data: {
        durationTypes: this.durationTypes
      }
    });
  }

}
