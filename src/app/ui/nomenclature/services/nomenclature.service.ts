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
}
