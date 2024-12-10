import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentDetails } from '../../model/students/student-detail';

@Component({
  selector: 'app-student-details-card',
  imports: [],
  templateUrl: './student-details-card.component.html',
  styleUrl: './student-details-card.component.css'
})
export class StudentDetailsCard {

  @Input({
    required: true
  })

  detail: StudentDetails | null = null;
}