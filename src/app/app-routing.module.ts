import { NotFoundComponent } from './ui/shared/components/not-found/not-found.component';
import { OrderComponent } from './ui/order/page/order/order.component';
import { ArticleComponent } from './ui/article/page/components/article/article.component';
import { LayoutModule } from './ui/layout/shared/layout.module';
import { LayoutComponent } from './ui/layout/page/layout/layout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthCenterGuard } from '@iss/ng-auth-center';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/articles',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthCenterGuard],
    children: [
      {
        path: 'articles',
        loadChildren: (): Promise<any> => import('src/app/ui/article/shared/article.module').then((modules) => modules.ArticleModule),
      },
      {
        path: 'orders',
        loadChildren: (): Promise<any> => import('src/app/ui/order/shared/order.module').then((modules) => modules.OrderModule),
      },
      {
        path: 'nomenclature',
        loadChildren: (): Promise<any> => import('src/app/ui/nomenclature/shared/nomenclature.module').then((modules) => modules.NomenclatureModule),
      },
    ],
  },
  {
    path: '**',
    loadChildren: (): Promise<any> => import('src/app/ui/shared/modules/not-found.module').then((modules) => modules.NotFoundModule),
  }
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
