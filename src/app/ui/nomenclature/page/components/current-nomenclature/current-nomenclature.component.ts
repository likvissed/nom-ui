import { downloadNomenclatureAction } from './../../../store/actions/download.action';
import { getCurrentNom } from './../../../store/selectors';
import { getCurrentAction } from './../../../store/actions/get-current.action';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-nomenclature',
  templateUrl: './current-nomenclature.component.html',
  styleUrls: ['./current-nomenclature.component.scss']
})
export class CurrentNomenclatureComponent implements OnInit {
  nomenclature$!: Observable<any>

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.onInitializeValues();
  }

  onInitializeValues() {
    this.onLoadNom();

    this.nomenclature$ = this.store.pipe(select(getCurrentNom));
  }

  onLoadNom() {
    this.store.dispatch(getCurrentAction({id: ''}));
  }

  onDownloadNom(id: any) {
    this.store.dispatch(downloadNomenclatureAction({ id: id }));

    this.onLoadNom();
  }

}
