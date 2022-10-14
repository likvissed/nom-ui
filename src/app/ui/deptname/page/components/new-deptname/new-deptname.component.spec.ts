import { FormBuilder } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

import { NewDeptnameComponent } from './new-deptname.component';

describe('NewDeptnameComponent', () => {
  let component: NewDeptnameComponent;
  let fixture: ComponentFixture<NewDeptnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeptnameComponent ],
      roviders: [
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
