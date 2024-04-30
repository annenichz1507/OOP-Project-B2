export class airline {
    private id: number
    private name: string
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    booking(){
        console.log("Booking")
    }
}