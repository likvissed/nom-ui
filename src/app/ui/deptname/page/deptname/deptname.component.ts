import { NewDeptnameComponent } from './../components/new-deptname/new-deptname.component';
import { getDeptnamesAction } from './../../store/actions/get-deptnames.action';
import { selectAllDeptnames } from './../../store/selectors';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';

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
    console.log('edit', data);
    this.dialogService.open(NewDeptnameComponent, {
      header: 'Редактирование участка',
      width: '35%',
      data: {
        data: data
      }
    });
  }

  onDeleteDeptname(id: number, name: string) {

  }

}
