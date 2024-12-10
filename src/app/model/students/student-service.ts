import { Injectable } from "@angular/core";
import { StudentDetails } from "./student-detail";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StudentSummary } from "./student-summary";
import { HttpConfig } from "../../config/http-config";

@Injectable({
    providedIn: 'root'
})

export class StudentService{
    private urlExtension: string = "/student";
    constructor(private http: HttpClient){} // ci permette di fare chiamate http al server

    getStudents(): Observable<StudentSummary[]>{
        return this.http.get<StudentSummary[]>(`${HttpConfig.apiUrl}${this.urlExtension}`);
    }
    getStudent(id: number): Observable<StudentDetails>{
        return this.http.get<StudentDetails>(`${HttpConfig.apiUrl}${this.urlExtension}/${id}`);
    }
}