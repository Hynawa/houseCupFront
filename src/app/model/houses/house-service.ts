import { Injectable } from "@angular/core";
import { HouseDetails } from "./house-details";
import { ScoreDetails } from "../scores/score-details";
import { ScoreService } from "../scores/score-service";

@Injectable({
    providedIn: 'root'
})

export class HouseService {
    private houses : HouseDetails[] = [
        {
            id: 1,
            name: "Gryffindor",
            students: [],
            scores: [],
            totalScore: 0,
        },
        {
            id: 2,
            name: "Hufflepuff",
            students: [],
            scores: [],
            totalScore: 0,
        },
        {
            id: 3,
            name: "Ravenclaw",
            students: [],
            scores: [],
            totalScore: 0,
        },
        {
            id: 4,
            name: "Slytherin",
            students: [],
            scores: [],
            totalScore: 0,
        }
    ];

    constructor(private scoreService:ScoreService) {
        for(let value of this.houses) {
            value.scores = this.assignScore(value.id)
            value.totalScore = this.getTotalScore(value.scores);
        };
    }

    assignScore(houseId:number) {
        let scoreList: ScoreDetails[] = this.scoreService.getScoreDetails();
        let scores: ScoreDetails[] = [];
        for(let score of scoreList) {
            if(houseId === score.houseId){
                scores.push(score)
            }
        }
        return scores;
    }

    getTotalScore(scores: ScoreDetails[]) {
        let totalScore: number = 0;
        for(let value of scores) {
            totalScore += value.points;
        }
        return totalScore;
    }

    getHousesDetails() : HouseDetails[] {
        return this.houses;
    }
}