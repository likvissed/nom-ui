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
    console.log('service', id);
    const url = `${environment.apiUrl}/download_nomenclature`;

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // TODO: Переделать filters={"id":"1"} !
    let dt = {"id": id}

    return this.http.get(`${url}?filters=${encodeURIComponent(JSON.stringify(dt))}`,  { headers: headers });
  }

  deleteNomenclature(id: number) {
    const url = `${environment.apiUrl}/download_nomenclature`;

    return this.http.delete(`${url}/${id}`)
  }
}
