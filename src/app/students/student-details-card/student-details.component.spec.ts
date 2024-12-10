import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsCard } from './student-details-card.component';

describe('StudentDetailsComponent', () => {
  let component: StudentDetailsCard;
  let fixture: ComponentFixture<StudentDetailsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDetailsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
