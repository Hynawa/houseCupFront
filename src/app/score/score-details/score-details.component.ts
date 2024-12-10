import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScoreDetails } from '../../model/scores/score-details';

@Component({
  selector: 'app-score-details',
  imports: [],
  templateUrl: './score-details.component.html',
  styleUrl: './score-details.component.css'
})
export class ScoreDetailsComponent {

  @Input({
    required: true
  })

  scrDet: ScoreDetails | null = null;
  
}