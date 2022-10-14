import { SharedModule } from './../../shared/shared.module';
import { UserServiceModule } from './../services/user.service.module';
import { UserRoutingModule } from './user-routing.module';

import { DeleteUserEffect } from './../store/effects/delete-user.effect';
import { UpdateUserEffect } from './../store/effects/update-user.effect';
import { GetUsersEffect } from './../store/effects/get-users.effect';
import { AddUserEffect } from '../store/effects/add-user.effect';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewUserComponent } from './../page/components/new-user/new-user.component';
import { UserComponent } from '../page/user/user.component';

import { USER_FEATURE_KEY, userReducer } from './../store/user-reducers';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PrimengModule } from '../../../primeng.module';

@NgModule({
  declarations: [
    UserComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserServiceModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,
    PrimengModule,

    StoreModule.forFeature(USER_FEATURE_KEY, userReducer),
    EffectsModule.forFeature(
      [
        GetUsersEffect,
        AddUserEffect,
        UpdateUserEffect,
        DeleteUserEffect
      ]
    )
  ]
})
export class UserModule { }
