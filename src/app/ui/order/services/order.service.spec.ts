import { ConfirmationService } from 'primeng/api';
import { ORDER_FEATURE_KEY, orderReducer } from './../store/reducers';
import { OrderComponent } from './../page/order/order.component';
import { GetOrdersResponseInterface } from './../types/get-orders-response.interface';
import { ORDERS_STUB } from './../store/order.stub';
import { OrderService } from './order.service';

import { environment } from 'src/environments/environment';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StoreModule } from '@ngrx/store';

describe('OrderService', () => {
  let fixture: ComponentFixture<OrderComponent>;
  let component: OrderComponent;
  let service: OrderService;
  let confirmationService: ConfirmationService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(ORDER_FEATURE_KEY, orderReducer)
      ],
      providers: [
        OrderService,
        ConfirmationService
      ],
      declarations: [
        OrderComponent
      ]
    }).compileComponents();

    service = TestBed.inject(OrderService);
    confirmationService = TestBed.inject(ConfirmationService);

    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
  });

  let apiUrl = `${environment.apiUrl}`;

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('#getOrders', () => {
    const getOrdersUrl = `${apiUrl}/orders_list`
    const data = {
      orders: [
        ORDERS_STUB,
        ORDERS_STUB,
        ORDERS_STUB
      ],
      data_filters: {
        duration_types: [
          {
            id: 1,
            duration: "Постоянно"
          }
        ]
      }
    };

    it('should return data', () => {
      service.getOrders()
        .subscribe((response) => { // GetOrdersResponseInterface
          expect(response).toEqual(data);
        })

      const req = httpTestingController.expectOne({method: 'GET', url: getOrdersUrl});

      req.flush(data);
    });

    it('should call http with the expected url', () => {
      service.getOrders()
        .subscribe((response: any) => {
          expect(response.orders).toEqual(data.orders);
          expect(response).toBe(data);
        })

        const req = httpTestingController.expectOne({method: 'GET', url: getOrdersUrl});

        expect(req.request.method).toEqual('GET');
        expect(req.request.responseType).toEqual('json');
        expect(req.request.url).toEqual(getOrdersUrl);

        req.flush(data);
    });
  });

  describe('#deleteOrder', () => {
    const params = {
      id: 333,
      name: 'Приказ №2'
    };
    const dataSuccess = {
      result: 'Приказ успешно удалён'
    };

    it('should be deleted record', () => {
      spyOn(service, 'deleteOrder').and.callThrough();
      service.deleteOrder(params.id)
        .subscribe(response => {
          expect(response).toEqual(dataSuccess);
        })

      component.onDeleteOrder(params.id, params.name);

      expect(service.deleteOrder).toHaveBeenCalled();
    });

    it('should be not deleted record', async() => {
      spyOn(service, 'deleteOrder');
      spyOn(confirmationService, 'confirm').and.callFake((confirmation: any) => {return confirmation.reject()});

      component.onDeleteOrder(params.id, params.name);
      expect(service.deleteOrder).not.toHaveBeenCalled();
    });
  });
});
