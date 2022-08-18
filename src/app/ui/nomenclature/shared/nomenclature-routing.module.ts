import { ListNomenclatureComponent } from './../page/components/list-nomenclature/list-nomenclature.component';
import { NewNomenclatureComponent } from './../page/components/new-nomenclature/new-nomenclature.component';
import { CurrentNomenclatureComponent } from './../page/components/current-nomenclature/current-nomenclature.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/current', pathMatch: 'full' },
  { path: 'current', component: CurrentNomenclatureComponent },
  { path: 'new', component: NewNomenclatureComponent },
  { path: 'list', component: ListNomenclatureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NomenclatureRoutingModule { }