import { DURATIONS_STUB } from '../../../store/duration.stub';
import { ORDER_FEATURE_KEY, orderReducer } from './../../../store/reducers';
import { StoreModule } from '@ngrx/store';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderComponent } from './new-order.component';

describe('NewOrderComponent', () => {
  let component: NewOrderComponent;
  let fixture: ComponentFixture<NewOrderComponent>;

  let formBuilder: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(ORDER_FEATURE_KEY, orderReducer),
        FormsModule,
        ReactiveFormsModule
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
    fixture = TestBed.createComponent(NewOrderComponent);
    component = fixture.componentInstance;

    formBuilder = TestBed.inject(FormBuilder);
    component.durationTypes = DURATIONS_STUB;
     // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
