import { Airplane } from "../Airport/Airplane";
import { Ticket } from "../Ticket/Ticket";
import { TicketType } from "../enum/TicketType";
import { Schedule } from "./Schedule";
import { Pilot } from "../Person/Pilot";
import { CoPilot } from "../Person/CoPilot";
import { FlightAttendant } from "../Person/FlightAttendent";

export class Flight {
    private flightID: number;
    private flightName: string;
    private departure: string;
    private destination: string;
    private schedule: Schedule;
    private airplane: Airplane;;
    private tickets: Ticket[] = [];
    private pilots: Pilot;

    constructor(flightID: number, flightName: string, departure: string, destination: string, schedule: Schedule, airplane: Airplane, pilots:Pilot) {
        this.flightName = flightName;
        this.flightID = flightID;
        this.departure = departure;
        this.destination = destination;
        this.schedule = schedule;
        this.airplane = airplane;
        this.pilots = pilots;
    }

    public addTicket(ticket: Ticket): void {
        this.tickets.push(ticket);
    }

    public getReturnTicketCount(): number {
        let returnTicketCount = 0;
        for (const ticket of this.tickets) {
            if (ticket.getTicketType() === TicketType.Return) {
                returnTicketCount++;
            }
        }
        return returnTicketCount;
    }

    getFlightNumber(): number {
        return this.flightID;
    }

    getDepartureTime(): string {
        return this.departure;
    }

    getDestination(): string {
        return this.destination;
    }

    getFlightID(): number {
        return this.flightID;
    }

    setAirPlane(airplane:Airplane):void{
        this.airplane = airplane;
    }

    getSchedule(): Schedule {
        return this.schedule;
    }    

    // Method to get assigned pilots
    getPilots():Pilot{
        return this.pilots;
    }

}