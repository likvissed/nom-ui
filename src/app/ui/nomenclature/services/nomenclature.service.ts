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

    // TODO: Вернуть запрос
    // return this.http.get (url,  { headers: headers });
    let leftIndex = 'УИВТ';
    return this.http.get(`${url}?left_index=${leftIndex}`,  { headers: headers });
  }

  downloadNomenclature(id: number) {
    const url = `${environment.apiUrl}/download_nomenclature`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // TODO: Переделать filters={"id":"1"} !
    let dt = {"id": id}

    return this.http.get(`${url}?filters=${encodeURIComponent(JSON.stringify(dt))}`,  { headers: headers });
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

    // return this.http.get(url,  { headers: headers });
    // TODO: Переделать filters={"left_index":"УИВТ"} !
    let dt = {"left_index": 'УИВТ'}

    return this.http.get(`${url}?filters=${encodeURIComponent(JSON.stringify(dt))}`,  { headers: headers });
  }
}
