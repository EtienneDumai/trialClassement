import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Classement } from '../../models/score.model';

@Injectable({
  providedIn: 'root'
})
export class ClassementService {
  private classements: Classement[] = [
    {
      _id: "1",
      nom_course: "Championnat National 2025",
      date: "2025-06-15T00:00:00Z",
      lieu: "Lyon, France",
      participants: [
        {
          pilote_id: "p1",
          nom: "Marc Dupont",
          tours: [
            { numero: 1, compte_points: { "0": 12, "1": 5, "2": 3, "3": 2, "5": 4 } },
            { numero: 2, compte_points: { "0": 10, "1": 7, "2": 4, "3": 3, "5": 2 } },
            { numero: 3, compte_points: { "0": 14, "1": 6, "2": 2, "3": 1, "5": 3 } }
          ],
          total_points: 48,
          classement: 1
        },
        {
          pilote_id: "p2",
          nom: "Jean Martin",
          tours: [
            { numero: 1, compte_points: { "0": 10, "1": 6, "2": 2, "3": 3, "5": 5 } },
            { numero: 2, compte_points: { "0": 12, "1": 5, "2": 3, "3": 2, "5": 4 } },
            { numero: 3, compte_points: { "0": 11, "1": 7, "2": 4, "3": 2, "5": 3 } }
          ],
          total_points: 52,
          classement: 2
        }
      ]
    }
  ];

  constructor() {}

  getClassements(): Observable<Classement[]> {
    return of(this.classements);
  }

  getClassement(id: string): Observable<Classement | undefined> {
    const classement = this.classements.find(c => c._id === id);
    return of(classement);
  }
}
