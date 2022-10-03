import { ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './../page/components/new-user/new-user.component';
import { GetUsersEffect } from './../store/effects/get-users.effect';
import { EffectsModule } from '@ngrx/effects';
import { USER_FEATURE_KEY, userReducer } from './../store/user-reducers';
import { StoreModule } from '@ngrx/store';
import { UserServiceModule } from './../services/user.service.module';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../page/user/user.component';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../../primeng.module';
import { AddUserEffect } from '../store/effects/add-user.effect';


@NgModule({
  declarations: [
    UserComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserServiceModule,
    ReactiveFormsModule,

    PrimengModule,

    StoreModule.forFeature(USER_FEATURE_KEY, userReducer),
    EffectsModule.forFeature(
      [
        GetUsersEffect,
        AddUserEffect
      ]
    )
  ]
})
export class UserModule { }
