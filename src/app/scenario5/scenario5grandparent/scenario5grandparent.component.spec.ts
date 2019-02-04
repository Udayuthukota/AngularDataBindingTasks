import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5grandparentComponent } from './scenario5grandparent.component';

describe('Scenario5grandparentComponent', () => {
  let component: Scenario5grandparentComponent;
  let fixture: ComponentFixture<Scenario5grandparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5grandparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5grandparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
