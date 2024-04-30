import { Person } from "./Person";
<<<<<<< HEAD

class Pilot extends Person {
    constructor(id : number, name : string, age : number, gender : string, nationality : string, phoneNumber : number, weight : number) {
        super (id, name, age, gender, nationality, phoneNumber, weight);
        
=======
export class Pilot extends Person {
    private position: string;
    private salary: number;
    constructor(position: string,salary: number, id: number, name: string, age: number, gender: string,
        nationality: string, phoneNumber: number, weight: number) {
        super(id, name, age, gender, nationality, phoneNumber, weight);
        this.position = position;
        this.salary = salary;
    }

    getPosition(): string {
        return this.position;
>>>>>>> passenger
    }
}