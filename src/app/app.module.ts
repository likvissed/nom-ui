import { MessageService } from 'primeng/api';
import { NomenclatureModule } from './ui/nomenclature/shared/nomenclature.module';
import { SharedModule } from './ui/shared/shared.module';
import { OrderModule } from './ui/order/shared/order.module';
import { ArticleModule } from './ui/article/shared/article.module';
import { LayoutModule } from './ui/layout/shared/layout.module';
import { PrimengModule } from './primeng.module';
import { environment } from './../environments/environment';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

import localeRu from '@angular/common/locales/ru';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthCenterModule } from '@iss/ng-auth-center';

registerLocaleData(localeRu);

const appModules: any[] = [
  PrimengModule,
  LayoutModule,
  ArticleModule,
  OrderModule,
  SharedModule,
  NomenclatureModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    AuthCenterModule.forRoot(environment.auth),
    AppRoutingModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),

    ...appModules
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru-RU',
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
