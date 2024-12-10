import { ScoreDetails } from "../scores/score-details";
import { StudentDetails } from "../students/student-detail";

export interface HouseDetails {
    id: number,
    name: string,
    totalScore: number,
    students: StudentDetails[],
    scores: ScoreDetails[]
}