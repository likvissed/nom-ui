import { AuthHelper } from '@iss/ng-auth-center';
import { LoaderService } from './../../../../shared/services/loader.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  loading: boolean = false;
  currentUser = {
    isAuthenticated: false,
    fioInitials: '',
    role: '',
    indexDept: ''
  }

  constructor(
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef,
    private authHelper: AuthHelper
  ) { }

  ngOnInit(): void {
    this.onLoadUser();
    this.onFillMenu();

    this.loaderService.isLoading$.subscribe(value =>{
      this.loading = value;

      this.cdr.detectChanges();
    });
  }

  onLoadUser() {
    this.authHelper.isAuthenticated$.subscribe((isAuth: any) => {
      this.currentUser.isAuthenticated = isAuth;

      if (this.currentUser.isAuthenticated) {
        this.currentUser.fioInitials = this.authHelper.getJwtPayload()['fio_initials'];
        this.currentUser.role = this.authHelper.getJwtPayload()['role'];
        this.currentUser.indexDept = this.authHelper.getJwtPayload()['left_index'][0];
      }
    });
  }

  onFillMenu() {
    this.items = [
      {
        label: "Номенклатура",
        icon: "pi pi-fw pi-book",
        items: [
          {
            label: 'Создать',
            routerLink: ['/nomenclature/new']
          },
          {
            label: 'Текущая',
            routerLink: ['/nomenclature/current']
          }
        ]
      },
      {
        label: "Список номенклатур",
        icon: "pi pi-fw pi-align-justify",
        routerLink: ['/nomenclature/list']
      },
      {
        icon: "pi pi-fw pi-cog",
        label: 'Дополнительно',
        style: {'margin-left': '0px'},
        items: [
          {
            label: 'Статьи',
            routerLink: ['/articles']
          },
          {
            label: 'Приказы',
            routerLink: ['/orders']
          }
        ]
      }
    ];
  }

  onLogout() {
    this.authHelper.logout();
  }

}
