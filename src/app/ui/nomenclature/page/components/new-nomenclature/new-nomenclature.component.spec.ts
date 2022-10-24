import { AuthHelperStub, AuthHelper } from '@iss/ng-auth-center';

import { MessageService } from 'primeng/api';

import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { NOMENCLATURE_FEATURE_KEY } from '../../../store/nomenclature-reducers';
import { nomenclatureReducer } from '../../../store/nomenclature-reducers';

import { NewNomenclatureComponent } from './new-nomenclature.component';

describe('NewNomenclatureComponent', () => {
  let component: NewNomenclatureComponent;
  let fixture: ComponentFixture<NewNomenclatureComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNomenclatureComponent ],
      providers: [
        FormBuilder,
        MessageService,
        { provide: AuthHelper, useClass: AuthHelperStub }
      ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(NOMENCLATURE_FEATURE_KEY, nomenclatureReducer),
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
