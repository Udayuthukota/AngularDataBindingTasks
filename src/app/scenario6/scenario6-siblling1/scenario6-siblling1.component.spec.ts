import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6Siblling1Component } from './scenario6-siblling1.component';

describe('Scenario6Siblling1Component', () => {
  let component: Scenario6Siblling1Component;
  let fixture: ComponentFixture<Scenario6Siblling1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6Siblling1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6Siblling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
