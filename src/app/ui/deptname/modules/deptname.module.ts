import { DeleteDeptnameEffect } from './../store/effects/delete-deptname.effect';
import { UpdateDeptnameEffect } from './../store/effects/update-deptname.effect';
import { GetDeptnamesffect } from './../store/effects/get-deptnames.effect';
import { AddDeptnameEffect } from './../store/effects/add-deptname.effect';

import { NewDeptnameComponent } from './../page/components/new-deptname/new-deptname.component';
import { DeptnameComponent } from './../page/deptname/deptname.component';
import { DEPTNAME_FEATURE_KEY, deptnameReducer } from './../store/deptname-reducers';

import { DeptnameServiceModule } from './../services/deptname.service.module';
import { DeptnameRoutingModule } from './deptname-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrimengModule } from '../../../primeng.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

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
