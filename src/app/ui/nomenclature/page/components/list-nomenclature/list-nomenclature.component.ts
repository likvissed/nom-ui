import { AuthHelper } from '@iss/ng-auth-center';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { downloadNomenclatureAction } from './../../../store/actions/download.action';
import { selectAllNomenclatures, selectFiltersNom } from './../../../store/selectors';
import { getListAction } from './../../../store/actions/get-list.action';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, ViewChild, AfterContentChecked } from '@angular/core';
import { deleteNomenclatureAction } from '../../../store/actions/delete.action';

@Component({
  selector: 'app-list-nomenclature',
  templateUrl: './list-nomenclature.component.html',
  styleUrls: ['./list-nomenclature.component.scss'],
  providers: [
    ConfirmationService
  ]
})
export class ListNomenclatureComponent implements OnInit, AfterContentChecked {
  @ViewChild('dtable') table!: Table;
  nomenclatures$!: Observable<any>;
  filters = {
    statuses: [],
    deptnames: []
  };
  roleAdmin: boolean = false;
  userDeptName = '';
  example!: any;

  constructor(
    private store: Store,
    private confirmationService: ConfirmationService,
    private router: Router,
    private authHelper: AuthHelper
  ) { }

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues() {
    if (this.authHelper.getJwtPayload()['role'] === 'admin') {
      this.roleAdmin = true;
      this.userDeptName = this.authHelper.getJwtPayload()['left_index'];
    }

    this.store.dispatch(getListAction());

    this.onLoadNomenclatures();
    this.onLoadStatuses();
  }

  onLoadNomenclatures() {
    this.nomenclatures$ = this.store.pipe(select(selectAllNomenclatures));
  }

  onLoadStatuses() {
    this.store.pipe(select(selectFiltersNom))
        .subscribe((filters: any) => {
          if (filters) {
            this.filters.statuses = filters.state_types;
            this.filters.deptnames = filters.dept_names;
          }
        });
  }

  ngAfterContentChecked(): void {
    // if (this.roleAdmin && this.table) {
    //   this.table.filter(this.userDeptName, 'deptname', 'equals');
    // }
  }

  onDownloadNom(id: number) {
    this.store.dispatch(downloadNomenclatureAction({ data: id }));
  }

  onDeleteNom(id: number, num: number) {
    this.confirmationService.confirm({
      message: `Вы действительно хотите удалить номенклатуру дел №«‎${num}»?`,
      header: 'Подтвердите выбор',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Да',
      rejectLabel: 'Нет',
      accept: () => {
        this.store.dispatch(deleteNomenclatureAction({ id: id }));
      }
    });
  }

  onCreateBasedOn(id: number) {
    this.router.navigateByUrl(`/nomenclature/new/${id}`);
  }
}
