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
@NgModule({
  declarations: [
    NewNomenclatureComponent,
    CurrentNomenclatureComponent,
    ListNomenclatureComponent,
    ModalEditTomeComponent
  ],
  imports: [
    CommonModule,
    NomenclatureRoutingModule,
    // OrderServiceModule,

    // StoreModule.forFeature(ORDER_FEATURE_KEY, orderReducer),
    // EffectsModule.forFeature(
    //   [
    //     GetOrdersEffect,
    //     DeleteOrderEffect,
    //     AddOrderEffect
    //   ]
    // ),

    PrimengModule,
    SharedModule,

    FormsModule,
    ReactiveFormsModule
  ],
  // entryComponents: [
  //   ModalSelectArticleComponent
  // ]
})
export class NomenclatureModule { }
