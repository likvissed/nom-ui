import { EmptyValuePipe } from './pipes/empty-value.pipe';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const pipes: any[] = [
  EmptyValuePipe
];

const components: any[] = [
]

@NgModule({
  declarations: [
    ...pipes,
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...pipes,
    ...components
  ],
  providers: []
})
export class SharedModule { }
