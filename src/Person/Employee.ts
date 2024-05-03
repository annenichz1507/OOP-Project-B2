import { Pilot } from "./Pilot";
import { CoPilot } from "./CoPilot";
import { FlightAttendant } from "./FlightAttendent";
import { Chef } from "./Chef";
import { Person } from "./Person";

export class Employee{
    private pilot: Pilot;
    private coPilot: CoPilot;
    private flightAttendent: FlightAttendant;
    private chef: Chef;


    constructor (pilot: Pilot,coPilot: CoPilot,flightAttendent: FlightAttendant,chef: Chef) {
        this.pilot = pilot;
        this.coPilot = coPilot;
        this.flightAttendent = flightAttendent;
        this.chef = chef;
    }

    // addTicket(...(pilot|coPilot|flightAttendent|chef): Ticket[]): void {
    //     ticket.forEach(t =>{
    //         this.tickets.push(t);
    //     })   
    // }

   

    
    
}