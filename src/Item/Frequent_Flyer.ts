import { Person } from "../Person/Person";
import { Gender } from "../enum/gender";

export class FrequentFlyer extends Person {
    public milesEarned: number;
    public status: string;
    public membershipNumber: string;
    public loyaltyLevel: string;
    public lastFlightDate: Date;

    constructor(id: number, name: string, age: number, gender: Gender, nationality: string, phoneNumber: number, weight:number, milesEarned: number, status: string, membershipNumber: string, loyaltyLevel: string, lastFlightDate: Date) {
        super(id, name, age, gender, nationality, phoneNumber, weight);
        this.milesEarned = milesEarned;
        this.status = status;
        this.membershipNumber = membershipNumber;
        this.loyaltyLevel = loyaltyLevel;
        this.lastFlightDate = lastFlightDate;
    }

    // Additional methods specific to frequent flyers can be added here
}
