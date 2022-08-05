import { getArticlesAction } from '../../../store/actions/get-articles.action';
import { selectAllArticles } from './../../../store/selectors';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Table } from 'primeng/table';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @ViewChild('dtable') table!: Table;
  articles$!: Observable<any>;

  constructor(
    private store: Store
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
}
