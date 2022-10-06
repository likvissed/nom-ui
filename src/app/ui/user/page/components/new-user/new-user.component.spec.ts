import { StoreModule } from '@ngrx/store';
import { USER_FEATURE_KEY } from './../../../store/user-reducers';
import { FormBuilder } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewUserComponent } from './new-user.component';
import { userReducer } from '../../../store/user-reducers';

describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(USER_FEATURE_KEY, userReducer)
      ],
      declarations: [ NewUserComponent ],
      providers: [
        DynamicDialogRef,
        DynamicDialogConfig,
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
