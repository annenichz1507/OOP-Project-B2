import { Gender } from "./src/enum/gender";
import { MealType } from "./src/enum/MealType";
import { Status } from "./src/enum/Status";
import { SeatType } from "./src/enum/SeatType";
import { Passenger } from "./src/Person/Passengers";
import { FrequentFlyer } from "./src/Item/Frequent_Flyer";
import { AirPort } from "./src/Airport/Airport";
import { Gate } from "./src/Airport/Gate";
import { GateStatus } from "./src/enum/gateStatus";
import { Airline } from "./src/Airport/Airline";
import { Ticket } from "./src/Ticket/Ticket";
import { TicketType } from "./src/enum/TicketType";
import { Flight } from "./src/Flight/Flight";
import { TicketManager } from "./src/Ticket/TicketManager ";
import { Rout } from "./src/Airport/Rout";
import { Booking } from "./src/Ticket/Booking";
import { BookingManager } from "./src/Ticket/Booking";
import { Baggage } from "./src/Item/Baggage";
import { Schedule } from "./src/Flight/Schedule";
import { Airplane } from "./src/Airport/Airplane";
import { Pilot } from "./src/Person/Pilot";

let passenger01 = new Passenger(1, "Kadin", 18, Gender.Male, "USA", 874556565, 46, []);
let passenger02 = new Passenger(2, "sanok", 33, Gender.Female, "USA", 877676599, 48, []);
let passenger03 = new Passenger(3, "Laty", 24, Gender.Male, "USA", 884746565, 66, []);

let frequentFlyer = new FrequentFlyer(Status.Gold,"FF123456", Status.Platinum, new Date("2024-04-30"));

let gate01 = new Gate("Gate A12",GateStatus.Closed)
let gate02 = new Gate("Gate B8",GateStatus.Open)
let gate03 = new Gate("Gate B5",GateStatus.Closed)
let gate04 = new Gate("Gate A9",GateStatus.Open)

let ticket01 = new Ticket(1, 123, passenger01, 100, "USA", "Thai", 3, TicketType.Return);
let ticket02 = new Ticket(2, 123, passenger01, 100, "USA", "Thai", 3, TicketType.Return);
let ticket03 = new Ticket(3, 123, passenger01, 100, "USA", "Thai", 3, TicketType.one_way);
let ticket04 = new Ticket(4, 123, passenger01, 100, "USA", "Thai", 3, TicketType.Return);

let airPlane01 = new Airplane("E Jet05","TSH 035",)
let airPlane02 = new Airplane("E Jet05","TSH 039",)
let airPlane03 = new Airplane("E Jet05","TSH 037",)
let schedule = new Schedule("9:3 AM","5:30 PM")

let pilot01 = new Pilot(1,"rith",35,Gender.Male,"khmer",70685945,65,"pilot",3000)

let flight = new Flight(1, "fin air", "cambodai", "china", schedule, airPlane01, pilot01)


let theAirPort= new AirPort("Po Chen tunk","Cambodai, Phnome Penh")
let theAirline = new Airline(1,"I ron",flight,pilot01)

let flightID = flight.getFlightID()
let baggage01 = new Baggage(1,7,flightID,passenger02)
let baggage02 = new Baggage(2,7,flightID,passenger02)
let baggage04 = new Baggage(3,7,flightID,passenger02)
let booking = new Booking("B00213", flight, passenger01, baggage01)



passenger01.addFrequentFlyer(frequentFlyer)
theAirPort.addGate(gate01)
theAirPort.addGate(gate02)
theAirPort.addGate(gate03)
theAirPort.addGate(gate04)

theAirPort.addPassenger(passenger01)
theAirPort.addPassenger(passenger02)
theAirPort.addPassenger(passenger03)

passenger02.addFrequentFlyer(frequentFlyer)
theAirline.addTicket(ticket01,ticket02,ticket03,ticket04)
theAirline.getReturnTicketPassengerCount()

//number of return tickets.
console.log(theAirline.getReturnTicketPassengerCount());




flight.addTicket(ticket01)
flight.addTicket(ticket02)
flight.addTicket(ticket03)
flight.addTicket(ticket04)

console.log(frequentFlyer);
console.log(passenger02);
console.log(theAirPort);
console.log(theAirline);
console.log(TicketManager);
console.log(flight.getReturnTicketCount());
console.log(baggage01);
console.log(flight);











