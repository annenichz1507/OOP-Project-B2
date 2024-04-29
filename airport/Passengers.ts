import { Person } from "./Person";
export class Passenger extends Person {
    private baggage: Baggage[] = [];
    constructor(id: number, name: string, age: number, gender: boolean,
        nationality: string, phoneNumber: number, weight: number, baggage: Baggage[]) {
        super(id, name, age, gender, nationality, phoneNumber, weight);
    }
}