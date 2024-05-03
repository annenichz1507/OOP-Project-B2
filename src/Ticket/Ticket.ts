import { Passenger } from "../Person/Passengers";
import { TicketType } from "../enum/TicketType";

export class Ticket {
    private id: number;
    private flyId: number;
    private passenger: Passenger;
    private price: number;
    private departure: string;
    private destination: string;
    private seatPosition: number;
    private ticketType: TicketType;

    constructor(id: number, flyId: number, passenger: Passenger, price: number, departure: string, destination: string, seatPosition: number, ticketType: TicketType) {
        this.id = id;
        this.flyId = flyId;
        this.passenger = passenger;
        this.price = price;
        this.departure = departure;
        this.destination = destination;
        this.seatPosition = seatPosition;
        this.ticketType = ticketType; // Assign the parameter value, not the enum type
    }

    ticketDetail(): void {
        // Implementation for ticket details
    }

    getTicketType(): TicketType {
        return this.ticketType;
    }
}
