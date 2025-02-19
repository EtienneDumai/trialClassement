export class Tour {
    nbZero: number;
    nbun:number;
    nbDeux:number;
    nbTrois:number;
    nbCinq:number;
    constructor(nbZero: number, nbun: number, nbDeux: number, nbTrois: number, nbCinq: number) {
        this.nbZero = nbZero;
        this.nbun = nbun;
        this.nbDeux = nbDeux;
        this.nbTrois = nbTrois;
        this.nbCinq = nbCinq;
    }
    public getNbZero(): number {
        return this.nbZero;
    }
    public setNbZero(nbZero: number): void {
        this.nbZero = nbZero;
    }
    public getNbun(): number {
        return this.nbun;
    }
    public setNbun(nbun: number): void {
        this.nbun = nbun;
    }
    public getNbDeux(): number {
        return this.nbDeux;
    }
    public setNbDeux(nbDeux: number): void {
        this.nbDeux = nbDeux;
    }
    public getNbTrois(): number {
        return this.nbTrois;
    }
    public setNbTrois(nbTrois: number): void {
        this.nbTrois = nbTrois;
    }
    public getNbCinq(): number {
        return this.nbCinq;
    }
    public setNbCinq(nbCinq: number): void {
        this.nbCinq = nbCinq;
    }
    
}
