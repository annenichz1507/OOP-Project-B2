import { Passenger } from "../Person/Passengers"
export class Ticket{
    private id: number
    private flyId: number
    private passenger:Passenger[]
    private price: number
    private departure: string
    private destination: string
    private seatPosition: number
    constructor(id: number, flyId: number, passenger:Passenger[], price:number, departure: string, destination: string, seatPosition:number){
        this.id = id
        this.flyId = flyId
        this.passenger = passenger
        this.price = price
        this.departure = departure
        this.destination = destination
        this.seatPosition = seatPosition
    }
    ticketDetail(): void {
        console.log("Ticket Details:");
        console.log("ID:", this.id);
        console.log("Flight ID:", this.flyId);
        console.log("Passengers:", this.passenger);
        console.log("Price:", this.price);
        console.log("Departure:", this.departure);
        console.log("Destination:", this.destination);
        console.log("Seat Position:", this.seatPosition);
    }
    
}