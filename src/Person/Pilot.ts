import { Person } from "./Person";
import { Gender } from "../enum/gender";
import { Flight } from "../Flight/Flight";
import { Schedule } from "../Flight/Schedule";

export class Pilot extends Person {
    private position: string;
    private salary: number;
    // private flight: Flight[];

    constructor(id: number, name: string, age: number, gender: Gender, nationality: string, phoneNumber: number, weight: number,position: string,salary: number,) {
        super(id, name, age, gender, nationality, phoneNumber, weight);
        this.position = position;
        this.salary = salary;
        // this.flight = flight;
    }
    // constructor(position: string,salary: number, id: number, name: string, age: number, gender: Gender, nationality: string, phoneNumber: number, weight: number,flight: Flight[]) {
    //     super(id, name, age, gender, nationality, phoneNumber, weight);
    //     this.position = position;
    //     this.salary = salary;
    //     this.flight = flight;
    // }

    getPosition(): string {
        return this.position;
    }

    getSalary(): number {
        return this.salary;
    }

    // // Method to get the count of flights a pilot has to join for a given date
    // public getFlightsToJoinCount(date: string, pilotId: number): number {
    //     let count = 0;

    //     // Iterate through each flight to check if the pilot is assigned to it
    //     for (const flight of this.flight) {
    //         if (flight.getSchedule().getDate() === date) {
    //             const pilots = flight.getPilots();
    //             // Check if the pilot is assigned as either pilot or co-pilot
    //             for (const pilot of pilots) {
    //                 if (pilot.getId() === pilotId) {
    //                     count++;
    //                     break; // No need to check further pilots for this flight
    //                 }
    //             }
    //         }
    //     }

    //     return count;
    // }
}