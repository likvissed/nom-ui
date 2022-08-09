import { selectAllOrders } from './../../store/selectors';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Table } from 'primeng/table';
import { getOrdersAction } from '../../store/actions/get-orders.action';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild('dtable') table!: Table;
  orders$!: Observable<any>;

  constructor(
    private store: Store
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

}
