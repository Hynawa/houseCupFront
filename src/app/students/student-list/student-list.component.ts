import { Component, OnInit } from '@angular/core';
import { StudentDetails } from '../../model/students/student-detail';
import { StudentService } from '../../model/students/student-service';
import { RouterModule } from '@angular/router';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-student-list',
  imports: [RouterModule, StudentDetailsComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

students!: StudentDetails[];

constructor(private studentService: StudentService) {
}

  ngOnInit(): void {
    // this.studentService.getStudentDetails().subscribe(sl => {
    //   console.log(sl);
    //   this.students = sl;
    // });

    this.students = this.studentService.getStudentDetails();


    //il subscribe è il modo in cui gestisco il risultato dell'observable, riceve i risultati quando arriveranno
  }


}
