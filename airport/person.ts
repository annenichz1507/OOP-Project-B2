export abstract class Person {
    private id : number;
    private name : string;
    private age : number;
    private gender : boolean;
    private nationality : string;
    private phoneNumber : number;
    private weight : number;

    constructor(id : number, name : string, age : number, gender : boolean, nationality : string,
         phoneNumber : number, weight : number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
        this.phoneNumber = phoneNumber; 
        this.weight = weight;
        
    }
}