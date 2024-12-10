import { Injectable } from "@angular/core";
import { ScoreDetails } from "./score-details";

@Injectable({
    providedIn: 'root'
})

export class ScoreService {
    private scoreDetails: ScoreDetails[] = [
        {
            id: 1,
            points: 100,
            motivation: "perchè sì",
            assignDate: "2024-12-08",
            houseId: 4,
            studentId: 1,
            studentFullname: "Mirko Risuleo",
            teacher: "Riccardo Audano"
        },
        {
            id: 2,
            points: 150,
            motivation: "perchè no?",
            assignDate: "2024-10-07",
            houseId: 4,
            studentId: 2,
            studentFullname: "Pietro Marinari",
            teacher: "Riccardo Audano"
        },
        {
            id: 3,
            points: 70,
            motivation: "così",
            assignDate: "2024-10-10",
            houseId: 2,
            studentId: 3,
            studentFullname: "Danilo Vulpiani",
            teacher: "Riccardo Audano"
        },
        {
            id: 4,
            points: 200,
            motivation: "ci sta",
            assignDate: "2024-09-25",
            houseId: 3,
            studentId: 4,
            studentFullname: "Joshua Castellani",
            teacher: "Riccardo Audano"
        },
        { 
            id: 5,
            points: 200,
            motivation: "a caso",
            assignDate: "2024-11-1",
            houseId: 1,
            studentId: 5,
            studentFullname: "Marco Falconetti",
            teacher: "Riccardo Audano"
        }, 
        {
            id: 6,
            points: 130,
            motivation: "per apparare",
            assignDate: "2024-10-10",
            houseId: 2,
            studentId: 3,
            studentFullname: "Danilo Vulpiani",
            teacher: "Riccardo Audano"
        }
    ];

    getScoreDetails() : ScoreDetails[] {
        return this.scoreDetails;
    }
}