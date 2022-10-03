import { USER_STUB } from './../store/user.stub';
import { USER_FEATURE_KEY, userReducer } from './../store/user-reducers';

import { environment } from 'src/environments/environment';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StoreModule } from '@ngrx/store';
import { UserService } from './user.service';

describe('OrderService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(USER_FEATURE_KEY, userReducer)
      ],
      providers: [
        UserService
      ],
      declarations: [
      ]
    }).compileComponents();

    service = TestBed.inject(UserService);

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
});
