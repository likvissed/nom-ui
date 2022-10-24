import { NomenclatureModule } from './nomenclature.module';

import { TestBed } from '@angular/core/testing';

describe('NomenclatureModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomenclatureModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(NomenclatureModule).toBeTruthy();
  });
});
