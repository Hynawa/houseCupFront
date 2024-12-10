import { Component, OnInit } from '@angular/core';
import { ScoreDetails } from '../../model/scores/score-details';
import { ScoreService } from '../../model/scores/score-service';
import { HouseDetails } from '../../model/houses/house-details';
import { ScoreDetailsComponent } from "../score-details/score-details.component";

@Component({
  selector: 'app-score-list',
  imports: [ScoreDetailsComponent],
  templateUrl: './score-list.component.html',
  styleUrl: './score-list.component.css'
})
export class ScoreListComponent implements OnInit {
  selectedHouse: HouseDetails | null = null;
  houseScores!: ScoreDetails[];

  constructor(private scoreService: ScoreService){

  }
  ngOnInit(): void {
    this.houseScores = this.scoreService.getScoreDetails();
  }

  onHouseClick(house: HouseDetails){
    this.selectedHouse = house;
}
}
