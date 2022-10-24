import { NOMENCLATURE_STUB } from './../stubs/nomenclature.stub';

import { NomenclatureService } from './nomenclature.service';

import { environment } from 'src/environments/environment';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NomenclatureService', () => {
  let service: NomenclatureService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        NomenclatureService
      ]
    });

    service = TestBed.inject(NomenclatureService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  let apiUrl = `${environment.apiUrl}`;

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('#createTemplateDocument', () => {
    const templateFileUrl = `${apiUrl}/create_nomenclature_sample`;

    const params = NOMENCLATURE_STUB;
    const data = new Blob(['test'], { type: 'application/json' });

    it('should return pdf file', () => {
      service.createTemplateDocument(params)
        .subscribe((response: any) => {
          expect(response).toEqual(data);
        })

      const req = httpTestingController.expectOne({method: 'POST', url: templateFileUrl});

      expect(req.request.method).toEqual('POST');
      expect(req.request.responseType).toEqual('blob');

      req.flush(data);
    });
  });

  describe('#sendDocumentToSsd', () => {
    const createFileUrl = `${apiUrl}/create_nomenclature`;

    const params = NOMENCLATURE_STUB;
    const data = { result: 'Документ отправлен в ССД' };

    it('should return data', () => {
      service.sendDocumentToSsd(params)
        .subscribe((response: any) => {
          expect(response).toEqual(data);
        })

      const req = httpTestingController.expectOne({method: 'POST', url: createFileUrl});

      expect(req.request.method).toEqual('POST');
      expect(req.request.responseType).toEqual('json');

      req.flush(data);
    });
  });

  describe('#getListNomenclatures', () => {
    const listUrl = `${apiUrl}/nomenclatures_list`;

    const data = { result: 'Документ отправлен в ССД' };

    it('should return data', () => {
      service.getListNomenclatures()
        .subscribe((response: any) => {
          expect(response).toEqual(data);
        })

      const req = httpTestingController.expectOne({method: 'GET', url: `${listUrl}?left_index=УИВТ`});

      expect(req.request.method).toEqual('GET');
      expect(req.request.responseType).toEqual('json');

      req.flush(data);
    });
  });

  // TODO: Переделать
  // describe('#downloadNomenclature', () => {
  //   const downloadUrl = `${apiUrl}/download_nomenclature`;

  //   const params = 1;
  //   let dt = {"id": params}
  //   const data = new Blob(['test'], { type: 'application/json' });

  //   it('should return data', () => {
  //     service.downloadNomenclature(params)
  //       .subscribe((response: any) => {
  //         expect(response).toEqual(data);
  //       })

  //     const req = httpTestingController.expectOne({method: 'GET', url: `${downloadUrl}?filters=${encodeURIComponent(JSON.stringify(dt))}`});

  //     expect(req.request.method).toEqual('GET');
  //     expect(req.request.responseType).toEqual('blob');

  //     req.flush(data);
  //   });
  // });

  describe('#deleteNomenclature', () => {
    const deletedUrl = `${apiUrl}/delete_nomenclature`;

    const params = 1;
    const data = 'Номенклатура удалена';

    it('should return data', () => {
      service.deleteNomenclature(params)
        .subscribe((response: any) => {
          expect(response).toEqual(data);
        })

      const req = httpTestingController.expectOne({method: 'DELETE', url: `${deletedUrl}/${params}`});

      expect(req.request.method).toEqual('DELETE');
      expect(req.request.responseType).toEqual('json');

      req.flush(data);
    });
  });

  describe('#createBasedOn', () => {
    const createUrl = `${apiUrl}/create_nomenclature_like`;

    const params = 1;
    const data = {};

    it('should return data', () => {
      service.createBasedOn(params)
        .subscribe((response: any) => {
          expect(response).toEqual(data);
        })

      const req = httpTestingController.expectOne({method: 'GET', url: `${createUrl}/${params}`});

      expect(req.request.method).toEqual('GET');
      expect(req.request.responseType).toEqual('json');

      req.flush(data);
    });
  });

  describe('#getCurrentNom', () => {
    const getUrl = `${apiUrl}/nomenclature_detail`;

    let dt = {"left_index": 'УИВТ'}
    const data = {};

    it('should return data', () => {
      service.getCurrentNom()
        .subscribe((response: any) => {
          expect(response).toEqual(data);
        })

      const req = httpTestingController.expectOne({method: 'GET', url: `${getUrl}?filters=${encodeURIComponent(JSON.stringify(dt))}`});

      expect(req.request.method).toEqual('GET');
      expect(req.request.responseType).toEqual('json');

      req.flush(data);
    });
  });

});
