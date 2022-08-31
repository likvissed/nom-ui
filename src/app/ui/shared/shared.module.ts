import { NameForStatusNomPipe } from './pipes/name-for-status-nom.pipe';
import { FindEmployeeEffect } from './store/effects/find-employee.effect';
import { EffectsModule } from '@ngrx/effects';
import { sharedReducer, SHARED_FEATURE_KEY } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { EmployeeServiceModule } from './services/employee.service.module';
import { EmptyValuePipe } from './pipes/empty-value.pipe';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayToStringTomesPipe } from './pipes/array-to-string-tomes.pipe';

const pipes: any[] = [
  EmptyValuePipe,
  ArrayToStringTomesPipe,
  NameForStatusNomPipe
];

const components: any[] = [
]

@NgModule({
  declarations: [
    ...pipes,
    ...components
  ],
  imports: [
    CommonModule,
    EmployeeServiceModule,

    StoreModule.forFeature(SHARED_FEATURE_KEY, sharedReducer),
    EffectsModule.forFeature(
      [
        FindEmployeeEffect
      ]
    ),
  ],
  exports: [
    ...pipes,
    ...components
  ],
  providers: []
})
export class SharedModule { }
