import { NomenclatureService } from './nomenclature.service';

import { NgModule } from '@angular/core';
import { DraftService } from './draft.service';

@NgModule({
  providers: [
    NomenclatureService,
    DraftService
  ]
})
export class NomenclatureServiceModule {}
