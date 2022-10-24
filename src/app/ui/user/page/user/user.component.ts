import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

import { NewUserComponent } from './../components/new-user/new-user.component';

import { selectAllUsers, selectUserFilters } from '../../store/user-selectors';

import { getUsersAction } from './../../store/actions/get-users.action';
import { deleteUserAction } from '../../store/actions/delete-user.action';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [
    DialogService,
    ConfirmationService
  ]
})
export class UserComponent implements OnInit {
  users$!: Observable<any>;
  filters = {
    roles: []
  };

  constructor(
    private store: Store,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.onInitializeValues();
  }

  onInitializeValues() {
    this.store.dispatch(getUsersAction());
    this.users$ = this.store.pipe(select(selectAllUsers));

    this.onLoadFilters();
  }

  onLoadFilters() {
    this.store.pipe(select(selectUserFilters))
      .subscribe((filters: any) => {
        if (filters) {
          this.filters.roles = filters.roles;
        }
      });
  }

  onNewUser() {
    this.dialogService.open(NewUserComponent, {
      header: 'Добавление пользователя',
      width: '30%',
      data: {
        roles: this.filters.roles
      }
    });
  }

  onEditUser(column: any) {
    this.dialogService.open(NewUserComponent, {
      header: column.fio,
      width: '30%',
      data: {
        roles: this.filters.roles,
        data: column
      }
    });
  }

  onDeleteUser(id: number, fio: string) {
    this.confirmationService.confirm({
      message: `Вы действительно хотите удалить пользователя «‎${fio}»?`,
      header: 'Подтвердите выбор',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Да',
      rejectLabel: 'Нет',
      accept: () => {
        this.store.dispatch(deleteUserAction({id: id}));
      }
    });
  }

}
