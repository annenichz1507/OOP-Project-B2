import { Gate } from "./Gate";
import { Airline } from "./Airline";
import {Rout } from "./Rout";

export class AirPort{
    private name:string;
    private address:string;
    private gate?:Gate[] = [];
    private airline?:Airline[] = [];
    private rout?:Rout[] = [];
    constructor(name:string, address:string, gate?:Gate[], airline?:Airline[], rout?:Rout[]){
        this.name = name;
        this.address = address;
    }

    addGate(gate:Gate):void{
        this.gate?.push(gate);
    }

    addAirline(airline:Airline):void{
        this.airline?.push(airline);
    }

    addRout(rout:Rout):void{
        this.rout?.push(rout);
    }

}