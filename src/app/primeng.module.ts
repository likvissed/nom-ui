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
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';
import { MultiSelectModule } from 'primeng/multiselect';


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
  DynamicDialogModule,
  AutoCompleteModule,
  CalendarModule,
  CheckboxModule,
  PanelModule,
  MessagesModule,
  MessageModule,
  ToastModule,
  CardModule,
  ImageModule,
  ProgressSpinnerModule,
  DialogModule,
  ChipModule,
  MultiSelectModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: [],
  providers: []
})
export class PrimengModule {}
