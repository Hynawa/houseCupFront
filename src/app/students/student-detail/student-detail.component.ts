import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../model/students/student-service';
import { StudentDetails } from '../../model/students/student-detail';
import { StudentDetailsCard } from '../student-details-card/student-details-card.component';

@Component({
  selector: 'app-student-detail',
  imports: [StudentDetailsCard],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent implements OnInit{
  studentId!: number;
  detail!: StudentDetails;
  constructor(private route: ActivatedRoute, private router:Router, private studService: StudentService){
    console.log("costruendo StudentDetail");
  }
  ngOnInit(): void {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'));
    this.studService.getStudent(this.studentId).subscribe({
      next: s => {this.detail = s; console.log(s);},
      error: err => console.log(err)
    })
  }
  goToList() {
    this.router.navigate(['students']);
    }
}