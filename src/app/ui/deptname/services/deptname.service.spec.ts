import { DEPTNAME_STUB } from './../store/deptname-stub';
import { deptnameReducer, DEPTNAME_FEATURE_KEY } from '@store/deptname/deptname-reducers';

import { DeptnameService } from './deptname.service';

import { ConfirmationService } from 'primeng/api';

import { environment } from 'src/environments/environment';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StoreModule } from '@ngrx/store';

describe('DeptnameService', () => {
  let service: DeptnameService;
  let httpTestingController: HttpTestingController;
  let confirmationService: ConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(DEPTNAME_FEATURE_KEY, deptnameReducer)
      ],
      providers: [
        DeptnameService,
        ConfirmationService
      ],
      declarations: [
      ]
    }).compileComponents();

    service = TestBed.inject(DeptnameService);
    confirmationService = TestBed.inject(ConfirmationService);

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  let apiUrl = `${environment.apiUrl}`;

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  describe('#getDeptnames', () => {
    const pathUrl = `${apiUrl}/deptnames_list`
    const data = {
      deptnames: [
        DEPTNAME_STUB,
        DEPTNAME_STUB
      ]
    };

    it('should return data', () => {
      service.getDeptnames()
        .subscribe((response) => {
          expect(response).toEqual(data);
        })

      const req = httpTestingController.expectOne({method: 'GET', url: pathUrl});

      req.flush(data);
    });

    it('should call http with the expected url', () => {
      service.getDeptnames()
        .subscribe((response: any) => {
          expect(response.users).toEqual(data.deptnames);
          expect(response).toBe(data);
        })

        const req = httpTestingController.expectOne({method: 'GET', url: pathUrl});

        expect(req.request.method).toEqual('GET');
        expect(req.request.responseType).toEqual('json');
        expect(req.request.url).toEqual(pathUrl);

        req.flush(data);
    });
  });

  describe('#addDeptname', () => {
    const pathUrl = `${apiUrl}/add_deptname`
    const data = DEPTNAME_STUB;
    const dataSuccess = {
      result: `Участок делопроизводства ${DEPTNAME_STUB.deptname} добавлен`
    };

    it('should return data', () => {
      service.addDeptname(data)
        .subscribe((response) => {
          expect(response).toEqual(dataSuccess);
        })

      const req = httpTestingController.expectOne({method: 'POST', url: pathUrl});

      req.flush(data);
    });

    it('should call http with the expected url', () => {
      service.addDeptname(data)
        .subscribe((response: any) => {
          expect(response).toEqual(dataSuccess);
        })

        const req = httpTestingController.expectOne({method: 'POST', url: pathUrl});

        expect(req.request.method).toEqual('POST');
        expect(req.request.responseType).toEqual('json');
        expect(req.request.url).toEqual(pathUrl);

        req.flush(data);
    });
  });

  describe('#updateDeptname', () => {
    const pathUrl = `${apiUrl}/change_deptname`
    const data = DEPTNAME_STUB;
    const dataSuccess = {
      result: 'Участок делопроизводства изменён'
    };

    it('should return data', () => {
      service.updateDeptname(data)
        .subscribe((response) => {
          expect(response).toEqual(dataSuccess);
        })

      const req = httpTestingController.expectOne({method: 'PUT', url: pathUrl});

      req.flush(data);
    });

    it('should call http with the expected url', () => {
      service.updateDeptname(data)
        .subscribe((response: any) => {
          expect(response).toEqual(dataSuccess);
        })

        const req = httpTestingController.expectOne({method: 'PUT', url: pathUrl});

        expect(req.request.method).toEqual('PUT');
        expect(req.request.responseType).toEqual('json');
        expect(req.request.url).toEqual(pathUrl);

        req.flush(data);
    });
  });

  describe('#deleteDeptname', () => {
    const params = {
      id: DEPTNAME_STUB.id
    };
    const dataSuccess = {
      result: `Участок ${DEPTNAME_STUB.deptname} удален`
    };

    it('should be deleted record', () => {
      spyOn(service, 'deleteDeptname').and.callThrough();
      service.deleteDeptname(params.id)
        .subscribe(response => {
          expect(response).toEqual(dataSuccess);
        })

      expect(service.deleteDeptname).toHaveBeenCalled();
    });

    it('should be not deleted record', async() => {
      spyOn(service, 'deleteDeptname');
      spyOn(confirmationService, 'confirm').and.callFake((confirmation: any) => {return confirmation.reject()});

      expect(service.deleteDeptname).not.toHaveBeenCalled();
    });
  });
});
