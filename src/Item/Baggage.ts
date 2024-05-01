import { Flight } from "../Flight/Flight";

export class Baggage{
    private id : number;
    private weight : number;
    private Fligh: Flight[]= [];
    constructor(id : number, weight: number, Fligh: Flight[]){
        this.id = id;
        this.weight = weight;
        this.Fligh = Fligh;
    }
    
}