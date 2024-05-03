import { Flight } from "../Flight/Flight";
import { Baggage } from "../Item/Baggage";
import { Customer } from "../Person/Customer";
import { Passenger } from "../Person/Passengers";

export class Booking {
    private bookingReferenceNumber: string;
    private flight: Flight;
    private passenger: Passenger;
    private baggage: Baggage;

    constructor(bookingReferenceNumber: string, flight: Flight, passenger: Passenger, baggage: Baggage) {
        this.bookingReferenceNumber = bookingReferenceNumber;
        this.flight = flight;
        this.passenger = passenger;
        this.baggage = baggage;
    }

    // Getters for accessing booking details
    public getBookingReferenceNumber(): string {
        return this.bookingReferenceNumber;
    }

    public getFlight(): Flight {
        return this.flight;
    }

    public getPassenger(): Passenger {
        return this.passenger;
    }

    public getBaggage(): Baggage {
        return this.baggage;
    }
}

// Assuming you have a central controller or service that manages bookings
export class BookingManager {
    private bookings: Booking[] = [];

    // Method to add a booking to the system
    public addBooking(booking: Booking): void {
        this.bookings.push(booking);
    }

    // Method to retrieve booking details using BRN
    public getBookingDetailsByBRN(bookingReferenceNumber: string): Booking | undefined {
        return this.bookings.find(booking => booking.getBookingReferenceNumber() === bookingReferenceNumber);
    }
}
