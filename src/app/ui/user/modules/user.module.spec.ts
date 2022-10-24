import { UserModule } from './user.module';

import { TestBed } from '@angular/core/testing';

describe('UserModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(UserModule).toBeTruthy();
  });
});
