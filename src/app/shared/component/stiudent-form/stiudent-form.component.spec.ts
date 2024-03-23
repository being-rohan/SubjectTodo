import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StiudentFormComponent } from './stiudent-form.component';

describe('StiudentFormComponent', () => {
  let component: StiudentFormComponent;
  let fixture: ComponentFixture<StiudentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StiudentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StiudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
