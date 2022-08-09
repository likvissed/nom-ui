import { OrderModule } from './order.module';
import { TestBed } from '@angular/core/testing';

describe('OrderModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(OrderModule).toBeTruthy();
  });
});
