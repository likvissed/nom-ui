import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { getArticlesAction } from '../../../store/actions/get-articles.action';
import { selectAllArticles } from '../../../store/selectors';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Table } from 'primeng/table';

@Component({
  selector: 'app-modal-select-article',
  templateUrl: '/modal-select-article.component.html',
  styleUrls: ['./modal-select-article.component.scss']
})

export class ModalSelectArticleComponent implements OnInit {
  @ViewChild('dtable') table!: Table;
  articles$!: Observable<any>;

  constructor(
    private store: Store,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getArticlesAction( { data: {}  }));
    this.onLoadArticles();
  }

  onLoadArticles() {
    this.articles$ = this.store.pipe(select(selectAllArticles));
  }

  onSelected(col: any) {
    this.ref.close(col);
  }

}
