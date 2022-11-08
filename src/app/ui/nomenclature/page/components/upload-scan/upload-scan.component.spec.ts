import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { StoreModule } from '@ngrx/store';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UploadScanComponent } from './upload-scan.component';
import { nomenclatureReducer, NOMENCLATURE_FEATURE_KEY } from '@store/nomenclature/nomenclature-reducers';
import { DraftService } from '../../../services/draft.service';

describe('UploadScanComponent', () => {
  let component: UploadScanComponent;
  let fixture: ComponentFixture<UploadScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadScanComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(NOMENCLATURE_FEATURE_KEY, nomenclatureReducer)
      ],
      providers: [
        DynamicDialogConfig,
        DynamicDialogRef,
        DraftService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
