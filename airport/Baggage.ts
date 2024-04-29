import {Flight} from './Flight';
export class Baggage{
    private id : number;
    private weight : number;
    private flightID : Flight;
    constructor(id : number, weight: number, flightID: Flight){
        this.id = id;
        this.weight = weight;
        this.flightID = flightID;
    }
}