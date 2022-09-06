import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class NomenclatureService {
  constructor(
    private http: HttpClient
  ) {}

  createTemplateDocument(data: any) {
    const url = `${environment.apiUrl}/create_nomenclature_sample`;

    const requestOptions: Object = {
      responseType: 'blob'
    };

    return this.http.post(url, data , requestOptions);
  }

  sendDocumentToSsd(data: any) {
    const url = `${environment.apiUrl}/create_nomenclature`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post (url, data, { headers: headers });
  }

  getListNomenclatures() {
    const url = `${environment.apiUrl}/nomenclatures_list`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get (url,  { headers: headers });
  }

  downloadNomenclature(id: number) {
    const url = `${environment.apiUrl}/download_nomenclature`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(`${url}/${id}`,  { headers,  responseType: 'blob' });
  }

  deleteNomenclature(id: number) {
    const url = `${environment.apiUrl}/delete_nomenclature`;

    return this.http.delete(`${url}/${id}`)
  }

  createBasedOn(id: number) {
    const url = `${environment.apiUrl}/create_nomenclature_like`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(`${url}/${id}`,  { headers: headers });
  }

  getCurrentNom() {
    const url = `${environment.apiUrl}/nomenclature_detail`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(url,  { headers: headers });
  }
}
