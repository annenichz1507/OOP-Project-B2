import { Seat } from "./Seat";
export class Airplane {
    private name : string
    private numberOfAirplane: string
    private seat : Seat [ ] =[]
    constructor (name: string, numberOfAirplane: string){
        this.name = name;
        this.numberOfAirplane = numberOfAirplane;
    }
    getSeat(){
        return this.seat;
    }
}