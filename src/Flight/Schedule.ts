import { Flight } from "./Flight";

export class Schedule {
    private startTime: string;
    private endTime: string;

    constructor(startTime: string, endTime: string) {
        this.startTime = startTime;
        this.endTime = endTime;
    }
}