import { Injectable } from "@angular/core";
import { StudentDetails } from "./student-detail";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class StudentService{

    constructor(private http:HttpClient){} //ci permette di fare chiamate http al server

    private studentDetails: StudentDetails[] = [
        {
            id: 1,
            firstname: "Mirko", 
            surname: "Risuleo",
            dob: "2000-07-13",
            sex: "m",
            isPref: false,
            background: "bho", 
            education: "boh",
            classId: 130,
            houseId: 4
        },
        {
            id: 2,
            firstname: "Pietro", 
            surname: "Marinari",
            dob: "2000-01-01",
            sex: "m",
            isPref: true,
            background: "bho1", 
            education: "boh2",
            classId: 130,
            houseId: 4
        },
        {
            id: 3,
            firstname: "Danilo", 
            surname: "Vulpiani",
            dob: "2000-05-05",
            sex: "m",
            isPref: false,
            background: "bho", 
            education: "boh",
            classId: 130,
            houseId: 2
        },
        {
            id: 4,
            firstname: "Joshua", 
            surname: "Castellani",
            dob: "1997-05-09",
            sex: "m",
            isPref: false,
            background: "bho", 
            education: "boh",
            classId: 130,
            houseId: 3
        },
        {
            id: 5,
            firstname: "Marco", 
            surname: "Falconetti",
            dob: "2003-01-05",
            sex: "m",
            isPref: false,
            background: "bho", 
            education: "boh",
            classId: 130,
            houseId: 1
        }
    ];

    getStudentDetails(): StudentDetails[] {
        return this.studentDetails;
    }


    // getStudentDetails(): Observable<StudentDetails[]>{
    //     return this.http.get<StudentDetails[]>("http://localhost:8080/student");
    // }
}