import { LoaderService } from './../../../../shared/services/loader.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

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

  constructor(
    private loaderService: LoaderService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.onFillMenu();

    this.loaderService.isLoading$.subscribe(value =>{
      this.loading = value;

      this.cdr.detectChanges();
    });
  }

  onFillMenu() {
    this.items = [
      {
        label: "Норменклатура",
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

}
