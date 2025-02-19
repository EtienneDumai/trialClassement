import { Tour } from './tour.model';
export interface Pilote {
    id: number;
    nom: string;
    prenom: string;
    tours: Tour[];
}
