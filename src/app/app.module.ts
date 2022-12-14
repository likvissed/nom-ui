import { MessageService } from 'primeng/api';

import { NomenclatureModule } from './ui/nomenclature/modules/nomenclature.module';
import { SharedModule } from './ui/shared/shared.module';
import { OrderModule } from './ui/order/modules/order.module';
import { ArticleModule } from './ui/article/modules/article.module';
import { LayoutModule } from './ui/layout/modules/layout.module';
import { PrimengModule } from './primeng.module';
import { AppRoutingModule } from './app-routing.module';

import { environment } from './../environments/environment';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import localeRu from '@angular/common/locales/ru';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthCenterModule } from '@iss/ng-auth-center';

import { NgHttpLoaderModule } from 'ng-http-loader'; 

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
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    AuthCenterModule.forRoot(environment.auth),
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    environment.debugRedux ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],

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
