import { Table } from 'primeng/table';
import { NewDeptnameComponent } from './../components/new-deptname/new-deptname.component';
import { getDeptnamesAction } from './../../store/actions/get-deptnames.action';
import { selectAllDeptnames } from './../../store/selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { deleteDeptnameAction } from '../../store/actions/delete-deptname.action';

@Component({
  selector: 'app-deptname',
  templateUrl: './deptname.component.html',
  styleUrls: ['./deptname.component.scss'],
  providers: [
    DialogService,
    ConfirmationService
  ]
})
export class DeptnameComponent implements OnInit {
  @ViewChild('dtable') table!: Table;
  deptnames$!: Observable<any>;

  constructor(
    private store: Store,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.onInitializeValues();
  }

  onInitializeValues() {
    this.onLoadDeptnames();
  }

  onLoadDeptnames() {
    this.store.dispatch(getDeptnamesAction());
    this.deptnames$ = this.store.pipe(select(selectAllDeptnames));
  }

  onNewDeptname() {
    this.dialogService.open(NewDeptnameComponent, {
      header: 'Добавление участка',
      width: '35%'
    });
  }

  onEditDeptname(data: any) {
    this.dialogService.open(NewDeptnameComponent, {
      header: 'Редактирование участка',
      width: '35%',
      data: {
        data: data
      }
    });
  }

  onDeleteDeptname(id: number, deptname: string) {
    this.confirmationService.confirm({
      message: `Вы действительно хотите удалить участок «‎${deptname}»?`,
      header: 'Подтвердите выбор',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Да',
      rejectLabel: 'Нет',
      accept: () => {
        this.store.dispatch(deleteDeptnameAction({id: id}));
      }
    });
  }

}
