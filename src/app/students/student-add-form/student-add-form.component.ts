import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HouseDto } from '../../model/houses/house-dto';
import { CourseDto } from '../../model/courses/course-dto';
import { StudentService } from '../../model/students/student-service';
import { HouseService } from '../../model/houses/house-service';
import { CourseService } from '../../model/courses/course-service';

@Component({
  selector: 'app-student-add-form',
  imports: [],
  templateUrl: './student-add-form.component.html',
  styleUrl: './student-add-form.component.css'
})
export class StudentAddFormComponent implements OnInit{
  studentForm!: FormGroup;
  houses: HouseDto[] = [];
  courses: CourseDto[] = [];
  constructor(private houseService: HouseService, private courseService: CourseService, private fb: FormBuilder){}
  ngOnInit(): void {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      
    });
    this.houseService.getHouses().subscribe({
      next: hs => this.houses = hs,
      error: err => console.log(err)
    });
    this.courseService.getCourses().subscribe({
      next: cs => this.courses = cs,
      error: err => console.log(err)
    });
  }
}