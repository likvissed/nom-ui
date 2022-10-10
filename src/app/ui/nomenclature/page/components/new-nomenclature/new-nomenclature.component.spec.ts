import { AuthHelperStub, AuthHelper } from '@iss/ng-auth-center';
import { MessageService } from 'primeng/api';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { NOMENCLATURE_FEATURE_KEY } from './../../../store/reducers';
import { FormBuilder } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewNomenclatureComponent } from './new-nomenclature.component';
import { nomenclatureReducer } from '../../../store/reducers';

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
