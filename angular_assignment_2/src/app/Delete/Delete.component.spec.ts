import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeleteComponent } from './Delete.component';

describe('EmployeeDeleteComponent', () => {
  let component: EmployeeDeleteComponent;
  let fixture: ComponentFixture<EmployeeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
