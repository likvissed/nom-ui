import { GetArticlesResponseInterface } from './../types/get-articles-response.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class ArticleService {
  constructor(
    private http: HttpClient
  ) {}

  getArticles(data: any) {
    const url = `${environment.apiUrl}/articles_list`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<GetArticlesResponseInterface>(url,  { headers: headers, params: data });
  }
}
