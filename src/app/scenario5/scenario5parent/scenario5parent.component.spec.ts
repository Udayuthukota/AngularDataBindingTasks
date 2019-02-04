import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario5parentComponent } from './scenario5parent.component';

describe('Scenario5parentComponent', () => {
  let component: Scenario5parentComponent;
  let fixture: ComponentFixture<Scenario5parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario5parentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
