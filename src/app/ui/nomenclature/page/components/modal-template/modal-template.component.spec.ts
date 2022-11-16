import { nomenclatureReducer } from '@store/nomenclature/nomenclature-reducers';

import { StoreModule } from '@ngrx/store';

import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTemplateComponent } from './modal-template.component';
import { NOMENCLATURE_FEATURE_KEY } from '@store/nomenclature/nomenclature-reducers';

describe('ModalTemplateComponent', () => {
  let component: ModalTemplateComponent;
  let fixture: ComponentFixture<ModalTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTemplateComponent ],
      providers: [
        DynamicDialogRef,
        DynamicDialogConfig
      ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(NOMENCLATURE_FEATURE_KEY, nomenclatureReducer),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
