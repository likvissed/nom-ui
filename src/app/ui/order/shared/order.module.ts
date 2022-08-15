import { ModalSelectArticleComponent } from '../../article/page/components/modal-select-article/modal-select-article.component';
import { NewOrderComponent } from './../page/components/new-order/new-order.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddOrderEffect } from './../store/effects/add-order.effect';
import { DeleteOrderEffect } from './../store/effects/delete-order.effect';
import { OrderServiceModule } from '../services/order.service.module';
import { SharedModule } from './../../shared/shared.module';
import { PrimengModule } from './../../../primeng.module';
import { GetOrdersEffect } from './../store/effects/get-orders.effect';
import { ORDER_FEATURE_KEY, orderReducer } from './../store/reducers';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './../page/order/order.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    OrderComponent,
    NewOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    OrderServiceModule,

    StoreModule.forFeature(ORDER_FEATURE_KEY, orderReducer),
    EffectsModule.forFeature(
      [
        GetOrdersEffect,
        DeleteOrderEffect,
        AddOrderEffect
      ]
    ),

    PrimengModule,
    SharedModule,

    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ModalSelectArticleComponent
  ]
})
export class OrderModule { }
