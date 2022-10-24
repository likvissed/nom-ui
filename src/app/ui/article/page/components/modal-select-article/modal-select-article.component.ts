import { ArticleInterface } from './../../../types/article.interface';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';

import { getArticlesAction } from '../../../store/actions/get-articles.action';
import { selectAllArticles } from '../../../store/article-selectors';

import { Component, OnInit, ViewChild } from '@angular/core';

import { Store, select } from '@ngrx/store';

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
    this.store.dispatch(getArticlesAction());
    this.onLoadArticles();
  }

  onLoadArticles() {
    this.articles$ = this.store.pipe(
      select(selectAllArticles),
      map((data: any) => {
        if (data) {
          return data.map((item: any, index: number) => ({
            ...item,
            index: index + 1
          }));
        }
      } )
    );
  }

  onSelected(col: ArticleInterface) {
    this.ref.close(col);
  }

}
