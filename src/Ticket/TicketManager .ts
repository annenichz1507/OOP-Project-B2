import { Ticket } from "./Ticket";
import { TicketType } from "../enum/TicketType";

export class TicketManager {
    private tickets: Ticket[];

    constructor() {
        this.tickets = [];
    }

    addTicket(ticket: Ticket): void {
        this.tickets.push(ticket);
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
