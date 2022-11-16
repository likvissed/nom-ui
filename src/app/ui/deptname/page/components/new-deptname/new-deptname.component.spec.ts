import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

import { NewDeptnameComponent } from './new-deptname.component';
import { deptnameReducer, DEPTNAME_FEATURE_KEY } from '@store/deptname/deptname-reducers';

describe('NewDeptnameComponent', () => {
  let component: NewDeptnameComponent;
  let fixture: ComponentFixture<NewDeptnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeptnameComponent ],
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(DEPTNAME_FEATURE_KEY, deptnameReducer)
      ],
      providers: [
        DynamicDialogRef,
        DynamicDialogConfig,
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeptnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
