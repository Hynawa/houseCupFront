import { StudentDetails } from "../students/student-detail";

export interface ScoreDetails {
    id: number,
    points: number,
    motivation: string,
    assignDate: string,
    houseId: number,
    studentId: number,
    studentFullname: string,
    teacher: string
}