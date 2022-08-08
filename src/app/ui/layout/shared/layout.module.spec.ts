import { LayoutModule } from './layout.module';
import { TestBed } from '@angular/core/testing';

describe('LayoutModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(LayoutModule).toBeTruthy();
  });
});
