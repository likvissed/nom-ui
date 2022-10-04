import { SharedModule } from './../../shared/shared.module';
import { DeleteUserEffect } from './../store/effects/delete-user.effect';
import { UpdateUserEffect } from './../store/effects/update-user.effect';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
