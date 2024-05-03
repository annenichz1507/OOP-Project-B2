import { Flight } from "../Flight/Flight";
import { Passenger } from "../Person/Passengers";

export class Baggage{
    private id : number;
    private weight : number;
    private flighID: number;
    private psssenger : Passenger;

    constructor(id : number, weight: number, flighID: number,psssenger:Passenger){
        this.id = id;
        this.weight = weight;
        this.flighID = flighID;
        this.psssenger = psssenger;
    }

    getBagId(): number {
        return this.id;
    }

    getWeight(): number {
        return this.weight;
    }
    
}