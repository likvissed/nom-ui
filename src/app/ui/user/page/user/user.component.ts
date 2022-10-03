import { selectAllUsers, selectUserFilters } from './../../store/selectors';
import { getUsersAction } from './../../store/actions/get-users.action';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users$!: Observable<any>;
  filters = {
    roles: []
  };

  constructor(
    private store: Store
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

}
