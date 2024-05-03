import { Flight } from "../Flight/Flight";

export class Rout {
    private status: string;
    private flight: Flight[] = [];
    constructor(status: string) {
        this.status = status;
    }

    setFlight(flight: Flight) {
        this.flight.push(flight);
    }
}
