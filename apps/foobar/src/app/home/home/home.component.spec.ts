import { mock, instance } from 'ts-mockito';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '@myorgworkspace/ui';
import { MockComponent } from 'ng-mocks';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const router = mock(Router);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, MockComponent(ButtonComponent)],
      providers: [
        {
          provide: Router,
          userValue: instance(router)
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
