import { DeptnameServiceModule } from './deptname.service.module';
import { TestBed } from '@angular/core/testing';

describe('DeptnameServiceModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptnameServiceModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(DeptnameServiceModule).toBeTruthy();
  });
});
