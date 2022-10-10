import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormBuilder } from '@angular/forms';
import { NOMENCLATURE_FEATURE_KEY } from './../../../store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalNomenclatureDetailComponent } from './modal-nomenclature-detail.component';
import { nomenclatureReducer } from '../../../store/reducers';

describe('ModalNomenclatureDetailComponent', () => {
  let component: ModalNomenclatureDetailComponent;
  let fixture: ComponentFixture<ModalNomenclatureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(NOMENCLATURE_FEATURE_KEY, nomenclatureReducer),
        RouterTestingModule
      ],
      declarations: [ ModalNomenclatureDetailComponent ],
      providers: [
        DynamicDialogRef,
        DynamicDialogConfig,
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNomenclatureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
