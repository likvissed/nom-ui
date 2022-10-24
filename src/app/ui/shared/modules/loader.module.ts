import { LoaderService } from './../services/loader.service';

import { PrimengModule } from './../../../primeng.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    PrimengModule
  ],
  providers: [
    LoaderService
  ]
})
export class LoaderModule {}
