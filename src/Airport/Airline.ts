import { Flight } from "../Flight/Flight";
import { Ticket } from "../Ticket/Ticket";
import { Pilot } from "../Person/Pilot";
import { CoPilot } from "../Person/CoPilot";
import { FlightAttendant } from "../Person/FlightAttendent";
import { Chef } from "../Person/Chef";
import { Person } from "../Person/Person";
import { Employee } from "../Person/Employee";
import { TicketType } from "../enum/TicketType";

export class Airline {
    private id: number;
    private name: string;
    private flights: Flight;
    private pilots: Pilot;
    private employees: Employee[] = [];
    private tickets: Ticket[] = [];
    
    constructor(id: number, name: string, flights: Flight, pilots: Pilot) {
        this.id = id;
        this.name = name;
        this.flights = flights;
        this.pilots = pilots;
    }

    booking(ticket: Ticket): void {
        this.tickets.push(ticket);
    }

    addTickets(...tickets: Ticket[]): void {
        this.tickets.push(...tickets);
    }

    getReturnTicketPassengerCount(): number {
        return this.tickets.filter(ticket => ticket.getTicketType() === TicketType.Return).length;
    }

    hireEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    getTotalSalary(): number {
        let totalSalary = 0;
        this.employees.forEach(employee => {
            if (employee instanceof Pilot || employee instanceof CoPilot ||
                employee instanceof FlightAttendant || employee instanceof Chef) {
                totalSalary += employee.getSalary();
            }
        });
        return totalSalary;
    }
}
