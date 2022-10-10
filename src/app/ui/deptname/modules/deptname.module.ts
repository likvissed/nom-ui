import { DeleteDeptnameEffect } from './../store/effects/delete-deptname.effect';
import { UpdateDeptnameEffect } from './../store/effects/update-deptname.effect';
import { NewDeptnameComponent } from './../page/components/new-deptname/new-deptname.component';
import { AddDeptnameEffect } from './../store/effects/add-deptname.effect';
import { SharedModule } from './../../shared/shared.module';
import { DEPTNAME_FEATURE_KEY, deptnameReducer } from './../store/deptname-reducers';
import { GetDeptnamesffect } from './../store/effects/get-deptnames.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DeptnameServiceModule } from './../services/deptname.service.module';
import { DeptnameComponent } from './../page/deptname/deptname.component';
import { DeptnameRoutingModule } from './deptname-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../../primeng.module';

@NgModule({
  declarations: [
    DeptnameComponent,
    NewDeptnameComponent
  ],
  imports: [
    CommonModule,
    DeptnameRoutingModule,
    DeptnameServiceModule,
    ReactiveFormsModule,
    FormsModule,

    PrimengModule,
    SharedModule,

    StoreModule.forFeature(DEPTNAME_FEATURE_KEY, deptnameReducer),
    EffectsModule.forFeature(
      [
        GetDeptnamesffect,
        AddDeptnameEffect,
        UpdateDeptnameEffect,
        DeleteDeptnameEffect
      ]
    )
  ]
})

export class DeptnameModule {}
