import { NotFoundComponent } from './../components/not-found/not-found.component';
import { PrimengModule } from './../../../primeng.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: NotFoundComponent }
]

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    PrimengModule
  ]
})
export class NotFoundModule { }
