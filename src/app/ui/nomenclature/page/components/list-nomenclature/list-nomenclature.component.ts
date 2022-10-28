import { ModalNomenclatureDetailComponent } from './../modal-nomenclature-detail/modal-nomenclature-detail.component';
import { CurrentNomenclatureComponent } from './../current-nomenclature/current-nomenclature.component';
import { UploadScanComponent } from '../upload-scan/upload-scan.component';

import { selectAllNomenclatures, selectFiltersNom } from '../../../store/nomenclature-selectors';

import { AuthHelper } from '@iss/ng-auth-center';

import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DialogService } from 'primeng/dynamicdialog';

import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

import { downloadNomenclatureAction } from './../../../store/actions/download.action';
import { getListAction } from './../../../store/actions/get-list.action';
import { deleteNomenclatureAction } from '../../../store/actions/delete.action';

import { Store, select } from '@ngrx/store';

import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, AfterContentChecked } from '@angular/core';


@Component({
  selector: 'app-list-nomenclature',
  templateUrl: './list-nomenclature.component.html',
  styleUrls: ['./list-nomenclature.component.scss'],
  providers: [
    ConfirmationService, DialogService
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
  userDeptName: string = '';
  display: boolean = false;
  comment: string = '';

  constructor(
    private store: Store,
    private confirmationService: ConfirmationService,
    private router: Router,
    private authHelper: AuthHelper,
    public dialogService: DialogService
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
    this.store.dispatch(downloadNomenclatureAction({ id: id }));
  }

  onDeleteNom(id: number, num: number) {
    this.confirmationService.confirm({
      message: `Вы действительно хотите удалить номенклатуру дел №«${num}»?`,
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
    this.router.navigateByUrl(`/nom/new/${id}`);
  }

  onShowNom(id: number) {
    this.dialogService.open(ModalNomenclatureDetailComponent, {
      header: 'Просмотр номенклатуры',
      width: '80%',
      data: {
        id: id
      }
    });
  }

  onShowComment(comment: any){
    this.display = true;
    this.comment = comment;
  }

  onOpenModalUpload(num: number, id: number) {
    this.dialogService.open(UploadScanComponent, {
      header: `Загрузка скана для номенклатуры №${num}`,
      width: '30%',
      data: {
        id: id
      }
    });
  }
}
