import { LoaderService } from './../../../../shared/services/loader.service';
import { ButtonModule } from 'primeng/button';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AuthHelper, AuthHelperStub } from '@iss/ng-auth-center';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let service: LoaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        ButtonModule
      ],
      providers: [
        LoaderService,
        { provide: AuthHelper, useClass: AuthHelperStub }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(LoaderService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
