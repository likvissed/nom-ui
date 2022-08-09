import { OrderServiceModule } from '../services/order.service.module';
import { SharedModule } from './../../shared/shared.module';
import { PrimengModule } from './../../../primeng.module';
import { GetOrdersEffect } from './../store/effects/get-orders.effect';
import { ORDER_FEATURE_KEY, orderReducer } from './../store/reducers';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './../page/order/order.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderService } from '../services/order.service';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    OrderServiceModule,

    StoreModule.forFeature(ORDER_FEATURE_KEY, orderReducer),
    EffectsModule.forFeature(
      [
        GetOrdersEffect
      ]
    ),

    PrimengModule,
    SharedModule
  ]
})
export class OrderModule { }
