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

  deleteOrder(id: number) {
    const url = `${environment.apiUrl}/delete_order`;

    return this.http.delete(`${url}/${id}`)
  }

  addOrder(data: any) {
    const url = `${environment.apiUrl}/order_reg`;

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, data, { headers: headers})
  }
}
