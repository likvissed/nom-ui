import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class EmployeeService {
  constructor(
    private http: HttpClient
  ) {}

  findUsers(data: any) {
    const url = `${environment.apiUrl}/fio_tn_search`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // TODO: Переделать filters={"text":"data"} !
    let dt = {"text": data}

    return this.http.get(`${url}?filters=${encodeURIComponent(JSON.stringify(dt))}`,  { headers: headers });
  }
}
