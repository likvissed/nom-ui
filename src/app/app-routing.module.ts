import { LayoutModule } from './ui/layout/modules/layout.module';

import { LayoutComponent } from './ui/layout/page/layout/layout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthCenterGuard } from '@iss/ng-auth-center';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthCenterGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: (): Promise<any> => import('src/app/ui/nomenclature/modules/nomenclature.module').then((modules) => modules.NomenclatureModule),
      },
      {
        path: 'articles',
        loadChildren: (): Promise<any> => import('src/app/ui/article/modules/article.module').then((modules) => modules.ArticleModule),
      },
      {
        path: 'orders',
        loadChildren: (): Promise<any> => import('src/app/ui/order/modules/order.module').then((modules) => modules.OrderModule),
      },
      {
        path: 'nom',
        loadChildren: (): Promise<any> => import('src/app/ui/nomenclature/modules/nomenclature.module').then((modules) => modules.NomenclatureModule),
      },
      {
        path: 'users',
        loadChildren: (): Promise<any> => import('src/app/ui/user/modules/user.module').then((modules) => modules.UserModule),
      },
      {
        path: 'deptnames',
        loadChildren: (): Promise<any> => import('src/app/ui/deptname/modules/deptname.module').then((modules) => modules.DeptnameModule),
      }
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
