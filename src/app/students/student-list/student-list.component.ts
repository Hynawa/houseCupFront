import { Component, OnInit } from '@angular/core';
import { StudentDetails } from '../../model/students/student-detail';
import { StudentService } from '../../model/students/student-service';
import { RouterModule } from '@angular/router';
import { StudentDetailsCard } from '../student-details-card/student-details-card.component';
import { StudentSummary } from '../../model/students/student-summary';

@Component({
  selector: 'app-student-list',
  imports: [RouterModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

students!: StudentSummary[];

constructor(private studentService: StudentService) {
}

  ngOnInit(): void {
    // this.studentService.getStudentDetails().subscribe(sl => {
    //   console.log(sl);
    //   this.students = sl;
    // });

    this.studentService.getStudents().subscribe({
      next: sts => {
        this.students = sts.map(s => {
          return {...s, totalScore: s.scores.reduce((a, s) => a + s.points, 0)}
        });
      },
      error: er => console.log(er)
    });

    //il subscribe è il modo in cui gestisco il risultato dell'observable, riceve i risultati quando arriveranno
  }
}
