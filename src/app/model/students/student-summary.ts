import { ScoreDetails } from "../scores/score-details";

export interface StudentSummary{
    id: number;
    firstname: string;
    surname: string;
    scores: ScoreDetails[];
    totalScore: number;
}