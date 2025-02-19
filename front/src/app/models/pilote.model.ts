import { Tour } from './tour.model';
export class Pilote {
    id: number;
    nom: string;
    prenom: string;
    tours: Tour[];

    constructor(id: number, nom: string, prenom: string, tours: Tour[]) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.tours = tours;
    }
    public getId(): number {
        return this.id;
        
    }
    public getNom(): string {
        return this.nom;
    }

    public setNom(nom: string): void {
        this.nom = nom;
    }

    public getPrenom(): string {
        return this.prenom;
    }

    public setPrenom(prenom: string): void {
        this.prenom = prenom;
    }

    public getTours(): Tour[] {
        return this.tours;
    }

    public setTours(tours: Tour[]): void {
        this.tours = tours;
    }
    public ajoutePiedTour(tour: Tour): void {
        this.tours.push(tour);
    }
}
