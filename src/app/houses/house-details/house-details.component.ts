import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HouseDetails } from '../../model/houses/house-details';
import { FirstPlaceDetails } from '../../model/firstPlace/firstPlace-details';
import { ScoreDetails } from '../../model/scores/score-details';
import { ScoreService } from '../../model/scores/score-service';

@Component({
  selector: 'app-house-details',
  imports: [],
  templateUrl: './house-details.component.html',
  styleUrl: './house-details.component.css'
})
export class HouseDetailsComponent {
  firstPlaceDetails: FirstPlaceDetails | null = null;
  
  @Input()
  detail : HouseDetails | null = null;
  
  @Input()
  scrDet : ScoreDetails | null = null;
}
