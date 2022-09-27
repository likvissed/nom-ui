import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../page/user/user.component';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../../primeng.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

    PrimengModule
  ]
})
export class UserModule { }
