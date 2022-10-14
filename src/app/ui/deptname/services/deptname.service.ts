import { AddDeptnameRequestInterface } from './../types/add-deptname-request.interface';
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

  addDeptname(data: AddDeptnameRequestInterface) {
    const url = `${environment.apiUrl}/add_deptname`;

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, data, { headers: headers})
  }

  updateDeptname(data: AddDeptnameRequestInterface) {
    const url = `${environment.apiUrl}/change_deptname`;

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(url, data , { headers: headers })
  }

  deleteDeptname(id: number) {
    const url = `${environment.apiUrl}/delete_deptname`;

    return this.http.delete(`${url}/${id}`)
  }
}
