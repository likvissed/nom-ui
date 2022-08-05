import { EmptyValuePipe } from './pipes/empty-value.pipe';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const pipes: any[] = [
  EmptyValuePipe
];

@NgModule({
  declarations: [
    ...pipes
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...pipes
  ]
})
export class SharedModule { }
