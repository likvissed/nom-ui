import { StoreModule } from '@ngrx/store';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptnameComponent } from './deptname.component';

import { deptnameReducer, DEPTNAME_FEATURE_KEY } from '@store/deptname/deptname-reducers';

describe('DeptnameComponent', () => {
  let component: DeptnameComponent;
  let fixture: ComponentFixture<DeptnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(DEPTNAME_FEATURE_KEY, deptnameReducer)
      ],
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
