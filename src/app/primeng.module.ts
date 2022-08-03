import { NgModule } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';

const modules: any[] = [
  ToolbarModule,
  ButtonModule,
  SplitButtonModule,
  DividerModule,
  MenuModule,
  MenubarModule,
  DropdownModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: []
})
export class PrimengModule {}
