import { getDataPresentNom } from '../store/nomenclature-selectors';

import { createBasedOnAction } from '@store/nomenclature/actions/create-based-on.action';

import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class CreateBasedOnResolver implements Resolve<any> {
  dataNom$!: Observable<any>;

  constructor(
    private store: Store
  ) {
  }

  resolve(
    route: ActivatedRouteSnapshot
  ){
    this.store.dispatch(createBasedOnAction({ id: +route.params['id'] }));

    return this.store.pipe(
      select(getDataPresentNom),
      filter((data: any) => !!data.table),
      take(1)
    )
  }
}
