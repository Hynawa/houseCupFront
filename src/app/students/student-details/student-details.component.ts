import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentDetails } from '../../model/students/student-detail';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  @Input({
    required: true
  })
  detail: StudentDetails | null = null;
}
