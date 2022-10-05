import { DeptnameRoutingModule } from './deptname-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '../../../primeng.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DeptnameRoutingModule,
    ReactiveFormsModule,

    PrimengModule
  ]
})

export class DeptnameModule {}
