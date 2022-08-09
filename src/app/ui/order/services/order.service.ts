import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class OrderService {
  constructor(
    private http: HttpClient
  ) {}

  getOrders() {
    const url = `${environment.apiUrl}/orders_list`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get (url,  { headers: headers });
  }
}
