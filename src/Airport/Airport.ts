// // import { Gate } from "./Gate";
// // import { Airline } from "./Airline";
// // import { Rout } from "./Rout";
// // import { Baggage } from "../Item/Baggage";
// // import { Passenger } from "../Person/Passengers";
// // import { BookingManager } from "../Ticket/Booking";

// // export class AirPort {
// //     private name: string;
// //     private address: string;
// //     private gate?: Gate[] = [];
// //     private airline?: Airline[] = [];
// //     private rout?: Rout[] = [];
// //     private passengers: Passenger[] = [];

// //     constructor(name: string, address: string, gate?: Gate[], airline?: Airline[], rout?: Rout[]) {
// //         this.name = name;
// //         this.address = address;
// //     }

// //     addGate(gate: Gate): void {
// //         this.gate?.push(gate);
// //     }

// //     addAirline(airline: Airline): void {
// //         this.airline?.push(airline);
// //     }

// //     addRout(rout: Rout): void {
// //         this.rout?.push(rout);
// //     }

// //     addPassenger(passenger: Passenger): void {
// //         this.passengers.push(passenger);
// //     }

// //     getPassengerTripDetails(bookingRefNumber: string): any {
// //         const tripDetails: any = {
// //             flights: [],
// //             bags: [],
// //             customerInformation: []
// //         };

// //         // Search for passenger with given BRN
// //         const passenger = this.passengers.find(passenger => passenger.bookingRefNumber === bookingRefNumber);

// //         if (passenger) {
// //             // Find flights associated with the passenger
// //             tripDetails.flights = passenger.flights.map(flight => ({
// //                 flightNumber: flight.flightNumber,
// //                 departureTime: flight.departureTime,
// //                 destination: flight.destination
// //             }));

// //             // Find bags associated with the passenger
// //             tripDetails.bags = passenger.bags.map(bag => ({
// //                 bagId: bag.bagId,
// //                 weight: bag.weight
// //             }));

// //             // Get customer information
// //             tripDetails.customerInformation = {
// //                 name: passenger.name,
// //                 age: passenger.age,
// //                 // Add more customer information fields as needed
// //             };
// //         }

// //         return tripDetails;
// //     }

// // }


import { Gate } from "./Gate";
import { Airline } from "./Airline";
import { Rout } from "./Rout";
import { Baggage } from "../Item/Baggage";
import { Passenger } from "../Person/Passengers";
import { BookingManager, Booking } from "../Ticket/Booking"; // Import Booking and BookingManager

export class AirPort {
    private name: string;
    private address: string;
    private gate?: Gate[] = [];
    private airline?: Airline[] = [];
    private rout?: Rout[] = [];
    private passengers: Passenger[] = [];
    private bookingManager: BookingManager; // Add BookingManager instance

    constructor(name: string, address: string, gate?: Gate[], airline?: Airline[], rout?: Rout[], bookingManager?: BookingManager) {
        this.name = name;
        this.address = address;
        this.bookingManager = bookingManager || new BookingManager(); // Initialize BookingManager if not provided
    }

    addGate(gate: Gate): void {
        this.gate?.push(gate);
    }

    addAirline(airline: Airline): void {
        this.airline?.push(airline);
    }

    addRout(rout: Rout): void {
        this.rout?.push(rout);
    }

    addPassenger(passenger: Passenger): void {
        this.passengers.push(passenger);
    }

    getPassengerTripDetails(bookingRefNumber: string): any {
        const tripDetails: any = {
            flights: [],
            bags: [],
            customerInformation: {}
        };

        // Retrieve booking using BRN
        const booking = this.bookingManager.getBookingDetailsByBRN(bookingRefNumber);

        if (booking) {
            // Retrieve flight details from the booking
            const flight = booking.getFlight();
            tripDetails.flights.push({
                flightNumber: flight.getFlightNumber(),
                departureTime: flight.getDepartureTime(),
                destination: flight.getDestination()
            });

            // Retrieve baggage details from the booking
            const baggage = booking.getBaggage();
            tripDetails.bags.push({
                bagId: baggage.getBagId(),
                weight: baggage.getWeight()
            });

            // Retrieve customer information from the booking
            const passenger = booking.getPassenger();
            tripDetails.customerInformation = {
                name: passenger.getName(),
                age: passenger.getAge(),
                // Add more customer information fields as needed
            };
        }

        return tripDetails;
    }
}

// ============================================
// import { Gate } from "./Gate";
// import { Airline } from "./Airline";
// import { Rout } from "./Rout";
// import { Baggage } from "../Item/Baggage";
// import { Passenger } from "../Person/Passengers";
// import { BookingManager, Booking } from "../Ticket/Booking";

// // Define the AirPort class
// export class AirPort {
//     private name: string;
//     private address: string;
//     private gate?: Gate[] = [];
//     private airline?: Airline[] = [];
//     private rout?: Rout[] = [];
//     private passengers: Passenger[] = [];
//     private bookingManager: BookingManager;

//     // Constructor to initialize the AirPort instance
//     constructor(name: string, address: string, bookingManager: BookingManager) {
//         this.name = name;
//         this.address = address;
//         this.bookingManager = bookingManager;
//     }

//     // Method to add a gate to the airport
//     addGate(gate: Gate): void {
//         this.gate?.push(gate);
//     }

//     // Method to add an airline to the airport
//     addAirline(airline: Airline): void {
//         this.airline?.push(airline);
//     }

//     // Method to add a route to the airport
//     addRout(rout: Rout): void {
//         this.rout?.push(rout);
//     }

//     // Method to add a passenger to the airport
//     addPassenger(passenger: Passenger): void {
//         this.passengers.push(passenger);
//     }

//     // Method to retrieve trip details for a passenger using booking reference number
//     getPassengerTripDetails(bookingRefNumber: string): any {
//         const tripDetails: any = {
//             flights: [],
//             bags: [],
//             customerInformation: {}
//         };

//         // Retrieve booking using booking reference number
//         const booking = this.bookingManager.getBookingDetailsByBRN(bookingRefNumber);

//         if (booking) {
//             // Retrieve flight details from the booking
//             const flight = booking.getFlight();
//             tripDetails.flights.push({
//                 flightNumber: flight.getFlightNumber(),
//                 departureTime: flight.getDepartureTime(),
//                 destination: flight.getDestination()
//             });

//             // Retrieve baggage details from the booking
//             const baggage = booking.getBaggage();
//             tripDetails.bags.push({
//                 bagId: baggage.getBagId(),
//                 weight: baggage.getWeight()
//             });

//             // Retrieve customer information from the booking
//             const passenger = booking.getPassenger();
//             tripDetails.customerInformation = {
//                 name: passenger.getName(),
//                 age: passenger.getAge(),
//                 // Add more customer information fields as needed
//             };
//         }

//         return tripDetails;
//     }
// }


