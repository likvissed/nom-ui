import { NomenclatureService } from './nomenclature.service';

import { TestBed } from '@angular/core/testing';

describe('NomenclatureService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomenclatureService],
    }).compileComponents();
  });

  it('should create', () => {
    expect(NomenclatureService).toBeTruthy();
  });
});
