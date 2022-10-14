import { EmployeeService } from './employee.service';

import { environment } from 'src/environments/environment';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        EmployeeService
      ]
    });

    service = TestBed.inject(EmployeeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });


  let apiUrl = `${environment.apiUrl}`;

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('#findUsers', () => {
    const empUrl = `${apiUrl}/fio_tn_search`;

    let params = 'Alex';
    let dt = { 'text': params };

    const data = {
      fio: 'Иванова Елена Константиновна',
      tn: 12345,
      prof: 'Рабочий'
    };
    const emptyData = {};

    it('should return users info', () => {
      service.findUsers(params)
        .subscribe((response: any) => {
          expect(response).toEqual(data);
        })

      const req = httpTestingController.expectOne({method: 'GET', url: `${empUrl}?filters=${encodeURIComponent(JSON.stringify(dt))}`});

      expect(req.request.method).toEqual('GET');
      expect(req.request.responseType).toEqual('json');

      req.flush(data);
    });

    it('should return empty object', () => {
      service.findUsers(params)
        .subscribe((response: any) => {
          expect(response).toEqual(emptyData);
        })

      const req = httpTestingController.expectOne({method: 'GET', url: `${empUrl}?filters=${encodeURIComponent(JSON.stringify(dt))}`});

      expect(req.request.method).toEqual('GET');
      expect(req.request.responseType).toEqual('json');

      req.flush(data);
    });
  });

});
