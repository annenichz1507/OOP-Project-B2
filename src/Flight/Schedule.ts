import { Flight } from "./Flight";

export class Schedule {
    private flight: Flight[] = [];
    private destination: string;
    private startTime: Date;
    private endTime: Date;

    constructor(flight: Flight[], destination: string, startTime: Date, endTime: Date) {
        this.flight = flight;
        this.destination = destination;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}