import { Injectable } from "@angular/core";
import { NomenclatureInterface } from "../types/nomenclature.interface";

@Injectable()
export class DraftService {
  nameKey = 'draftNomenclature';
  constructor() {}

  onSet(data: NomenclatureInterface) {
    localStorage.setItem(this.nameKey, JSON.stringify(data));
  }

  onGet() {
    console.log('123');
    let value = localStorage.getItem(this.nameKey);

    return value && JSON.parse(value);
  }

}
