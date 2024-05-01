import { Person } from "./Person";
import { Baggage } from "../Item/Baggage";
import { Gender } from "../enum/gender";
import {FrequentFlyer} from "../Item/Frequent_Flyer"

export class Passenger extends Person {
    public baggage?: Baggage[];
    private frequentFlyer?: FrequentFlyer[] = []

    constructor(id: number, name: string, age: number, gender: Gender, nationality: string,phoneNumber: number, weight: number, baggage: Baggage[],  private author?: FrequentFlyer[] ) {
        super(id, name, age, gender, nationality, phoneNumber, weight);
        this.baggage = baggage;
    }

    getPassengerId(): number {
        return this.getId();

    }

    addFrequentFlyer(frequentFlyer:FrequentFlyer): void {
        this.frequentFlyer?.push(frequentFlyer)
    }


}