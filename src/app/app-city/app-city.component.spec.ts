import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCityComponent } from './app-city.component';

describe('AppCityComponent', () => {
  let component: AppCityComponent;
  let fixture: ComponentFixture<AppCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
