import { DialogService } from 'primeng/dynamicdialog';
import { NewUserComponent } from './../components/new-user/new-user.component';
import { selectAllUsers, selectUserFilters } from './../../store/selectors';
import { getUsersAction } from './../../store/actions/get-users.action';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [
    DialogService
  ]
})
export class UserComponent implements OnInit {
  users$!: Observable<any>;
  filters = {
    roles: []
  };

  constructor(
    private store: Store,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.onInitializeValues();
  }

  onInitializeValues() {
    this.store.dispatch(getUsersAction());

    this.onLoadUsers();
    this.onLoadFilters();
  }

  onLoadUsers() {
    this.users$ = this.store.pipe(select(selectAllUsers));
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
      width: '50%',
      data: {
        roles: this.filters.roles
      }
    });
  }

  onEditUser(column: any, fio: string) {
    this.dialogService.open(NewUserComponent, {
      header: fio,
      width: '50%',
      data: {
        roles: this.filters.roles,
        data: column
      }
    });
  }

}
