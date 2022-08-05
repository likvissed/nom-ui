import { SharedModule } from './ui/shared/shared.module';
import { OrderModule } from './ui/order/shared/order.module';
import { ArticleModule } from './ui/article/shared/article.module';
import { LayoutModule } from './ui/layout/shared/layout.module';
import { PrimengModule } from './primeng.module';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthCenterModule } from '@iss/ng-auth-center';

const appModules: any[] = [
  PrimengModule,
  LayoutModule,
  ArticleModule,
  OrderModule,
  SharedModule
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

    appModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
