
import { Passenger } from "../Person/Passengers";
import { Seat } from "../Airport/Seat";
import { Gate } from "../Airport/Gate";

class Boarding_Pass {
    private passengerName: Passenger[]=[];
    private seats: Seat[]=[];
    private flightNumber: string;
    private from: string;
    private to: string;
    private gateNumber: Gate;

    constructor(passengerName: Passenger[], seats: Seat[], from: string, 
    to: string, flightNumber: string, gateNumber: Gate) {
        this.passengerName = passengerName;
        this.seats = seats;
        this.flightNumber = flightNumber;
        this.from = from;
        this.to = to;
        this.gateNumber = gateNumber;
    }
}

