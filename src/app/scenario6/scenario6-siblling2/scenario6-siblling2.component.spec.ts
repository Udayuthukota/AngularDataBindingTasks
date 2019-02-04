import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6Siblling2Component } from './scenario6-siblling2.component';

describe('Scenario6Siblling2Component', () => {
  let component: Scenario6Siblling2Component;
  let fixture: ComponentFixture<Scenario6Siblling2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6Siblling2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6Siblling2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
