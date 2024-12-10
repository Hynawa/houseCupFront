import { Injectable } from "@angular/core";
import { FirstPlaceDetails } from "./firstPlace-details";
import { HouseDetails } from "../houses/house-details";
import { HouseService } from "../houses/house-service";

@Injectable({
    providedIn: 'root'
})

export class FirstPlaceService {
    private firstPlace:FirstPlaceDetails = {
        house: null
    }

    constructor(private houseService:HouseService){
        this.firstPlace.house = this.getFirstHouse();
    }

    getFirstHouse():HouseDetails {
        let houses:HouseDetails[] = this.houseService.getHousesDetails();
        let bestHouse!: HouseDetails;
        let maxScore : number = -Infinity;
        for(let i=0; i<houses.length; i++) {
            if(houses[i].totalScore > maxScore){
                maxScore = houses[i].totalScore;
                bestHouse = houses[i]
            }
        }
        return bestHouse;
    }

    getFirstPlace():FirstPlaceDetails {
        return this.firstPlace;
    }
}
