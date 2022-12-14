import { nomenclatureReducer } from '@store/nomenclature/nomenclature-reducers';

import { StoreModule } from '@ngrx/store';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentNomenclatureComponent } from './current-nomenclature.component';
import { NOMENCLATURE_FEATURE_KEY } from '@store/nomenclature/nomenclature-reducers';

describe('CurrentNomenclatureComponent', () => {
  let component: CurrentNomenclatureComponent;
  let fixture: ComponentFixture<CurrentNomenclatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentNomenclatureComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(NOMENCLATURE_FEATURE_KEY, nomenclatureReducer)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
