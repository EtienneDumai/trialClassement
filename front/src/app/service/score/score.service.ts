import { Injectable } from '@angular/core';
import { Score } from '../../models/score.model';
import { PiloteService } from '../pilote/pilote.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private score: Score;

  constructor(private piloteService: PiloteService) {
    this.score = new Score([this.piloteService.getPilote()]);
  }

  getScore(): Score {
    return this.score;
  }
}

