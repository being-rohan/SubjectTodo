import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLIStComponent } from './student-list.component';

describe('StudentLIStComponent', () => {
  let component: StudentLIStComponent;
  let fixture: ComponentFixture<StudentLIStComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLIStComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLIStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
