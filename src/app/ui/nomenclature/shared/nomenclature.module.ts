import { ModalNomenclatureDetailComponent } from './../page/components/modal-nomenclature-detail/modal-nomenclature-detail.component';
import { CreateBasedOnEffect } from './../store/effects/create-based-on.effect';
import { DeleteEffect } from './../store/effects/delete.effect';
import { DownloadEffect } from './../store/effects/download.effect';
import { GetListEffect } from './../store/effects/get-list.effect';
import { SendToSsdEffect } from './../store/effects/send-to-ssd.effect';
import { ModalTemplateComponent } from './../page/components/modal-template/modal-template.component';
import { CreateTemplateEffect } from './../store/effects/create-template.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NOMENCLATURE_FEATURE_KEY, nomenclatureReducer } from './../store/reducers';
import { NomenclatureServiceModule } from './../services/nomenclature.service.module';
import { ModalEditTomeComponent } from './../page/components/modal-edit-tome/modal-edit-tome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { PrimengModule } from './../../../primeng.module';
import { NomenclatureRoutingModule } from './nomenclature-routing.module';
import { CommonModule } from '@angular/common';
import { ListNomenclatureComponent } from './../page/components/list-nomenclature/list-nomenclature.component';
import { CurrentNomenclatureComponent } from './../page/components/current-nomenclature/current-nomenclature.component';
import { NewNomenclatureComponent } from './../page/components/new-nomenclature/new-nomenclature.component';
import { NgModule } from '@angular/core';
import { GetCurrentEffect } from '../store/effects/get-current.effect';
@NgModule({
  declarations: [
    NewNomenclatureComponent,
    CurrentNomenclatureComponent,
    ListNomenclatureComponent,
    ModalEditTomeComponent,
    ModalTemplateComponent,
    ModalNomenclatureDetailComponent
  ],
  imports: [
    CommonModule,
    NomenclatureRoutingModule,
    NomenclatureServiceModule,

    StoreModule.forFeature(NOMENCLATURE_FEATURE_KEY, nomenclatureReducer),
    EffectsModule.forFeature(
      [
        CreateTemplateEffect,
        SendToSsdEffect,
        GetListEffect,
        DownloadEffect,
        DeleteEffect,
        CreateBasedOnEffect,
        GetCurrentEffect
      ]
    ),

    PrimengModule,
    SharedModule,

    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ModalNomenclatureDetailComponent
  ]
})
export class NomenclatureModule { }
