import { StoreModule } from '@ngrx/store';

import { userReducer, USER_FEATURE_KEY } from '@store/user/user-reducers';

import { FormBuilder } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

import { NewUserComponent } from './new-user.component';

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
    // fixture.detectChanges();
    component.roles = [
      { id: 1, role: 'admin', full_role: 'Администратор' }
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
