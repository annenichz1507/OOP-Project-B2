
export class Gate {
    private numberOfSeat: string;
    private typeOfAircraft: string;
    private status: string;

    constructor(numberOfSeat: string, typeOfAircraft: string, status: string) {
        this.numberOfSeat = numberOfSeat;
        this.typeOfAircraft = typeOfAircraft;
        this.status = status;
    }
}