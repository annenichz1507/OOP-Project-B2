import { MealType } from "../enum/MealType";
import { SeatType } from "../enum/SeatType";
import { Flight } from "../Flight/Flight";
import { Ticket } from "../Ticket/Ticket";
import { TicketType } from "../enum/TicketType";
import { Pilot } from "../Person/Pilot";

export class Airline {
    private id: number
    private name: string
    private flights: Flight;
    private pilots: Pilot;
    private tickets: Ticket[]= [];

    
    constructor(id: number, name: string,flights: Flight, pilots: Pilot) {
        this.id = id;
        this.name = name;
        this.flights = flights;
        this.pilots = pilots
    }

    booking(){
        
    }

    addTicket(...ticket: Ticket[]): void {
        ticket.forEach(t =>{
            this.tickets.push(t);
        })   
    }

    getReturnTicketPassengerCount(): number {
        let returnTicketPassengerCount = 0;
        for (const ticket of this.tickets) {
            if (ticket.getTicketType() === TicketType.Return) {
                returnTicketPassengerCount++;
            }
        }
        return returnTicketPassengerCount;
    }


    
}