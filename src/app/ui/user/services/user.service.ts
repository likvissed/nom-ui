import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient
  ) {}

  getUsers() {
    const url = `${environment.apiUrl}/users_list`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(url, { headers: headers });
  }

  addUser(data: any) {
    const url = `${environment.apiUrl}/add_user`;

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, data, { headers: headers})
  }
}
