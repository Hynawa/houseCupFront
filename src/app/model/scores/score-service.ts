import { Injectable } from "@angular/core";
import { ScoreDetails } from "./score-details";

@Injectable({
    providedIn: 'root'
})

export class ScoreService {
    
    getScoreDetails() : ScoreDetails[] {
        return [];
    }
    
}