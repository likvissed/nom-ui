import { getCurrentAction } from '@store/nomenclature/actions/get-current.action';

import { getCurrentNom } from '../../../store/nomenclature-selectors';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-nomenclature-detail',
  templateUrl: './modal-nomenclature-detail.component.html',
  styleUrls: ['./modal-nomenclature-detail.component.scss']
})
export class ModalNomenclatureDetailComponent implements OnInit {
  nomenclature$!: Observable<any>;
  id!: number;

  constructor(
    private store: Store,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.id = this.config.data?.id;
    this.onInitializeValues();
  }

  onInitializeValues() {
    this.onLoadNom();

    this.nomenclature$ = this.store.pipe(select(getCurrentNom));
  }

  onLoadNom() {
    this.store.dispatch(getCurrentAction({id: this.id}));
  }


}
