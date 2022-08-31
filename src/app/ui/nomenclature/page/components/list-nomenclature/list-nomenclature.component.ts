import { Table } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { downloadNomenclatureAction } from './../../../store/actions/download.action';
import { selectAllNomenclatures, selectStatusesNom } from './../../../store/selectors';
import { getListAction } from './../../../store/actions/get-list.action';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, ViewChild } from '@angular/core';
import { deleteNomenclatureAction } from '../../../store/actions/delete.action';

@Component({
  selector: 'app-list-nomenclature',
  templateUrl: './list-nomenclature.component.html',
  styleUrls: ['./list-nomenclature.component.scss'],
  providers: [
    ConfirmationService
  ]
})
export class ListNomenclatureComponent implements OnInit {
  @ViewChild('dtable') table!: Table;
  nomenclatures$!: Observable<any>;
  filters = {
    statuses: []
  }

  constructor(
    private store: Store,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getListAction());

    this.onLoadNomenclatures();
    this.onLoadStatuses();
  }

  onLoadNomenclatures() {
    this.nomenclatures$ = this.store.pipe(select(selectAllNomenclatures));
  }

  onLoadStatuses() {
    this.store.pipe(select(selectStatusesNom))
        .subscribe((statuses: any) => {
          if (statuses) {
            this.filters.statuses = statuses;
          }
        });
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
}
