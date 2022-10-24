import { SharedModule } from './shared.module';

import { TestBed } from '@angular/core/testing';

describe('SharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(SharedModule).toBeTruthy();
  });
});
