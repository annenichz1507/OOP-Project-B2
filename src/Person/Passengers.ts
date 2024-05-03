import { Person } from "./Person";
import { Baggage } from "../Item/Baggage";
import { Gender } from "../enum/gender";
import { FrequentFlyer } from "../Item/Frequent_Flyer";
import { Ticket } from "../Ticket/Ticket";

export class Passenger extends Person {
    private baggage: Baggage[]; 
    private frequentFlyer: FrequentFlyer[] = [];

    constructor(id: number, name: string, age: number, gender: Gender, nationality: string, phoneNumber: number, weight: number, baggage: Baggage[] = []) { // Initialize baggage in constructor parameter list
        super(id, name, age, gender, nationality, phoneNumber, weight);
        this.baggage = baggage;
    }

    getPassengerId(): number {
        return this.getId();
    }

    addFrequentFlyer(frequentFlyer: FrequentFlyer): void {
        this.frequentFlyer.push(frequentFlyer); 
    }

    // getName(): string {
    //   return this.name;
    // }

    // getAge(): number {
      
    // }

    getBaggage(): Baggage[] {
        return this.baggage;
    }

    getFrequentFlyer(): FrequentFlyer[] {
        return this.frequentFlyer;
    }
}
