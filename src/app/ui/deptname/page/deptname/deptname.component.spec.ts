/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeptnameComponent } from './deptname.component';

describe('DeptnameComponent', () => {
  let component: DeptnameComponent;
  let fixture: ComponentFixture<DeptnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
