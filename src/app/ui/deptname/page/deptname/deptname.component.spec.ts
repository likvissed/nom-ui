import { StoreModule } from '@ngrx/store';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeptnameComponent } from './deptname.component';

import { DEPTNAME_FEATURE_KEY } from './../../store/deptname-reducers';
import { deptnameReducer } from '../../store/deptname-reducers';

describe('DeptnameComponent', () => {
  let component: DeptnameComponent;
  let fixture: ComponentFixture<DeptnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(DEPTNAME_FEATURE_KEY, deptnameReducer)
      ],
      declarations: [ DeptnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
