import { OrderServiceModule } from './order.service.module';
import { TestBed } from '@angular/core/testing';

describe('OrderServiceModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderServiceModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(OrderServiceModule).toBeTruthy();
  });
});
