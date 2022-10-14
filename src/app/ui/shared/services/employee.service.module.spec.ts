import { TestBed } from '@angular/core/testing';

import { EmployeeServiceModule } from './employee.service.module';

describe('ArticleModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeServiceModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(EmployeeServiceModule).toBeTruthy();
  });
});
