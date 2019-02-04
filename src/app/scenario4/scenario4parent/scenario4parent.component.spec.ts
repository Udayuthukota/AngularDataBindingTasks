import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario4parentComponent } from './scenario4parent.component';

describe('Scenario4parentComponent', () => {
  let component: Scenario4parentComponent;
  let fixture: ComponentFixture<Scenario4parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario4parentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
