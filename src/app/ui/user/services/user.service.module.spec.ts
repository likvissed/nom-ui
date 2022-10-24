import { UserServiceModule } from './user.service.module';

import { TestBed } from '@angular/core/testing';

describe('UserServiceModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserServiceModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(UserServiceModule).toBeTruthy();
  });
});
