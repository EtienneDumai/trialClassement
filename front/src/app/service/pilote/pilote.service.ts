import { Injectable } from '@angular/core';
import { Pilote } from '../../models/pilote.model';
import { TourService } from '../tour/tour.service';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {
  private pilote: Pilote;
  constructor(private tourService: TourService) {
    this.pilote = new Pilote(0, 'Dumai', 'Etienne', [this.tourService.getTour()]); // Correction ici
  }

  getPilote(): Pilote {
    return this.pilote;
  }

  setPilote(pilote: Pilote): void {
    this.pilote = pilote;
  }
}

