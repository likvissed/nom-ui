import { NgModule } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

const modules: any[] = [
  ToolbarModule,
  ButtonModule,
  SplitButtonModule,
  DividerModule,
  MenuModule,
  MenubarModule,
  TableModule,
  ConfirmDialogModule,
  InputTextModule,
  DropdownModule,
  DynamicDialogModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: [],
  providers: []
})
export class PrimengModule {}
