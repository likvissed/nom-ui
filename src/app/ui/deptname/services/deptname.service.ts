import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DeptnameService {
  constructor(
    private http: HttpClient
  ) {}

  getDeptnames() {
    const url = `${environment.apiUrl}/deptnames_list`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(url, { headers: headers });
  }
}
