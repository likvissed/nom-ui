import { DeptnameNamePipe } from './pipes/deptname-name.pipe';
import { DeptnameInfoPipe } from './pipes/depname-info.pipe';
import { NameForStatusNomPipe } from './pipes/name-for-status-nom.pipe';
import { ArrayToStringTomesPipe } from './pipes/array-to-string-tomes.pipe';
import { EmptyValuePipe } from './pipes/empty-value.pipe';

import { ColorLineForYearDirective } from './directives/color-line-for-year.directive';

import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

import { LoaderModule } from './modules/loader.module';
import { NotFoundModule } from './modules/not-found.module';
import { ErrorHandlerServiceModule } from './services/error-handler.service.module';
import { EmployeeServiceModule } from './services/employee.service.module';

import { FindEmployeeEffect } from './store/effects/find-employee.effect';

import { EffectsModule } from '@ngrx/effects';

import { sharedReducer, SHARED_FEATURE_KEY } from './store/reducers';
import { StoreModule } from '@ngrx/store';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const pipes: any[] = [
  EmptyValuePipe,
  ArrayToStringTomesPipe,
  NameForStatusNomPipe,
  DeptnameInfoPipe,
  DeptnameNamePipe
];

const components: any[] = [
]

const directives: any[] = [
  ColorLineForYearDirective
]

@NgModule({
  declarations: [
    ...pipes,
    ...components,
    ...directives
  ],
  imports: [
    CommonModule,
    EmployeeServiceModule,
    ErrorHandlerServiceModule,
    NotFoundModule,
    LoaderModule,

    StoreModule.forFeature(SHARED_FEATURE_KEY, sharedReducer),
    EffectsModule.forFeature(
      [
        FindEmployeeEffect
      ]
    )
  ],
  exports: [
    ...pipes,
    ...components,
    ...directives
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
