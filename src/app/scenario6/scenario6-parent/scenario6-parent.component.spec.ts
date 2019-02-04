import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario6ParentComponent } from './scenario6-parent.component';

describe('Scenario6ParentComponent', () => {
  let component: Scenario6ParentComponent;
  let fixture: ComponentFixture<Scenario6ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario6ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario6ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
