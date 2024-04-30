import { Person } from "./Person";
import { Baggage } from "../Item/Baggage";

export class Passenger extends Person {
    private baggage?: Baggage[];

    constructor(id: number, name: string, age: number, gender: string, nationality: string,
        phoneNumber: number, weight: number, baggage: Baggage[]) {
        super(id, name, age, gender, nationality, phoneNumber, weight);
        this.baggage = baggage;
    }

    getPassengerId():number{
        return this.getId();
            
    }
}
