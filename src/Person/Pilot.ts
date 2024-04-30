import { Person } from "./Person";

class Pilot extends Person {
    constructor(id : number, name : string, age : number, gender : string, nationality : string, phoneNumber : number, weight : number) {
        super (id, name, age, gender, nationality, phoneNumber, weight);
        
    }
}