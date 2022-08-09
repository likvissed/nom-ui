import { GetOrdersResponseInterface } from './../types/get-orders-response.interface';
import { ORDERS_STUB } from './../store/order.stub';
import { OrderService } from './order.service';

import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('OrderService', () => {
  let service: OrderService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        OrderService
      ]
    });

    service = TestBed.inject(OrderService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  let apiUrl = `${environment.apiUrl}`;

  it('should create', () => {
    expect(service).toBeTruthy();
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
});
