import { PrimengModule } from '../../../primeng.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from '../page/layout/layout.component';
import { HeaderComponent } from '../page/components/header/header.component';
import { MainComponent } from '../page/components/main/main.component';
import { FooterComponent } from '../page/components/footer/footer.component';

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
