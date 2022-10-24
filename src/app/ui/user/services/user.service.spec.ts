import { ConfirmationService } from 'primeng/api';

import { USER_STUB } from './../store/user.stub';
import { USER_FEATURE_KEY, userReducer } from './../store/user-reducers';

import { environment } from 'src/environments/environment';

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StoreModule } from '@ngrx/store';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;
  let confirmationService: ConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(USER_FEATURE_KEY, userReducer)
      ],
      providers: [
        UserService,
        ConfirmationService
      ],
      declarations: [
      ]
    }).compileComponents();

    service = TestBed.inject(UserService);
    confirmationService = TestBed.inject(ConfirmationService);

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  let apiUrl = `${environment.apiUrl}`;

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  describe('#getUsers', () => {
    const getUsersUrl = `${apiUrl}/users_list`
    const data = {
      users: [
        USER_STUB,
        USER_STUB
      ],
      filters: {
        roles: [
          {
            id: 1,
            role: "admin",
            full_role: "Администратор"
          },
          {
            id: 2,
            role: "clerk",
            full_role: "Делопроизводитель"
          }
        ]
      }
    };

    it('should return data', () => {
      service.getUsers()
        .subscribe((response) => {
          expect(response).toEqual(data);
        })

      const req = httpTestingController.expectOne({method: 'GET', url: getUsersUrl});

      req.flush(data);
    });

    it('should call http with the expected url', () => {
      service.getUsers()
        .subscribe((response: any) => {
          expect(response.users).toEqual(data.users);
          expect(response).toBe(data);
        })

        const req = httpTestingController.expectOne({method: 'GET', url: getUsersUrl});

        expect(req.request.method).toEqual('GET');
        expect(req.request.responseType).toEqual('json');
        expect(req.request.url).toEqual(getUsersUrl);

        req.flush(data);
    });
  });

  describe('#addUser', () => {
    const addUserUrl = `${apiUrl}/add_user`
    const data = {
     tn: USER_STUB.tn,
     role_id: USER_STUB.role_id
    };
    const dataSuccess = {
      result: `Пользователь ${USER_STUB.fio} добавлен`
    };

    it('should return data', () => {
      service.addUser(USER_STUB.id)
        .subscribe((response) => {
          expect(response).toEqual(dataSuccess);
        })

      const req = httpTestingController.expectOne({method: 'POST', url: addUserUrl});

      req.flush(data);
    });

    it('should call http with the expected url', () => {
      service.addUser(USER_STUB.id)
        .subscribe((response: any) => {
          expect(response).toEqual(dataSuccess);
        })

        const req = httpTestingController.expectOne({method: 'POST', url: addUserUrl});

        expect(req.request.method).toEqual('POST');
        expect(req.request.responseType).toEqual('json');
        expect(req.request.url).toEqual(addUserUrl);

        req.flush(data);
    });
  });

  describe('#updateUser', () => {
    const updateUserUrl = `${apiUrl}/change_user`
    const data = {
     tn: USER_STUB.tn,
     role_id: USER_STUB.role_id
    };
    const dataSuccess = {
      result: 'Информация обновлена'
    };

    it('should return data', () => {
      service.updateUser(USER_STUB.id)
        .subscribe((response) => {
          expect(response).toEqual(dataSuccess);
        })

      const req = httpTestingController.expectOne({method: 'PUT', url: updateUserUrl});

      req.flush(data);
    });

    it('should call http with the expected url', () => {
      service.getUsers()
        .subscribe((response: any) => {
          expect(response).toEqual(dataSuccess);
        })

        const req = httpTestingController.expectOne({method: 'PUT', url: updateUserUrl});

        expect(req.request.method).toEqual('PUT');
        expect(req.request.responseType).toEqual('json');
        expect(req.request.url).toEqual(updateUserUrl);

        req.flush(data);
    });
  });

  describe('#deleteUser', () => {
    const params = {
      id: USER_STUB.id
    };
    const dataSuccess = {
      result: `Пользователь ${USER_STUB.fio} удален`
    };

    it('should be deleted record', () => {
      spyOn(service, 'deleteUser').and.callThrough();
      service.deleteUser(params.id)
        .subscribe(response => {
          expect(response).toEqual(dataSuccess);
        })

      expect(service.deleteUser).toHaveBeenCalled();
    });

    it('should be not deleted record', async() => {
      spyOn(service, 'deleteUser');
      spyOn(confirmationService, 'confirm').and.callFake((confirmation: any) => {return confirmation.reject()});

      expect(service.deleteUser).not.toHaveBeenCalled();
    });
  });
});
