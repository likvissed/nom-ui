import { primeLocale } from './../../../../lib/primeng.locale';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {

  constructor(
    private config: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.config.setTranslation(primeLocale);
  }

}
