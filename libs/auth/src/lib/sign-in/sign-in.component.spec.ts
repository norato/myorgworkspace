import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@myorgworkspace/ui';
import { mock, instance } from 'ts-mockito';
import { AuthSignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: AuthSignInComponent;
  let fixture: ComponentFixture<AuthSignInComponent>;
  const httpMock = mock(HttpClient);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthSignInComponent],
      imports: [FormsModule, ReactiveFormsModule, UiModule],
      providers: [
        {
          provide: HttpClient,
          useValue: instance(httpMock)
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
