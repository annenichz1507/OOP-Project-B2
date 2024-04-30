export class Customer{
    private id : number;
    private name : string;
    private phone : Number;
    private nationality : string;

    constructor(id : number, name : string, phone : Number, nationality : string){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.nationality = nationality;
    }

    getId():number{
        return this.id;
    }
}