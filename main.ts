import { airPlaneType } from "./src/enum/airPlanType";
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


let passenger01 = new Passenger(1, "Kadin", 18, Gender.Male, "USA", 874556565, 46, []);
let passenger02 = new Passenger(2, "sanok", 33, Gender.Female, "USA", 877676599, 48, []);
let passenger03 = new Passenger(3, "Laty", 24, Gender.Male, "USA", 884746565, 66, []);
let frequentFlyer = new FrequentFlyer(1, "John Doe", 35, Gender.Male, "USA", 1234567890, 55, 10000,Status.Gold,"FF123456", Status.Platinum, new Date("2024-04-30"));

let gate01 = new Gate("Gate A12",GateStatus.Closed)
let gate02 = new Gate("Gate B8",GateStatus.Open)
let gate03 = new Gate("Gate B5",GateStatus.Closed)
let gate04 = new Gate("Gate A9",GateStatus.Open)

let theAirPort= new AirPort("Po Chen tunk","Cambodai, Phnome Penh")


passenger01.addFrequentFlyer(frequentFlyer)
theAirPort.addGate(gate01)
theAirPort.addGate(gate02)
theAirPort.addGate(gate03)
theAirPort.addGate(gate04)

// console.log(frequentFlyer);
// console.log(passenger01);
console.log(theAirPort);

