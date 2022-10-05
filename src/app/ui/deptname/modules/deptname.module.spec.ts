import { DeptnameModule } from './deptname.module';
import { UserModule } from './user.module';
import { TestBed } from '@angular/core/testing';

describe('DeptnameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptnameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(DeptnameModule).toBeTruthy();
  });
});
