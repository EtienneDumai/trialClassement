import { Injectable } from '@angular/core';
import { Tour } from '../../models/tour.model';
@Injectable({
  providedIn: 'root',
})
export class TourService {
  private tour: Tour = new Tour(0, 0, 0, 0, 0); // Ajout d'une valeur initiale
  constructor() {}
  getTour(): Tour {
    return this.tour;
  }
  setTour(tour: Tour): void {
    this.tour = tour;
  }
}

