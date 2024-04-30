import { Person } from "./Person";
export class FlightAttendant extends Person {
    private position: string;
    private salary: number;
    constructor(position: string,salary: number,id: number, name: string, age: number, gender: boolean,
        nationality: string, phoneNumber: number, weight: number) {
        super(id, name, age, gender, nationality, phoneNumber, weight);
        this.position = position;
        this.salary = salary;
    }

    getPosition(): string {
        return this.position;
    }
}