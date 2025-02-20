import { Injectable } from '@angular/core';
import { Tour } from '../../models/tour.model';
@Injectable({
  providedIn: 'root',
})
export class TourService {
  private tour: Tour[] = [];
  constructor() {}
  getTour() {
    return this.tour;
  }
  setTour(tour: Tour[]) {
    this.tour = tour;
  }
  
}
