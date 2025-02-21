export interface ComptePoints {
  '0': number;
  '1': number;
  '2': number;
  '3': number;
  '5': number;
}

export interface Tour {
  numero: number;
  compte_points: ComptePoints;
}

export interface Pilote {
  pilote_id: string;
  nom: string;
  tours: Tour[];
  total_points: number;
  classement: number;
}

export interface Classement {
  _id: string;
  nom_course: string;
  date: string;
  lieu: string;
  participants: Pilote[];
}
