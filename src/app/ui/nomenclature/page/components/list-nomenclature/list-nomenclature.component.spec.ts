import { ORDER_FEATURE_KEY, orderReducer } from '@store/order/order-reducers';

import { StoreModule } from '@ngrx/store';

import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthHelper, AuthHelperStub } from '@iss/ng-auth-center';

import { ListNomenclatureComponent } from './list-nomenclature.component';

describe('ListNomenclatureComponent', () => {
  let component: ListNomenclatureComponent;
  let fixture: ComponentFixture<ListNomenclatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNomenclatureComponent ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(ORDER_FEATURE_KEY, orderReducer),
        RouterTestingModule
      ],
      providers: [
        { provide: AuthHelper, useClass: AuthHelperStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
