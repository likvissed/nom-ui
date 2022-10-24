import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DraftService } from './draft.service';

import { NOMENCLATURE_STUB } from '../stubs/nomenclature.stub';

describe('DraftService', () => {
  let service: DraftService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DraftService
      ]
    });
    
    service = TestBed.inject(DraftService);
    httpTestingController = TestBed.inject(HttpTestingController);
});

  const nameKey = 'draftNomenclature';

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('#onSet and onGet', () => {
    const value = NOMENCLATURE_STUB;

    it('should set item', () => {
      service.onSet(value);

      expect(service.onGet().toEqual(value);
    });
  });
});