import { StoreModule } from '@ngrx/store';

import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { CurrentNomenclatureComponent } from './current-nomenclature.component';

import { NOMENCLATURE_FEATURE_KEY } from './../../../store/reducers';
import { nomenclatureReducer } from '../../../store/reducers';

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
