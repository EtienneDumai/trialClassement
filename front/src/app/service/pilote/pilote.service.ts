import { Injectable } from '@angular/core';
import { Pilote } from '../../models/pilote.model';

@Injectable({
  providedIn: 'root'
})
export class PiloteService {
  private pilote: Pilote = new Pilote(0, 'Dumai', 'Etienne', []);
  constructor() { }
  getPilote() {
    return this.pilote;
  }
  setPilote(pilote : Pilote){
    this.pilote = pilote
  }
}
