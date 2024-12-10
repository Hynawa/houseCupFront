import { Component, OnInit } from '@angular/core';
import { HouseDetails } from '../../model/houses/house-details';
import { HouseService } from '../../model/houses/house-service';
import { RouterModule } from '@angular/router';
import { HouseDetailsComponent } from '../house-details/house-details.component';
import { ScoreService } from '../../model/scores/score-service';
import { FirstPlaceDetails } from '../../model/firstPlace/firstPlace-details';
import { FirstPlaceService } from '../../model/firstPlace/firstPlace-service';
import { ScoreDetails } from '../../model/scores/score-details';


@Component({
  selector: 'app-house-list',
  imports: [RouterModule, HouseDetailsComponent],
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css'
})
export class HouseListComponent implements OnInit{
  houses!: HouseDetails[];
  firstPlace!: FirstPlaceDetails;
  selectedHouse: HouseDetails | null = null;
  houseScores!: ScoreDetails[];

  constructor(private houseService:HouseService, private scoreService:ScoreService, private firstPlaceService:FirstPlaceService){} 

  ngOnInit(): void {
    this.houses = this.houseService.getHousesDetails();
    this.firstPlace = this.firstPlaceService.getFirstPlace();
    this.houseScores = this.scoreService.getScoreDetails();
  }

  onHouseClick(house: HouseDetails){
      this.selectedHouse = house;
  }
}