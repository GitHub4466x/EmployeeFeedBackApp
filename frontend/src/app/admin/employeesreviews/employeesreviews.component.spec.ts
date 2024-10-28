import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesreviewsComponent } from './employeesreviews.component';

describe('EmployeesreviewsComponent', () => {
  let component: EmployeesreviewsComponent;
  let fixture: ComponentFixture<EmployeesreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesreviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
