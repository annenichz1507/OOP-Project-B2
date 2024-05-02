import { Flight } from "../Flight/Flight";

export class Rout {
    private flight: Flight[] = [];
    private status: string;
    constructor(flight: Flight[], status: string) {
        this.flight = flight;
        this.status = status;
    }

    setFlight(flight: Flight) {
        
    }
}
