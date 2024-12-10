import { StudentDetails } from "../students/student-detail";

export interface ScoreDetails {
    id: number;
    points: number;
    motivation: string;
    assignDate: string;
    studentId: number;
    studentFullname: string;
    teacherId: number;
    teacherFullName: string;
    houseId: number;
    houseName: string;
}