import { PrimengModule } from './../../primeng.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    RouterModule,
    PrimengModule
  ],
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
})
export class LayoutModule {}
