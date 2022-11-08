import { AuthHelperStub, AuthHelper } from '@iss/ng-auth-center';

import { MessageService } from 'primeng/api';

import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { NOMENCLATURE_FEATURE_KEY, nomenclatureReducer } from '@store/nomenclature/nomenclature-reducers';

import { NewNomenclatureComponent } from './new-nomenclature.component';
import { DraftService } from '../../../services/draft.service';

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
        DraftService,
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

    component.leftIndex = ['741', '742'];
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
