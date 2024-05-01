import { Gender } from "../enum/gender";
import { Airline } from "../Airport/Airline";
export class Customer {
    private id : number;
    private name : string;
    private age : number;
    private gender : Gender;
    private nationality : string;
    private phoneNumber : number;

    constructor(id : number, name : string, age : number, gender : Gender, nationality : string, phoneNumber : number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
        this.phoneNumber = phoneNumber; 
        
    }

    getId() {
        return this.id;
    }

    getAirlines() {
        
    }
}